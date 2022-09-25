import Link from 'next/link';
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item  ${
          active ? 'active underline underline-offset-8 decoration-black' : ''
        } `}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
