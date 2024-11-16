import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./Aboutus";
import Events from "./Event";
import Team from "./Team";
import JoinUs from "./JoinUs";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <AboutUs/>
        <Events/>
        <Team/>
        <JoinUs/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
