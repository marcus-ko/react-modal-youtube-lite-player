import React from 'react';
import ReactDOM from 'react-dom';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import './Modal.scss';

const Modal = ({ isShowing, hide, modalData }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={hide}
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="card-wrapper">
                <div
                  className="card-details"
                  onClick={e => e.stopPropagation()}
                >
                  <LiteYouTubeEmbed
                    id={modalData.linkID}
                    wrapperClass="yt-lite"
                    // ref={videoRef}
                    // onMouseOver={handleMouseOver}
                    // onMouseOut={handleMouseOut}
                  />
                  <div className="card-link-wrapper">
                    <h1>{modalData.title}</h1>
                    <p>{modalData.artist}</p>
                    <p>{modalData.label}</p>
                    {modalData.linkID ? (
                      <a
                        className="card-link"
                        rel="noreferrer"
                        href={modalData.linkID}
                        target="_blank"
                      ></a>
                    ) : null}
                  </div>
                  {/* <p className="card-details-copy">{videodata.details}</p> */}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
