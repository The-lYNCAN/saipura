import { Component } from "react";
import styles from './../styles/Home.module.scss'
import ParticlesBackground from "@/components/index/particles-back";
import Hero from "@/components/index/hero";
import Slider from "@/components/index/slider";
import AboutUS from "@/components/index/aboutus";
import WhatWeDo from "@/components/index/whatwedo";
import Insights from "@/components/index/insights";
import Navbar from "@/components/index/navbar";
import Footer from "@/components/index/footer";

class Index extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }

  // particlesInit = () => {
  //   const particlesInit = async (main) => {
  //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     await loadFull(main);
  // }
  
  render(){
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.container}>
          <ParticlesBackground />
          <Hero></Hero>
          <Slider />
        </div>
        <div className={styles.restCon}>
          <h1 id={styles.title}>SAIPUARAM</h1>
          <div className={styles.glassCon}>
            <AboutUS />
            <WhatWeDo />
            <Insights />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Index