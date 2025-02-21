import meter1 from "../assets/img/meter1-sho.svg";
import meter2 from "../assets/img/meter2-sho.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp-sho.png"
import clickSound from "../assets/sounds/click.wav";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 onMouseEnter={playClickSound} >Skills</h2>
                        <p onMouseEnter={playClickSound} >Here are the skills that I have mastered as a Frontend Developer and skills outside of that.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div onMouseEnter={playClickSound} className="item">
                                <img className="shoMeter" src={meter1} alt="Image" />
                                <h5 onMouseEnter={playClickSound}>Web Development</h5>
                            </div>
                            <div onMouseEnter={playClickSound} className="item">
                                <img src={meter2} alt="Image" />
                                <h5 onMouseEnter={playClickSound}>Brand Identity</h5>
                            </div>
                            <div onMouseEnter={playClickSound} className="item">
                                <img src={meter1} alt="Image" />
                                <h5 onMouseEnter={playClickSound}>Character Design</h5>
                            </div>
                            <div onMouseEnter={playClickSound} className="item">
                                <img src={meter1} alt="Image" />
                                <h5 onMouseEnter={playClickSound}>Character Rigging</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
