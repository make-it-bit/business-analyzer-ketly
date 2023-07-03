import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <Link href="/">BUSINESS ANALYZER</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/usage">How To Use</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
