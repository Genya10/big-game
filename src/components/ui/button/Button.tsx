import type { HTMLAttributes, ReactNode } from "react";
import cn from "clsx";
import cl from "./Button.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gray";
  isCircle?: boolean
}

export function Button(
    { children, 
      variant = "primary", 
      isCircle ,
      className,
      ...rest }: Props) {
  return (
    <button className={cn(cl.button,
     cl[variant], {
      [cl.circle]:isCircle
     },
      className)} 
      {...rest}>
      {children}
    </button>
  );
}
