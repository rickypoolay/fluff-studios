import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import StatsPercent from "../../components/StatsPercent";
import SubHeadingDescription from "../../components/SubHeadingDescription";
import ImageCarousel from "../../components/ImageCarousel";
import VideoCarousel from "../../components/VideoCarousel";
import { sanityClient, urlFor } from "../../utils/sanity";
import moment from "moment";

export async function getStaticPaths(context) {
  const query = "*[_type == 'caseStudies']";
  const caseStudies = await sanityClient.fetch(query);

  const paths = caseStudies.map((item) => {
    return {
      params: { id: item.slug.current.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  }; // will be passed to the page component as props
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const query = `*[_type == 'caseStudies' && slug.current == "${id}"]`;
  const info = await sanityClient.fetch(query);

  return {
    props: {
      info: info[0],
    },
  };
}

function CaseStudy({ info }) {
  console.log(info);

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

      <main id="case-study">
        <Navbar />
        <div className="case-header">
          <Image
            src={`${urlFor(info.mainImage).url()}`}
            layout="responsive"
            height={"100px"}
            width={"100%"}
            alt=""
          />
          <section>
            <div>
              <div>
                <p className="case-date">{`${moment(info.startDate).format(
                  "MMM DD, YYYY"
                )} - 
          ${moment(info.endDate).format("MMM DD, YYYY")}`}</p>
                <h3 className="case-title">{info.title}</h3>
              </div>
              <div className="text-wrapper">
                {info.servicesList && (
                  <div className="services">
                    <h4>Services</h4>
                    <ul className="list services-container">
                      {info.servicesList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
          {info.teamList && (
            <section className="teamList">
              <SubHeadingDescription title={"Team"} isList info={[]} />
            </section>
          )}
          {info.statsList && (
            <section id="case-percentages">
              <div className="text-wrapper">
                {info.statsList.map((item, index) => (
                  <StatsPercent
                    key={index}
                    title={`${item.statTitle}`}
                    action={`${item.statAction}`}
                    value={`${item.statValue}`}
                    highlight={item.statHighlighted ? true : false}
                  />
                ))}
              </div>
            </section>
          )}

          {info.takeawayList && (
            <section>
              <div className="text-wrapper">
                <SubHeadingDescription
                  bullet
                  isList
                  info={[...info.takeawayList.map((item) => item)]}
                  title="Key Takeaways"
                  spacing={"20px"}
                />
              </div>
            </section>
          )}

          <section>
            <div className="text-wrapper">
              <SubHeadingDescription
                info={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed non purus, sed dictum bibendum nisl velit praesent. Eu tempor arcu consequat quis risus ",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed non purus, sed dictum bibendum nisl velit praesent. Eu tempor arcu consequat quis risus ",
                ]}
                title="Overview"
              />
            </div>
          </section>
          {info.imagesList && (
            <section>
              <ImageCarousel
                images={[...info.imagesList.map((item) => urlFor(item).url())]}
              />
            </section>
          )}
          {info.videosList && (
            <section>
              <VideoCarousel
                videos={[...info.videosList.map((item) => item)]}
              />
            </section>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default CaseStudy;
