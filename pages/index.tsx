import Head from "next/head";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell - Sell Unused Software Licenses</title>
        <meta name="description" content="Sell your unused software licenses fast and legally with SoftSell." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </main>
    </>
  );
}

