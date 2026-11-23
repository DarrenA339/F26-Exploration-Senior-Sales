import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
};

const styles = {
  primary: "bg-brand text-black hover:bg-brand-dark",
  ghost: "bg-white text-black ring-1 ring-black/25 hover:bg-black/5",
  danger: "bg-white text-red-700 ring-1 ring-red-300 hover:bg-red-50",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={`px-5 py-2 text-sm font-extrabold uppercase tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
