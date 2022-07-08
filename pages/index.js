import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import ShowcaseSlider from "../components/ShowcaseSlider";
import PersonalTestimonial from "../components/PersonalTestimonial";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
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
          <section>
            <Landing />
          </section>
          <section>
            <ShowcaseSlider />
          </section>
          <section id="personal-testimonial-section">
            <PersonalTestimonial />
          </section>
          <section>
            <HowItWorks />
          </section>
          <Footer />
        </article>
      </main>
    </div>
  );
}
