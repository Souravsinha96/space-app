import React from "react";
import TopMenu from "../../common/topMenu/TopMenu";
import "./Crew.css";
import douglas from "../../assets/crew/image-douglas-hurley.png";
function Crew({ data }) {
  console.log(data);
  return (
    <div className="bd-wrapper crew">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <TopMenu />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        <div className="dot-indicators flex">
          <button aria-selected="true">
            <span className="sr-only">The commander</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The mission specialist</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The pilot</span>
          </button>
          <button aria-selected="false">
            <span className="sr-only">The engineer</span>
          </button>
        </div>
        <article className="crew-details">
          <h2 className="fs-600 ff-serif uppercase">Commander</h2>
          <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>

        <img src={douglas} alt="Douglas Hurley" />
      </main>
    </div>
  );
}

export default Crew;
