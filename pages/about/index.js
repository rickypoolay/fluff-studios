import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import MeetCreatives from "../../components/MeetCreatives";
import MissionStatements from "../../components/MissionStatements";
import Navbar from "../../components/Navbar";
import Values from "../../components/Values";

export default function About() {
  return (
    <div>
      <Head>
        <title>Fluff Studios</title>
        <meta
          name="description"
          content="Fluff Studios Digital Marketing Agency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main>
        <article>
          <section id="about-header-section">
            <div className="left">
              <div className="content-wrapper">
                <p className="side-location">COLUMBUS , OHIO</p>
                <div className="text-wrapper">
                  <h2 className="header">
                    Bridging the gap between dreams and reality
                  </h2>
                  <div className="line-divider" />
                  <h4>Turning dreamer's BS into reality</h4>
                  <p className="paragraph">
                    We are focused on generation-z strategies with influnecer
                    marketing as out forefront.
                    <br />
                    <br />
                    In 2021, we kicked off with Kong Beer Bong as a team of
                    passion-driven brand specialists and creatives that assisted
                    in getting from 3M to 5.5M total revenus with a new brand
                    strategy, 1K ambassadors and a new marketing director in
                    place before ending our term.
                    <br />
                    <br />
                    Our team only focuses on brands we truly believe in and see
                    potential in their growth.
                    <br />
                    <br />
                    We'd love to have a conversation and make something happen.
                  </p>
                </div>
                <div className="image-wrapper">
                  <Image
                    src={"/images/about-sean.png"}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="text-wrapper">
                <h2 className="title">Where creativity goes to take form</h2>
                <button className="btn-filled">Tell your story</button>
              </div>
              <p className="right-vertical">Silver Lining</p>
            </div>
          </section>
          <section id="text-block">
            <p>
              We are focused on generation-z strategies with influnecer
              marketing as out forefront.
              <br />
              <br />
              In 2021, we kicked off with Kong Beer Bong as a team of
              passion-driven brand specialists and creatives that assisted in
              getting from 3M to 5.5M total revenus with a new brand strategy,
              1K ambassadors and a new marketing director in place before ending
              our term.
              <br />
              <br />
              Our team only focuses on brands we truly believe in and see
              potential in their growth.
              <br />
              <br />
              We'd love to have a conversation and make something happen.
            </p>
          </section>
          <section>
            <MissionStatements
              list={[
                "To let dreamers breathe.",
                "To create a platform where creative can build professional experiences.",
                "To let creatives continue dreaming.",
              ]}
            />
          </section>
          <section>
            <Values
              list={[
                "Working with brands we believe in",
                "Continual learning",
                "Creating oppurtunities for underserved creative spaces",
                "For the youth by the youth",
              ]}
            />
          </section>
          <section>
            <MeetCreatives
              creatives={[
                { name: "Sean Dupiano", title: "Creative Director" },
                { name: "Sean Dupiano", title: "Creative Director" },
                { name: "Sean Dupiano", title: "Creative Director" },
                { name: "Sean Dupiano", title: "Creative Director" },
                { name: "Sean Dupiano", title: "Creative Director" },
                { name: "Sean Dupiano", title: "Creative Director" },
              ]}
            />
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}
