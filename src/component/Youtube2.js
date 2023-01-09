import React, { useEffect, useState } from "react";
import axios from "axios";
function Youtube2() {
  const { video, setVideo } = useState([]);
  const key = "AIzaSyDJHcqJgIk95lX-tGWkRNiCgCjpBB3UaS8";
  const playList = "PLnvQj3jMoenT8AcsYX6OJFPVdHIIR7YGs";
  const num = 2;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  useEffect(() => {
    axios.get(URL).then((json) => setVideo(json.data.items));
  }, []);

  return (
    <>
      {video.map((vid, idx) => {
        return (
          <figure
            key={vid.snippet.position}
            style={{ borderBottom: "1px solid #000" }}
          >
            <strong style={{ display: "block" }}>{vid.snippet.title}</strong>
            <img
              src={vid.snippet.thumnails.medium.url}
              alt={vid.snippet.title}
            />
            <iframe
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}8zCbmhl1Xns`}
              frameborder="0"
              title={vid.snippet.title}
            ></iframe>
            <figcaption>
              {vid.snippet.description.substr(0, 100) + "..."}
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}

export default Youtube2;
