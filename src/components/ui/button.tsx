'use client';

import * as React from 'react';
import { Slot as RadixSlot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-accent-blue to-accent-blue-hover text-white shadow-btn-glow hover:translate-y-[-3px] hover:shadow-btn-hover-glow',
        outline:
          'border-2 border-accent-blue bg-transparent text-accent-blue hover:bg-accent-blue/15 hover:text-white',
        ghost:
          'text-text-dark hover:bg-white/10',
        link:
          'text-accent-blue underline-offset-4 hover:underline',
        gold:
          'bg-gold text-white hover:bg-gold/90 hover:translate-y-[-2px]',
      },
      size: {
        default: 'h-11 px-6 py-2 rounded-sm',
        sm: 'h-9 px-4 text-xs rounded-sm',
        lg: 'h-14 px-8 text-base rounded-sm',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
