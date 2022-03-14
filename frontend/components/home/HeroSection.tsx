import React, { useEffect } from "react";
import tippy from "tippy.js";
import styles from "../../styles/home/hero.module.scss";
import Script from 'next/script'
// components
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  useEffect(() => {
    tippy(".home-image", {
      content: "",
      theme: "light",
    });
  },[]);
  return (
    <React.Fragment>
      <section
        id="hero"
        className={`d-flex align-items-center intro ${styles.hero}`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className={styles.header}>
                Explore <span>about me</span> and My work
              </h1>
              <h2 className={styles.subHeader}>
                Hi, I am Guilherme Abel backend and frontend web developer, this my
                portfolio website. The most of my work in open source projects
                and building webapps
              </h2>
<Script 
id="dt-widget"
 src="https://www3.directtalk.com.br/clientes/custom/HiPlatform/widget/widget.min.js">
   </Script> 

              <div className={`d-flex ${styles.buttons}`}>
                <Link href="#features" scroll={true}>
                  <a
                    href="#features"
                    className={`${styles.getStarted} justify-content-start align-items-center`}
                  >
                    <div>Get Started</div>
                    <i
                      className={`bi bi-arrow-right-short fs-2 ${styles.icon}`}
                    ></i>
                  </a>
                </Link>
                <Link href="#subscribe" scroll={true}>
                  <a href="#subscribe" className={`${styles.subscribe}`}>
                    subscribe
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={`col-lg-6 order-1 order-lg-2 align-item-center justify-content-end d-flex ${styles.heroImg}`}
            >
              <Image
                width="430"
                height="400"
                src="/images/hero.png"
                className="img-fluid home-image"
                alt="guilhermeabel hero section, development vector image"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
