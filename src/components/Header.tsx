import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Header = ({className}: {className?: string}) => {
  return (
    <header
      className={
        'fixed left-0 top-0 z-50 w-full animate-fade-in border-b backdrop-blur-[12px] [--animation-delay:600ms]'
      }
    >
      <div className={cn('px-6 flex h-[5rem] items-center justify-between', className)}>
        <div className="flex h-full items-center gap-2">
          <a href="/">WASM Cairo</a>
          <Image src="/logo.png" alt="Vercel Logo" className="" width={32} height={32} priority />
        </div>
      </div>
    </header>
  );
};
