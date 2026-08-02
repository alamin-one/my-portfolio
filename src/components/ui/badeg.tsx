import { ReactNode } from 'react';
import clsx from 'clsx';

interface VariantClasses {
  success: string;
  warning: string;
  danger: string;
  techStack: string;
}
interface Props {
  children: ReactNode;
  className?: string;
  variant?: keyof VariantClasses;
}

const Badeg = ({
  children,
  className,
  variant = 'success',
  ...props
}: Props) => {
  const variantClasses: VariantClasses = {
    success:
      'bg-transparent border-success px-2 py-0.5 text-[10px] text-success',
    warning:
      'bg-transparent border-warning px-2 py-0.5 text-[10px] text-warning',
    danger: 'bg-transparent border-danger px-2 py-0.5 text-[10px]  text-danger',
    techStack:
      'border border-title/20 bg-card px-3 py-1 text-[13px] text-title transition-colors',
  };

  const selectedVariantClass = variantClasses[variant];
  return (
    <span
      className={clsx(
        'inline-flex items-center tracking-wider font-normal capitalize rounded-[5px] border',
        className,
        selectedVariantClass,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badeg;
