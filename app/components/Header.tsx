import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <h1>News Portal</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
