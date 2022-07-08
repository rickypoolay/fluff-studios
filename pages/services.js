import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StepImgDescription from "../components/StepImgDescription";

export default function Services() {
  return (
    <div id="services">
      <Head>
        <title>Fluff Studios</title>
        <meta
          name="description"
          content="Fluff Studios Digital Marketing Agency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <section id="services-header">
          <div className="image-wrapper">
            <Image
              src={"/images/services-header.png"}
              layout="fill"
              objectFit="cover"
              alt=""
            />
            <h2 className="title">Where ideas go to...</h2>
          </div>
        </section>
        <section className="steps-container">
          <StepImgDescription
            numberSVG={
              <svg
                width="120"
                height="220"
                viewBox="0 0 68 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.59277 42.5039L59.2178 8.75391V211.254"
                  stroke="#F4F9E9"
                  stroke-width="16.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Videography"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!"
            }
          />
          <StepImgDescription
            numberSVG={
              <svg
                width="120"
                height="220"
                viewBox="0 0 120 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3799 39.6472C17.9332 28.8951 26.0633 20.0476 36.3929 14.6033C46.7225 9.15912 58.6165 7.45297 70.0599 9.77394C81.5034 12.0949 91.7928 18.3003 99.185 27.3388C106.577 36.3774 110.618 47.6934 110.622 59.3699C110.654 69.4481 107.64 79.3008 101.974 87.6355V87.6355L9.37207 211.245H110.622"
                  stroke="#37323E"
                  stroke-width="16.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Videography"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!"
            }
          />
          <StepImgDescription
            numberSVG={
              <svg
                width="120"
                height="220"
                viewBox="0 0 120 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.37207 8.75391H110.622L51.5596 93.1289C61.2721 93.1296 70.8347 95.5255 79.4001 100.105C87.9656 104.683 95.2696 111.304 100.665 119.38C106.061 127.456 109.382 136.738 110.334 146.404C111.285 156.07 109.839 165.821 106.122 174.794C102.405 183.767 96.5323 191.685 89.0244 197.847C81.5165 204.009 72.6049 208.224 63.079 210.119C53.5531 212.014 43.7068 211.53 34.4124 208.711C25.1179 205.892 16.6621 200.824 9.79395 193.957"
                  stroke="#F4F9E9"
                  stroke-width="16.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title={"Videography"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab natus praesentium ex doloribus aliquid? Iste quasi ratione deserunt laboriosam!"
            }
          />
        </section>
        <Footer />
      </main>
    </div>
  );
}
