import React, { useEffect } from "react";
import tippy from "tippy.js";
import styles from "../../styles/home/about.module.scss";

// components
import Image from "next/image";
import Link from "next/link";
import CountsSection from "./CountsSection";

const FeatureSection: React.FC = () => {
  useEffect(() => {
    // tooltip shows when hover the card;
    tippy(`.${styles.card}`, {
      content:
        "<h6 class='text-muted'> Click here to see more about this</h6>",
      animation: "perspective-subtle",
      placement: "top",
      theme: "light",
      maxWidth: 200,
      allowHTML: true,
      delay: [400, 0],
      hideOnClick: true,
    });
  }, []);

  return (
    <React.Fragment>
      <section
        id="about"
        className={`${styles.about} container-lx d-flex justify-content-center row align-items-center`}
      >
        {/* digital service card */}

        <Link href="https://github.com/guilhermeabel99?tab=repositories">

          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">API</h6>
            <h4>explore my github</h4>
            <Image
              src="/images/api.png"
              width="200"
              height="200"
              alt="guilhermeabel backend api image "
            />
            <p className="align-self-end mt-3">backend</p>
          </a>
        </Link>
        {/* projects card */}

        <Link href="https://github.com/guilhermeabel99?tab=repositories">
          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">DEV</h6>
            <h4>explore my github</h4>
            <Image
              src="/images/web.png"
              width="200"
              height="200"
              alt="guilhermeabel website tools image"
            />
            <p className="align-self-end mt-3">frontend</p>
          </a>
        </Link>
        {/* blogs card */}
        
        <Link href="https://github.com/guilhermeabel99?tab=repositories">

          <a
            className={`${styles.card} card m-3 d-flex flex-column justify-content-between align-items-center`}
          >
            <h6 className="align-self-start">NPM</h6>
            <h4 className="">explore my github</h4>
            <Image
              src="/images/npm.png"
              width="200"
              height="200"
              alt="guilhermeabel volder npm package image"
            />
            <p className="align-self-end mt-3">package</p>
          </a>
        </Link>
        {/*Count Component Section */}
        <CountsSection />
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;