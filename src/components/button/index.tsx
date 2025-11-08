import { ComponentProps } from "react";
import classNames from "classnames";
import Icon from "../icon";

type CustomButtonProps = {
  loading?: boolean;
  icon?: string;
  iconColor?: string | undefined;
  variant: "primary" | "secondary" | "white" | "outline" | "default";
};
export type ActionButtonProps = ComponentProps<"button"> & CustomButtonProps;

export default function ActionButton({
  className,
  children,
  loading,
  icon,
  iconColor,
  variant = "default",
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={classNames(
        `flex items-center justify-center gap-3 px-4 py-3 w-full text-center text-base font-semibold leading-6 rounded-sm border-zinc-400/50 shadow-sm transition-background duration-100 ${className}`,
        {
          "bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 hover:dark:bg-neutral-500 dark:border-neutral-600":
            variant === "default",
          "bg-white hover:bg-neutral-100 dark:bg-neutral-700 hover:dark:bg-neutral-500 dark:border-neutral-600 text-primary-500":
            variant === "white",
          "bg-primary-600 hover:bg-primary-700 text-white":
            variant === "primary",
          "bg-secondary-600 hover:bg-secondary-500 text-white": variant === "secondary",
          "bg-transparent border text-secondary-600 border-secondary-600 hover:bg-secondary-600 hover:text-white": variant === "outline",
          "disabled:opacity-75": props.disabled || loading,
        }
      )}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} color={iconColor} />}
      {loading && (
        <svg
          className={classNames(
            "animate-spin h-5 w-5 text-gray-500 dark:text-white",
            {
              "text-white": variant === "primary" || variant === "secondary",
            }
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  );
};
