"use client";
import classNames from "classnames";
import { ComponentProps } from "react";
import Icon from "../icon";
import cn from "@/utils/cn";

type CustomInputProps = {
  label: string;
  error?: boolean;
  message?: string;
  icon?: string;
  inputClassName?: string;
};
export type InputProps = ComponentProps<"input"> & CustomInputProps;
export type TextareaProps = ComponentProps<"textarea"> & CustomInputProps;
export type SelectProps = ComponentProps<"select"> & CustomInputProps;

export const Input = ({
  error,
  className,
  inputClassName,
  message,
  id,
  label,
  icon,
  ...props
}: InputProps) => {
  return (
    <div className={cn("mb-2 w-full", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex items-center relative bg-black/5 border-zinc-400/20 rounded-lg dark:bg-neutral-900 focus:border-primary-400 focus:ring-primary-400 focus:ring-1">
        {icon && (
          <div className="pointer-events-none ps-4">
            <Icon name={icon} color="text-black/50 dark:text-white/50" />
          </div>
        )}
        <input
          id={id}
          className={classNames(
            `p-3 block w-full grow text-black bg-transparent border-0 focus:outline-none focus:ring-0 dark:text-white placeholder:text-base placeholder:text-black/70 dark:placeholder:text-white/70 text-sm ${inputClassName}`,
            {
              "border border-red-500": error,
            }
          )}
          {...props}
        />
      </div>
      {message && <p className="text-red-500 text-xs italic">{message}</p>}
    </div>
  );
};

export const Textarea = ({
  className,
  error,
  message,
  id,
  label,
  icon,
  ...props
}: TextareaProps) => {
  return (
    <div className={cn("mb-2 w-full", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          className={classNames(
            "p-3 block w-full bg-black/5 border-zinc-400/20 text-black dark:bg-neutral-900 dark:text-white placeholder:text-base placeholder:text-black/50 dark:placeholder:text-white/50 rounded-2xl text-sm focus:border-zinc-400/30 focus:ring-zinc-400/30",
            {
              "border border-red-500": error,
              "sm:p-4 sm:ps-11": icon,
            }
          )}
          {...props}
        ></textarea>
        {icon && (
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <Icon name={icon} color="text-black/50 dark:text-white/50" />
          </div>
        )}
      </div>
      {message && <p className="text-red-500 text-xs italic">{message}</p>}
    </div>
  );
};

export const Switch = ({
  className,
  error,
  message,
  id,
  label,
  icon,
  ...props
}: InputProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className="relative w-[3.25rem] h-7 p-px border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary-600 checked:border-primary-600 focus:checked:border-primary-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-primary-500 dark:checked:border-primary-500 dark:focus:ring-offset-gray-600
  before:inline-block before:size-6 before:bg-white checked:before:bg-primary-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-primary-200"
        {...props}
      />
      <label htmlFor="hs-basic-usage" className="sr-only">
        {label}
      </label>
      
      {message && <p className="text-red-500 text-xs italic">{message}</p>}
    </div>
  );
};

export const Select = ({
  inputClassName,
  className,
  message,
  error,
  id,
  icon,
  label,
  children,
  ...props
}: SelectProps) => (
  <div className={cn("mb-2 w-full", className)}>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        className={classNames(
          `${inputClassName} p-3 block w-full bg-black/5 border-zinc-400/20 text-black dark:bg-neutral-900 dark:text-white placeholder:text-base placeholder:text-black/50 dark:placeholder:text-white/50 rounded-full text-sm focus:border-zinc-400/30 focus:ring-zinc-400/30`,
          {
            "border border-red-500": error,
            "sm:p-3 sm:ps-10": icon,
          }
        )}
        {...props}
      >
        {children}
      </select>
      {icon && (
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20">
          <Icon name={icon} size={20} color="text-black/50 dark:text-white/50" />
        </div>
      )}
    </div>
    {message && <p className="text-red-500 text-xs italic">{message}</p>}
  </div>
);
