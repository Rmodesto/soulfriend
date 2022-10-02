import ActiveLink from './ActiveLink';

export const NavLinks = () => {
  return (
    <ul className="nav flex gap-y-6 gap-8 pt-14 tracking-wider text-base">
      <li className="justify-between">
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
          activeClassName="active underline underline-offset-8 decoration-8 ease-in-out duration-300"
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
