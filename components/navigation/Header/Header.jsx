import Logo from './Logo';
import MobileNav from './MobileNav';
import { NavLinks } from './NavLinks';

const Header = () => (
  <header className="bg-white">
    <nav className="max-w-5xl mx-auto border border-top-gray">
      {/*containment div*/}
      <div className="flex justify-between">
        {/*Logo Container*/}
        <div className="cursor-pointer">
          <a href="/">
            <Logo />
          </a>
        </div>

        {/*Link Container*/}

        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/*Mobile Nav*/}
        <MobileNav />
      </div>
    </nav>
  </header>
);

export default Header;
