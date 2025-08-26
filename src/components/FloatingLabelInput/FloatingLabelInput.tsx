import React, { useState } from 'react';
import { cn } from '@/lib/utils'; //
import { Input } from '@/components/ui/input';

export type FloatingLabelInputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isFloating = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props?.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props?.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    props?.onChange?.(e);
  };

  React.useEffect(() => {
    if (props.value || props.defaultValue) setHasValue(true);
  }, [props.value, props.defaultValue]);

  return (
    <div className='relative'>
      <label
        htmlFor={props.id}
        className={cn(
          'absolute transition-all duration-200 ease-in-out pointer-events-none',
          {
            'top-1.5 -translate-y-2/6 -translate-x-1/11 scale-60 text-muted-foreground':
              isFloating,
            'top-1/2 -translate-y-1/2 scale-80 text-muted-foreground':
              !isFloating,
          }
        )}
      >
        {props.placeholder}
      </label>

      <Input
        {...props}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=' '
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 min-h-10 rounded-md border bg-transparent px-3 py-1 pb-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-[0.8em]',
          'focus-visible:border-ring pt-5',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
      />
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

export default FloatingLabelInput;
