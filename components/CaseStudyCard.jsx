import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";
import { urlFor } from "../utils/sanity";
import { useEffect } from "react";

export default function CaseStudyCard({ caseInfo }) {
  const imageLink = urlFor(caseInfo.mainImage).url();

  // urlFor(caseInfo.)

  return (
    <div id="case-study-card">
      <div className="image-wrapper case-study-thumbnail">
        <Image src={`${imageLink}`} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="text-wrapper">
        <p className="date">
          {`${moment(caseInfo.startDate).format("MMM DD, YYYY")} - 
          ${moment(caseInfo.endDate).format("MMM DD, YYYY")}`}
        </p>
        <h3>{caseInfo.title}</h3>
        <h4>
          {caseInfo.servicesList[0]} + {caseInfo.servicesList[1]}...
        </h4>
        <div className="view-more">
          <p>View More</p>
          <IoIosArrowForward size={"20px"} />
        </div>
      </div>
    </div>
  );
}
