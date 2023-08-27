import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

const Header = () => {
  return (
    <header className="container py-8">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <h2 className="font-playfair text-6xl">
            <Link href="/">Ovqatchi.uz</Link>
          </h2>
        </div>
        <ul className="lg:flex items-center text-lg gap-4 md:hidden">
          <li>
            <Link className="hover:text-main-color p-2" href="/bolimlar">
              Bo`limlar
            </Link>
          </li>
          <li>
            <Link className="hover:text-main-color p-2" href="/biz-haqimizda">
             Biz haqimizda
            </Link>
          </li>
          <li>
            <Link className="hover:text-main-color p-2" href="/maqolalar">
             Maqolalar
            </Link>
          </li>
          <li>
            <Link className="hover:text-main-color" href="/qidiruv">
              <BsSearch />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
