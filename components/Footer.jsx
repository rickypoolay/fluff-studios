import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__left">
          <h3 className="footer__header">Keep in touch</h3>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali.
          </p>

          <div className="footer__CTA__buttons">
            <input
              className="btn-outline"
              type="email"
              name="email"
              id="email__input"
              placeholder="Email Address"
            />
            <button htmlFor="email" className="btn-filled" id="join__button">
              Let me join
            </button>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__links">
            <div className="footer__column">
              <h4>Get Involved</h4>
              <Link href="#">
                <a href="#">Creative Community</a>
              </Link>
              <Link href="#">
                <a href="#">Work With Us </a>
              </Link>
            </div>
            <div className="footer__column">
              <h4>Contact</h4>
              <p>
                Lorem ipsum dolor. Sit amet consectetur adipiscin elit. sed do
                eiusmod.
              </p>
              <div className="footer__email">
                <div className="footer__icon">
                  <AiOutlineMail size={"20px"} />
                </div>

                <a href="mailto:fluff.studio@email.com">
                  fluff.studio@email.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom__right__corner__socials">
          <a href="https://www.Tiktok.com" target="__blank">
            <FaTiktok fill="white" size={"40px"} />
          </a>
          <a href="https://www.Instagram.com" target="__blank">
            <FaInstagram fill="white" size={"40px"} />
          </a>
          <a href="https://www.twitter.com" target="__blank">
            <FaTwitter fill="white" size={"40px"} />
          </a>
        </div>
      </div>
    </footer>
  );
}
