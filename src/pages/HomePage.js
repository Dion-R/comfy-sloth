import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
const HomePage = () => {
  console.log("home page");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
