import Image from "next/image";
import React from "react";

export default function MeetCreatives({ creatives }) {
  return (
    <div id="meet-creatives">
      <h2 className="title">Meet the Creatives</h2>
      <div className="creatives-container">
        {creatives?.map((creative, index) => (
          <div key={index} className="creative">
            <div className="image-wrapper creative-img">
              <Image
                src={"/images/christine-chu.png"}
                layout={"responsive"}
                objectFit={"cover"}
                width={"100%"}
                height={"100px"}
                alt={""}
              />
            </div>
            <h4 className="creative-name">{creative.name}</h4>
            <h4 className="creative-title">{creative.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
