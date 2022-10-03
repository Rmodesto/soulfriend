import ActiveLink from './ActiveLink';

export const NavLinks = () => {
  return (
    <ul className="md:flex md:items-center md:pb-12 pb-12 pt-14 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]">
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/about"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300  block pl-3 pr-4 py-2">
            About
          </a>
        </ActiveLink>
      </li>

      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/MyWork"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300  block pl-3 pr-4 py-2">
            My Work
          </a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300 "
          href="/blog"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300  block pl-3 pr-4 py-2">
            Blog
          </a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/contact"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300 block pl-3 pr-4 py-2">
            Contact
          </a>
        </ActiveLink>
      </li>
    </ul>
  );
};
