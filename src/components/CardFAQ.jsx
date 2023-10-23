import "./card-faq.css";
import Accordion from "./Accordion";
import illustrationMobile from "../assets/illustration-woman-online-mobile.svg";
import illustrationDesktop from "../assets/illustration-woman-online-desktop.svg";
import illustrationBox from "../assets/illustration-box-desktop.svg";
import { accordionsData } from "../data";

const CardFAQ = () => {
  return (
    <article className="card-faq">
      <div className="card-faq__illustration">
        <img
          className="card-faq__illustration-box"
          src={illustrationBox}
          alt="Illustration Box"
        />
        <picture>
          <source media="(min-width: 1024px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="Illustration Woman" />
        </picture>
      </div>
      <div className="card-faq__details">
        <h1 className="card-faq__title">FAQ</h1>

        <div className="card-faq__accordions">
          {accordionsData.map((accordion, idx) => (
            <Accordion
              key={idx}
              title={accordion.title}
              description={accordion.description}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default CardFAQ;
