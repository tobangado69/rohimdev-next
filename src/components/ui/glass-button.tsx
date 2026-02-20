import Link from "next/link";

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  variant?: "default" | "red" | "green";
  external?: boolean;
}

export function GlassButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  variant = "default",
  external = false,
}: GlassButtonProps) {
  const variantClass =
    variant === "red"
      ? "glass-button glass-button-red"
      : variant === "green"
        ? "glass-button glass-button-green"
        : "glass-button";
  const baseClass =
    "all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full mt-1 mb-1 relative inline-block";

  const textClass =
    variant === "red"
      ? "button-text relative block select-none font-medium text-base text-neutral-900 tracking-tight px-6 py-3.5"
      : variant === "green"
        ? "button-text relative block select-none font-medium text-base text-neutral-900 tracking-tight px-6 py-3.5"
        : "button-text relative block select-none font-medium text-base text-neutral-800 tracking-tight px-6 py-3.5";

  const content = (
    <>
      <span className={textClass}>{children}</span>
      <div className="button-shine" />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${variantClass} ${baseClass} ${className}`}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClass} ${baseClass} ${className}`}
    >
      {content}
    </button>
  );
}
