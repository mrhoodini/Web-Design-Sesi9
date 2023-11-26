import React from "react";


import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";


import Hero from "./IndexSections/Hero.js";
import Inputs from "./IndexSections/Inputs.js";
import Carousel from "./IndexSections/Carousel.js";
import Icons from "./IndexSections/Icons.js";


class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Inputs />
          <section className="section">
          </section>
          <Carousel />
          <Icons />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
