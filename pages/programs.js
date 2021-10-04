import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GrayBanner from "../components/GrayBanner";
import Program from "../components/Program";
import TextImage from "../components/TextImage";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import programsImage from "../public/assets/images/programs.png";
import coco from "../public/assets/images/Coco.png";
import archie from "../public/assets/images/Archie.png";

export default function Programs() {
  const heroPrograms = {
    title: "A Program Designed To Help You Succeed",
    subtitle: "The dog you have today does not have to be the dog you have tomorrow.",
    button: false,
  };

  const bannerPrograms = {
    title: "Whats in the toolbox",
    items: ["E-Collar", "Treats", "Long Line", "Place Cot", "Prong Collar", "Pet Convincer"],
  };

  const textImage = {
    topHeader: "Succeeding Together",
    header: "Training is not an event. Its a lifestyle.",
    copy: "The most important part of your dog's training begins when he/she returns home. Once your dog has completed training, it will be up to you provide consistency and maintain what he/she has learned.",
    copy2: "I will provide you with information and support to promote lasting results.",
    image: <Image src={programsImage} alt=" BFF K9 company logo" />,
    button: true,
    buttonText: "Start Today",
    href: "/contact",
  };

  const testimonial = {
    image: <Image src={coco} alt="photo of dog"></Image>,
    copy: "After completion of Best Foot Forward K9 Training’s two week board and train program we can say Coco’s behavior has taken a complete 180, and the results are a game changer - especially with our newborn’s stuff all over the house. Working with Amy has been phenomenal - she very patiently worked with Coco, established new behaviors, corrected old habits, and armed us with the tools and knowledge to continue with reinforcing those habits at home. Amy was amazing to work with!",
  };

  const testimonial2 = {
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
      <Hero hero={heroPrograms} />
      <GrayBanner banner={bannerPrograms} />
      <Testimonial content={testimonial} />
      <Program />
      <TextImage content={textImage} />
      <Testimonial content={testimonial2} />
      <FAQ />
    </Layout>
  );
}
