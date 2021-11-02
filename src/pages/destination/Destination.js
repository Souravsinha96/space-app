import React from "react";
import TopMenu from "../../common/topMenu/TopMenu";
import "./Destination.css";
import moon from "../../assets/destination/image-moon.png";
function Destination({ data }) {
  return (
    <div className="bd-wrapper">
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <TopMenu />
      <main id="main" className="grid-container grid-container--destination">
        <h2 className="numbered-title">
          <span aria-hidden="true">03</span> Pick your destination
        </h2>
        <img src={moon} alt="the moon" />

        <div className="tab-list underline-indicators flex">
          <button
            aria-selected="true"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2"
          >
            Titan
          </button>
        </div>
        <article>
          <h2 class="fs-800 uppercase ff-serif">Moon</h2>

          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div class="flex">
            <div>
              <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
              <p class="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
              <p class="fs-500 ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Destination;
