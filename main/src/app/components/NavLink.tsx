import React from "react";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a href={href} className="">
      {label}
    </a>
  </li>
);
export default NavLink;
