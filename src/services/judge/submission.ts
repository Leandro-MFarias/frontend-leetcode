import { api } from "../api";

export async function sendSubmission(data: object) {
  const res = await fetch(`${api}/submission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(data),
  }) 
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message)
  }

  return res.json()
}

export async function getSubmission(token: string) {
  const res = await fetch(`${api}/submission/${token}`, {
    method: "GET",
    credentials: "include",
  })
  
  return res.json()
}