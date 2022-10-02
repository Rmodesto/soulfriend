import ActiveLink from './ActiveLink';

export const NavLinks = () => {
  return (
    <ul className="flex-col md:items-center md:flex-row flex md:space-x-8 mt-56 md:mt-0 md:text-sm md:font-medium text-base">
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/about"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300">
            About
          </a>
        </ActiveLink>
      </li>

      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/MyWork"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300">
            My Work
          </a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300 "
          href="/blog"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300">
            Blog
          </a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
          href="/contact"
        >
          <a className="nav-link hover:underline underline-offset-8 hover:text-lg decoration-8 ease-in-out duration-300">
            Contact
          </a>
        </ActiveLink>
      </li>
    </ul>
  );
};
