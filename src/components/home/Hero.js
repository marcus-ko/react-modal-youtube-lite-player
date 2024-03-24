import './Hero.scss';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="hero-wrapper">
          <div className="hero-content">
            {/* <h2>Hold Me (Original Mix)</h2>
            <p>Lumidelic Feat. Mariami</p>
            <p>Emergent Shores</p> */}
          </div>

          <LiteYouTubeEmbed
            id="vTHsgxYL8Is"
            title="Lumidelic Feat. Mariami - Hold Me (Original Mix)"
            wrapperClass="yt-lite"
          />
        </div>
      </div>
      <div>
        <LiteYouTubeEmbed
          id="1r0eb0vzBMI"
          title="Paul Solari - Violet Meadow"
          wrapperClass="yt-lite"
        />
      </div>
      <div>
        <LiteYouTubeEmbed
          id="o5E1IZXXszE"
          title="Tristan Arms - Pilgrim"
          wrapperClass="yt-lite"
        />
      </div>
    </Slider>
  );
}