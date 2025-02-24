import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
  disabled: boolean;
}

export const BackButton = ({ label, href, disabled }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" disabled={disabled}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
