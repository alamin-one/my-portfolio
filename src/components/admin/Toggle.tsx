'use client';

import clsx from 'clsx';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={clsx(
        'w-10 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 shrink-0',
        checked ? 'bg-primary justify-end' : 'bg-border justify-start',
      )}
    >
      <span className="w-5 h-5 rounded-full bg-white block" />
    </button>
  );
}
