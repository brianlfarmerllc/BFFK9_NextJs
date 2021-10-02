import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import GrayBanner from "../components/GrayBanner";
import TextImage from "../components/TextImage";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import homepageImage from "../public/assets/images/homepage.png";
import dottie from "../public/assets/images/Dottie.png";

export default function Home() {
  const heroHome = {
    title: "Welcome to Best Foot Forward K9 Training",
    subtitle: "Helping to create a happy and healthy relationship between you and your dog",
    button: true,
    buttonText: "See How",
    href: "/programs",
  };

  const bannerHome = {
    title: "Located in Wylie Texas servicing the greater Dallas Texas area",
    items: ["Dallas", "Plano", "McKinney", "Murphy", "Allen", "Richardson"],
  };

  const textImage = {
    topHeader: "My Approach",
    header: "Does your dogs behavior have you at your wits end?",
    copy: "Dont worry there is hope. My permission based training techniques bring harmony to my clients who practice them consistently.",
    copy2:
      "My approach to dog training is geared towards addressing your dogs state of mind with a goal of creating a happy and balanced relationship between you and your dog.",
    image: <Image src={homepageImage} alt=" BFF K9 company logo" />,
    button: true,
    buttonText: "Learn More",
    href: "/programs",
  };

  const testimonial = {
    image: <Image src={dottie} alt="photo of dog"></Image>,
    copy: "We absolutely loved our experience with Best Foot Forward K9 Training. Not only does our 6 month old pup have a new set of tools for good behavior, but we also feel like we as owners are better equipped to be good dog pawrents. Can't recommend Best Foot Forward enough!",
  };

  return (
    <Layout>
      <Head>
        <title>Board and Train Dog Traing Program in Wylie Texas</title>
        <meta
          name="description"
          content="Balanced dog training specialist helping owners build better relationships with their dog. Located in Wylie Texas servicing the greater Dallas Tesas area."
        />
      </Head>
      <Hero hero={heroHome} />
      <GrayBanner banner={bannerHome} />
      <TextImage content={textImage} />
      <Testimonial content={testimonial} />
      <FAQ />
    </Layout>
  );
}
