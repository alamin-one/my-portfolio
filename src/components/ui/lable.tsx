import { ReactNode } from 'react';

const Lable = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <label
      htmlFor=" "
      className={`text-sm  text-title-secondary uppercase ${className}`}
    >
      {children}
    </label>
  );
};

export default Lable;
