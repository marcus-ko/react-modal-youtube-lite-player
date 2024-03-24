import React, { useRef, useState } from 'react';
import './TopTenList.scss';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Modal from '../card/Modal';
import useModal from '../card/useModal';

const TopTenList = ({ filteredVideoData }) => {
  const topTenItems = filteredVideoData.slice(0, 10);
  const { isShowing, toggle } = useModal();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const videoRef = useRef(null);
  return (
    <div className="list-wrapper">
      <h2>Top Ten Tracks</h2>
      <ul>
        {topTenItems.map(video => (
          <li
            key={video.linkID}
            onClick={() => {
              setModalData(video);
              setModalIsOpen(true);
              toggle();
            }}
          >
            <span className="media-play-btn"></span>
            <h3>{video.title}</h3>
            <p>{video.artist}</p>
            {/* <p>{video.label}</p> */}
          </li>
        ))}
      </ul>
      <Modal isShowing={isShowing} hide={toggle} modalData={modalData} />
    </div>
  );
};

export default TopTenList;
