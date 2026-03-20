'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-sm border-2 border-text-muted bg-white px-4 py-2 text-base text-text-light transition-all duration-200',
          'placeholder:text-text-muted',
          'focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/15 focus:-translate-y-0.5',
          'disabled:cursor-not-allowed disabled:opacity-60',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
