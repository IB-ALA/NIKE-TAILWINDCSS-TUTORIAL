import { useEffect, useState } from "react";
import DarkModeToggler from "./components/darkModeToggler";
import Navbar from "./components/navbar";
import {
  Hero,
  PopularProducts,
  CustomerReviews,
  SpecialOffers,
  SuperQuality,
  Services,
  Subscribe,
  Footer,
} from "./pages/home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  return (
    <main className="relative dark:bg-[hsl(0,0%,5%)] text-dark-2">
      <DarkModeToggler setDarkMode={setDarkMode} darkMode={darkMode} />
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue dark:text-black padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-t padding-x pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
}
