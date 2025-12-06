import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-slate-500 placeholder:text-sm selection:bg-primary border selection:text-primary-foreground dark:bg-input/30 border-transparent flex h-full w-full min-w-0 bg-transparent px-3 py-2 text-sm  transition-[color] duration-500 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ',
        'focus-visible:border-indigo-500 hover:border-indigo-500/50 ',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
