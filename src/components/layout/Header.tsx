import Link from 'next/link';
import HeaderActions from './HeaderActions';

const Header = async () => {
  return (
    <header className="border-b border-b-border bg-background   fixed top-0 left-0 right-0 z-100 ">
      <nav className="app-container  px-5 py-3 flex justify-between items-center gap-5">
        {/* logo */}
        <div className="">
          <Link
            href={'/'}
            className="text-3xl text-text  inline font-bold font-primary leading-0 tracking-normal lowercase"
          >
            <span className="bg-linear-to-r from-title-secondary via-text to-text bg-clip-text text-transparent">
              AlAmin
            </span>
            <span className="text-title-secondary">.</span>
          </Link>
        </div>
        <HeaderActions />
      </nav>
    </header>
  );
};

export default Header;
