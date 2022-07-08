import Image from "next/image";

export default function StepImgDescription({ title, desc, numberSVG }) {
  return (
    <div id="step-img-description">
      <div className="image-wrapper step-img">
        <Image
          src="/images/christine-chu.png"
          layout="responsive"
          height={"100px"}
          width={"100%"}
          alt=""
        />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <div className="step-number">{numberSVG}</div>
    </div>
  );
}
