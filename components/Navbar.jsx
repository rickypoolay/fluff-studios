import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav id="navbar">
      <div className="content-wrapper">
        <Link href={"/"}>
          <div className="logo image-wrapper">
            <Image
              src={"/images/Logo.svg"}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </Link>
        <div className="hamburger" onClick={() => setMenuToggle(true)}>
          <BiMenuAltRight size={"40px"} />
        </div>

        {/* Desktop Links */}
        <ul className="navlinks">
          <li>
            <Link href="/">
              <a className={`${router.pathname == "/" && "selected-navlink"}`}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                className={`${
                  router.pathname == "/services" && "selected-navlink"
                }`}
              >
                Our Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                className={`${
                  router.pathname == "/work" && "selected-navlink"
                }`}
              >
                Our Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`${
                  router.pathname == "/about" && "selected-navlink"
                }`}
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`${
                  router.pathname == "/contact" && "selected-navlink"
                }`}
              >
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
        {menuToggle && <MobileNavbar setMenuToggle={setMenuToggle} />}
      </div>
    </nav>
  );
}

export default Navbar;
