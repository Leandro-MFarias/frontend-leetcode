import { NextResponse } from "next/server";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
};

const JUDGE0_API = process.env.JUDEGE0_API_URL;
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const RAPID_API_HOST = process.env.RAPID_API_HOST;

async function submitCode(sourceCode: string, languageId: number) {
  const response = await fetch(`${JUDGE0_API}/submissions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": RAPID_API_KEY!,
      "x-rapidapi-host": RAPID_API_HOST!,
    },
    body: JSON.stringify({
      sourceCode: sourceCode,
      languageId: languageId,
      stdin: "",
    }),
  });
  const data = await response.json();
  return data.token();
}

async function getResult(token: string) {
  const response = await fetch(`${JUDGE0_API}/submissions/${token}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY!,
      "X-RapidAPI-Host": RAPID_API_HOST!,
    },
  });

  return await response.json();
}

export async function POST(request: Request) {
  try {
    const { code, language } = await request.json();

    // Get Language ID
    const languageId = LANGUAGE_IDS[language as keyof typeof LANGUAGE_IDS];
    if (!languageId) {
      return NextResponse.json(
        { error: "Unsupported Language" },
        { status: 400 }
      );
    }

    //PREPARE CODE BASED on language
    let sourceCode = code;
    if (language === "java") {
      sourceCode = `
			public class Main {
				public static void main(String[] args) {
					${code}
				}
			}
			`;
		}
		
		const token = await submitCode(sourceCode, languageId)

		let result;
		for (let i = 0; i < 10; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			result = await getResult(token)
			if (result.status.id !== 1 && result.status.id !== 2) {
				break
			}
		}

		if (result.status.id === 3) {
			return NextResponse.json({
				output: result.stdout || "code executed sucesso",
				error: null,
			})
		} else if (result.status.id === 6) {
			return NextResponse.json({
				output: null,
				error: result.compile_output,
			})
		} else if (result.stderr) {
			return NextResponse.json({
				output: null,
				error: result.stderr,
			})
		} else {
			return NextResponse.json({
				output: null,
				error: result.status.description,
			})
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}