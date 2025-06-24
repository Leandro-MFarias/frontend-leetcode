interface ContainerHeaderProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
}

export function ContainerHeader({
  title,
  icon,
  description,
}: ContainerHeaderProps) {
  return (
    <div className="flex items-center space-x-2 bg-neutral-700/50 rounded-t-xl p-2">
      {icon}
      <div className="flex justify-between font-bold w-full">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
