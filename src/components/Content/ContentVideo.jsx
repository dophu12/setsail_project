import React, { useState, memo } from "react";

function ContentVideo(props) {
  const [modal, setModal] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  return (
    <div onClick={() => setModal(true)} className="content__video">
      <div className="video__highlight-img">
        <img src={props.data?.[0].bg_video_image} alt="" />
      </div>
      <div className="btn-play-video">
        <img src={props.data?.[0].btn_play_img} alt="" />
      </div>
      <div className={`video__modal ${modal ? "active" : ""}`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setModal(false);
            setZoomIn(false);
          }}
          className="overlay"
        />
        <div className="video-inner">
          {/* -- zoom section view by video--zoom-in className -- */}
          {modal && (
            <iframe
              title="video"
              className={`video ${zoomIn ? "zoom-in" : ""}`}
              allow="autoplay"
              allowFullScreen
              src={props.data[0].video_url}
              frameBorder="0"
            />
          )}
          <div
            onClick={() => setZoomIn(!zoomIn)}
            className="zoom-icon"
            data-content={`${zoomIn ? "Zoom out" : "Zoom in"}`}
          >
            <i
              className={`fas fa-search-plus ${zoomIn ? "non-display" : ""}`}
            />
            <i
              className={`fas fa-search-minus ${zoomIn ? "" : "non-display"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ContentVideo);
