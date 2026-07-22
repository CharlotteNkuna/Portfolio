import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
}

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-all duration-300";

  const primaryStyle = {
    background: "linear-gradient(135deg,#F48FB1,#C084FC)",
    color: "#fff",
    boxShadow: "0 12px 30px rgba(244,143,177,.35)",
  };

  const secondaryStyle = {
    background: "transparent",
    color: "var(--heading)",
    border: "2px solid var(--border)",
  };

  const style =
    variant === "primary"
      ? primaryStyle
      : secondaryStyle;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{
          y: -3,
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className={baseClasses}
        style={style}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{
        y: -3,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={baseClasses}
      style={style}
    >
      {children}
    </motion.button>
  );
}

export default Button;