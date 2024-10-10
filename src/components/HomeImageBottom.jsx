import { gsap } from "gsap";
import image1 from "../assets/1.PNG";
import image2 from "../assets/2.PNG";
import image3 from "../assets/3.PNG";
import image4 from "../assets/4.PNG";
import image5 from "../assets/5.PNG";
import image6 from "../assets/6.PNG";
import image7 from "../assets/7.PNG";
import { useEffect, useRef } from "react";

const HomeImageBottom = () => {
  const imagesRef = useRef([]);
  const groupRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    imagesRef.current.map((item, index) => {
      tl.fromTo(
        item,
        { y: "100%" },
        { y: "0%", duration: 0.6, delay: index === 0 ? 0.5 : 0 }
      );
    });

    tl.to(groupRef.current, {
      y: "20%",
      repeat: -1,
      yoyo: true,
      duration: 0.4,
    });
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden"
      ref={groupRef}
    >
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 w-screen overflow-hidden">
        <img
          src={image6}
          className="home-bottom-image image6"
          alt=""
          ref={(el) => (imagesRef.current[5] = el)}
        />

        <img
          src={image4}
          className="home-bottom-image image4"
          alt=""
          ref={(el) => (imagesRef.current[3] = el)}
        />

        <img
          src={image2}
          className="home-bottom-image image2"
          alt=""
          ref={(el) => (imagesRef.current[1] = el)}
        />

        <img
          src={image1}
          className="home-bottom-image image1"
          alt=""
          ref={(el) => (imagesRef.current[0] = el)}
        />

        <img
          src={image3}
          className="home-bottom-image image2"
          alt=""
          ref={(el) => (imagesRef.current[2] = el)}
        />

        <img
          src={image5}
          className="home-bottom-image image5"
          alt=""
          ref={(el) => (imagesRef.current[4] = el)}
        />

        <img
          src={image7}
          className="home-bottom-image image6"
          alt=""
          ref={(el) => (imagesRef.current[6] = el)}
        />
      </div>
    </div>
  );
};

export default HomeImageBottom;
