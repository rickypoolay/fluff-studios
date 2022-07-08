import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <h3 className="footer__header">Keep in touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna ali.
        </p>

        <div className="footer__CTA__buttons">
          <input
            className="btn-outline"
            type="email"
            name="email"
            id="email__input"
            placeholder="Email"
          />
          <button htmlFor="email" className="btn-filled" id="join__button">
            Join
          </button>
        </div>
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

              <p>fluff.studio@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
