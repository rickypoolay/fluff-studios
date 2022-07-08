import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
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
      <main className="bg-black">
        <article>
          <section className="contact-section">
            <div className="page-header">
              <h2>Lets work on it together.</h2>
            </div>
            <ContactForm />
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}
