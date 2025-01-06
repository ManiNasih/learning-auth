interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-semibold">Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
