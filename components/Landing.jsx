import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div id="landing">
      <div className="text-wrapper">
        <h1>Fluff Studio</h1>
        <h3>
          &quot;working on it&quot; <span>(legit.)</span>
        </h3>
        <p className="landing-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="cta-wrapper">
          <Link href={"/contact"}>
            <button className="btn-filled work">Work With Us</button>
          </Link>
          <Link href={"/work"}>
            <button className="btn-outline" id="portfolio-btn">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
      <div className="image-wrapper building-img">
        <Image
          src={"/images/fluff-building.png"}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
}
