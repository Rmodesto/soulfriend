import Toggle from '../../ToggleRender';
import Logo from './Logo';
import { NavLinks } from './NavLinks';

const Header = () => (
  <header className="sticky bg-white max-w-2xl mx-auto">
    <nav className="border-gray-200">
      {/*containment div*/}
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/*Logo Container*/}
        <div className="flex cursor-pointer">
          <a href="/">
            <Logo />
          </a>
        </div>

        {/*Mobile Nav Button*/}
        <div>
          <Toggle
            render={({ on, toggle }) => (
              <div className="flex md:hidden">
                {on && <NavLinks />}

                <button
                  onClick={toggle}
                  type="button"
                  className=" md:hidden"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <div className="block fixed">
                    <span className="sr-only">Open main menu</span>
                    <div className="w-24 h-1 bg-black shadow-gray-700 rounded"></div>
                    <div className="w-24 h-1  mt-1 bg-black shadow-gray-700 rounded"></div>
                    <div className="w-24 h-1 mt-1 bg-black shadow-gray-700 rounded"></div>
                  </div>
                </button>
              </div>
            )}
          />
        </div>
        {/*Link Container*/}

        <div className="hidden md:flex">
          <NavLinks />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
