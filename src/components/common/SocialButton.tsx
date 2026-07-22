import type { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
      h-12
      w-12
      rounded-full
      flex
      items-center
      justify-center
      bg-white
      dark:bg-[#241F2B]
      shadow-lg
      hover:-translate-y-1
      hover:bg-pink-500
      hover:text-white
      transition-all
      duration-300"
    >
      {children}
    </a>
  );
}

export default SocialButton;