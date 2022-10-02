import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/../public/images/soulLogo.webp"
      alt="site-logo"
      width={233}
      height={144}
    />
  );
};

export default Logo;
