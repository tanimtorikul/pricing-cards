import React, { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose></AiOutlineClose> 
        : <AiOutlineMenu></AiOutlineMenu>}
        
      </div>
      <ul className={`md:flex absolute ${open ? 'top-12' : '-top16'} bg-green-200 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
