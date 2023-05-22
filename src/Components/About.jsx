/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a third-year Computer Engineering student at PVG's COET with a passion for Machine Learning and a flair for writing. As an enthusiast in technology, I have won several Hackathons and currently serve as the Management and Operations Head at Google's Developer Student Club PVG's COET. With technical skills ranging from FullStack Web Development to Data Science, I am always eager to learn and explore new technologies. Apart from my interest in tech, I have also delved into the world of writing. I am a published author with my first book called 'The Anthem of My Heart' being a compilation of cathartic poems. I am a Quora writer with more than 460k views on various topics, and I am currently working on a story called 'Lost in the Memory' on Wattpad. I also enjoy writing short stories and poems on Commaful. I believe that writing is a form of self-expression that complements my technical skills and helps me convey my ideas effectively.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Full Stack Web Development",
  "Published Author",
  "Hackathon Experience",
  "Management and Operations",
  "Creative/Content Writing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "There's always a part of us strong enough to never give up.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
