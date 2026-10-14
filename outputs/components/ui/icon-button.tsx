import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Button } from "@/components/ui/button";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, children, ...props }: IconButtonProps) {
  return (
    <Button aria-label={label} size="icon" variant="ghost" {...props}>
      {children}
    </Button>
  );
}
