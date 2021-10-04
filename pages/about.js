import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GrayBanner from "../components/GrayBanner";
import TextImage from "../components/TextImage";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import aboutImage from "../public/assets/images/about.png";
import archie from "../public/assets/images/Archie.png";

export default function About() {
  const heroAbout = {
    title: "Hi, I'm Amy Farmer! ",
    subtitle:
      "I can't wait to work with you and your dog to give them the specific guidance they need.",
    button: false,
    button: true,
    buttonText: "See How",
    href: "/programs",
  };

  const bannerAbout = {
    title: "Located in Wylie Texas servicing the greater Dallas Texas area",
    items: ["Dallas", "Plano", "McKinney", "Murphy", "Allen", "Richardson"],
  };

  const textImage = {
    topHeader: "Why I do it",
    header: "Working to stop the cycle.",
    copy: "I started volunteering with a local rescue in 2012 and have been serving on the board of directors for the past three years. Rescue is my true passion, but it can also be heartbreaking.",
    copy2:
      "Time and time again, I see great dogs surrendered to shelters because of simple behavioral issues. When I can help a pet owner overcome these issues by introducing them to my balanced training methods before they reach that breaking point, it means the world to me. If you are struggling with behavior issues, don’t worry there is help.",
    image: <Image src={aboutImage} alt=" BFF K9 company logo" />,
    button: true,
    buttonText: "Start Today",
    href: "/contact",
  };

  const testimonial = {
    image: <Image src={archie} alt="photo of dog"></Image>,
    copy: "I am blown away at how much he has learned in the past two weeks. Amy is an excellent trainer, and I would not have wanted to take Archie anywhere else! Not only is your pup being set up for success, so are you. Amy really takes the time after training to follow up and teach you what your pup has been taught throughout their stay with her. I love the experience I had with Amy and so did Archie!",
  };

  return (
    <Layout>
      <Head>
        <title>Board and Train Program | Wylie Texas Dog Training</title>
        <meta
          name="description"
          content="Two week e-collar board and train program designed to address common behavior issues by introducing daily structure, understood rules and boundaries, and socialization skills to improve the relationship between you and your dog. "
        />
      </Head>
      <Hero hero={heroAbout} />
      <GrayBanner banner={bannerAbout} />
      <TextImage content={textImage} />
      <Testimonial content={testimonial} />
      <FAQ />
    </Layout>
  );
}
