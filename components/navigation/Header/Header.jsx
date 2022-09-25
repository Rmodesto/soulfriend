import Image from 'next/image';
import React, { useState } from 'react';
import NavItem from './NavItem';
const MENU_LIST = [
  { text: 'About', href: '/about' },
  { text: 'My Work', href: '/MyWork' },
  { text: 'Blog', href: '/blog' },
  { text: 'Contact', href: '/contact' },
];
const Header = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="bg-white">
      <nav className="max-w-5xl mx-auto border border-top-gray">
        {/*containment div*/}
        <div className="flex justify-between">
          {/*Logo Container*/}
          <div className="cursor-pointer">
            <a href="/">
              <Image
                src="/../public/images/soulLogo.webp"
                alt="site logo"
                width={233}
                height={144}
              />
            </a>
          </div>

          {/*Link Container*/}

          <div className="hidden md:flex">
            <div
              onClick={() => setNavActive(!navActive)}
              className={`nav__menu-bar `}
            ></div>
            <div
              className={`${
                navActive ? 'active' : ''
              } nav__menu-list flex items-center space-x-8 text-gray-700 tracking-wider `}
            >
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </div>
          {/*Mobile Menu  button*/}
          <div className="flex relative flex-col gap-y-2 cursor-pointer pt-14 pr-3 md:hidden">
            <div className="w-24 h-1 bg-black shadow-gray-700 rounded"></div>
            <div className="w-24 h-1 bg-black shadow-gray-700 rounded"></div>
            <div className="w-24 h-1 bg-black shadow-gray-700 rounded"></div>
          </div>

          {/*Mobile Menu*/}
        </div>
      </nav>
    </header>
  );
};

export default Header;
