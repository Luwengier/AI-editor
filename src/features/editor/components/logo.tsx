import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-8 w-[8.75rem] relative shrink-0">
        <Image
          className="shrink-0 hover:opacity-75 transition"
          src="/logo.svg"
          alt="Image AI"
          fill
        />
      </div>
    </Link>
  );
};
