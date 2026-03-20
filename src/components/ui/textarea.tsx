'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-sm border-2 border-text-muted bg-white px-4 py-3 text-base text-text-light transition-all duration-200',
          'placeholder:text-text-muted',
          'focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/15 focus:-translate-y-0.5',
          'disabled:cursor-not-allowed disabled:opacity-60',
          'resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
