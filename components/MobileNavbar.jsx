import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";

export default function MobileNavbar({ setMenuToggle }) {
  const router = useRouter();

  return (
    <div id="mobile-navbar">
      <div className="navbar">
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
        <div
          className="hamburger"
          onClick={() => {
            setMenuToggle(false);
          }}
        >
          <IoMdClose size={"40px"} />
        </div>
      </div>
      <ul className="mobile-navlinks">
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
              className={`${router.pathname == "/work" && "selected-navlink"}`}
            >
              Our Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={`${router.pathname == "/about" && "selected-navlink"}`}
            >
              About Us
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={`${router.pathname == "/contact" && "selected"}`}>
              Contact Us
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
