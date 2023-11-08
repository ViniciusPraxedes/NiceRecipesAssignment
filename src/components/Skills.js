import meter1 from "../assets/img/java.svg";
import meter2 from "../assets/img/spring-boot.svg";
import meter3 from "../assets/img/aws.svg";
import meter4 from "../assets/img/mysql.svg";
import meter5 from "../assets/img/react.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a <span id="techWords">Java</span> backend developer, I possess a strong foundation in <span id="techWords">Java</span> along with experience in building <span id="techWords">RESTful APIs</span>, 
                            working with <span id="techWords">databases</span>, and implementing <span id="techWords">security</span> measures. 
                            I am adept at designing and optimizing database schemas, writing clean and <span id="techWords">maintainable code</span>, 
                            and collaborating with cross-functional teams to deliver <span id="techWords">high-quality solutions</span>.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Amazon Web Services</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>React</h5>
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
