import Link from 'next/link';

const Header = async ({ heading, subheading_1, subheading_2 }) => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <Link href="/">{heading}</Link>
        </div>
        <div className="links">
          <Link href="/about">{subheading_1}</Link>
          <Link href="/usage">{subheading_2}</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
