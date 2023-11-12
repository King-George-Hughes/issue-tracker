"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", url: "/" },
    { label: "Issues", url: "/issues" },
  ];

  return (
    <nav className="flex items-center justify-between border-b px-5 h-16 mb-10">
      <Link href={"/"}>
        <AiFillBug size={30} />
      </Link>

      <ul className="inline-flex items-center gap-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.url}
              className={classnames({
                "text-zinc-800": link.url === pathname,
                "text-zinc-500": link.url !== pathname,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
