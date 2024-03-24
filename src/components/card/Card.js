import React, { useRef, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import './Card.scss';
import extLinkArrow from '../../images/white-arrow.png';
import Modal from './Modal';
import useModal from './useModal';

/* We use props here to pass in data from useState on Home.js */
const Card = props => {
  //const alternatingColor = ['#fff', '#000'];
  const { isShowing, toggle } = useModal();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const videoRef = useRef(null);

  // const handleMouseOver = () => {
  //   if (videoRef.current) {
  //     videoRef.current.start();
  //   }
  // };

  // const handleMouseOut = () => {
  //   if (videoRef.current) {
  //     videoRef.current.pause();
  //   }
  // };
  return (
    <div className="card-container">
      {/* <p className="card-heading">Projects</p> */}

      {/* <h2>Featured Progressive House</h2> */}
      {props.videoData.map((videodata, index) => {
        return (
          <div
            key={index}
            className="card-wrapper"
            onClick={() => {
              setModalData(videodata);
              setModalIsOpen(true);
              toggle();
            }}
          >
            {/* <img
                    src={videodata.imgUrl}
                    className="thumb-image"
                    alt="thumbnail"
                  /> */}
            <div className="card-details">
              <LiteYouTubeEmbed
                id={videodata.linkID}
                wrapperClass="yt-lite"
                // ref={videoRef}
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
              />
              <div className="card-link-wrapper">
                <h2>{videodata.title}</h2>
                <p>{videodata.artist}</p>
                <p>{videodata.label}</p>
                {/* {videodata.link ? <a className="card-link" rel="noreferrer" href={videodata.link} target="_blank">
                     
                      </a> : null} */}
              </div>
              {/* <p className="card-details-copy">{videodata.details}</p> */}

              {/* <div className="card-language-wrapper">
                    {videodata.language1 ? <p className="card-language">{videodata.language1}</p> : null}
                    {videodata.language2 ? <p className="card-language">{videodata.language2}</p> : null}
                    {videodata.language3 ? <p className="card-language">{videodata.language3}</p> : null}
                    {videodata.language4 ? <p className="card-language">{videodata.language4}</p> : null}
                    {videodata.language5 ? <p className="card-language">{videodata.language5}</p> : null}
                  </div> */}
            </div>
          </div>
        );
      })}

      {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
      <Modal isShowing={isShowing} hide={toggle} modalData={modalData} />
    </div>
  );
};

export default Card;
