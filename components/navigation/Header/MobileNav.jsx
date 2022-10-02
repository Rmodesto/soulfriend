import Toggle from '../../ToggleRender';

import { NavLinks } from './NavLinks';

const MobileNav = () => {
  return (
    <Toggle
      render={({ on, toggle }) => (
        <div className="flex items-center">
          {on && <NavLinks />}

          <button onClick={toggle} className="md:hidden">
            <div className="w-24 h-1  bg-black shadow-gray-700 rounded"></div>
            <div className="w-24 h-1 mt-1 bg-black shadow-gray-700 rounded"></div>
            <div className="w-24 h-1 mt-1 bg-black shadow-gray-700 rounded"></div>
          </button>
        </div>
      )}
    />
  );
};

export default MobileNav;
