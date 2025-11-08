import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxWidth?:
    | "max-w-screen-2xl"
    | "max-w-screen-xl"
    | "max-w-screen-lg"
    | "max-w-screen-md"
    | "max-w-screen-sm";
}

export default function Container({
  children,
  maxWidth = "max-w-screen-xl",
  className,
}: Readonly<Props>) {
  return (
    <div
      className={cn("container mx-auto px-4 sm:px-0 grow", maxWidth, className)}
    >
      {children}
    </div>
  );
}
