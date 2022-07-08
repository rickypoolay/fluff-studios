import Head from "next/head";
import Link from "next/link";
import CaseStudyCard from "../../components/CaseStudyCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { sanityClient } from "../../utils/sanity";

export default function Work({ caseStudies }) {
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

      <Navbar />
      <main>
        <section>
          <div className="page-header">
            <h2 className="title">Our Work</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              doloremque maiores, necessitatibus quo voluptatem dolore.
            </p>
          </div>
          <div className="case-studies-container">
            {caseStudies &&
              caseStudies.map((item) => (
                <Link
                  key={item.slug.current}
                  href={`/work/${item.slug.current}`}
                >
                  <a>
                    <CaseStudyCard caseInfo={item} />
                  </a>
                </Link>
              ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const query = "*[_type == 'caseStudies']";
  const caseStudies = await sanityClient.fetch(query);
  return {
    props: {
      caseStudies,
    }, // will be passed to the page component as props
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ... } }
//     ],
//     fallback: true // false or 'blocking'
//   };
// }
