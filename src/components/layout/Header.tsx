import Link from 'next/link';
import HeaderActions from './HeaderActions';
import Image from 'next/image';

const Header = async () => {
  return (
    <header className="border-b border-b-border bg-background   fixed top-0 left-0 right-0 z-100 ">
      <nav className="app-container  px-5 py-3 flex justify-between items-center gap-5">
        {/* logo */}
        <div className="">
          <Link href={'/'}>
            <Image src={'/logo.webp'} alt="Logo" width={120} height={100} />
          </Link>
        </div>
        <HeaderActions />
      </nav>
    </header>
  );
};

export default Header;
