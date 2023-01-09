import React, { useEffect } from "react";
import axios from "axios";
function Youtube(props) {
  const key = "AIzaSyDJHcqJgIk95lX-tGWkRNiCgCjpBB3UaS8";
  const playList = "PLnvQj3jMoenT8AcsYX6OJFPVdHIIR7YGs";
  const num = 2;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  useEffect(() => {
    axios.get(URL).then((json) => console.log(json.data.items));
  }, []);
  return (
    <div>
      <h1>Youtube1</h1>
    </div>
  );
}

export default Youtube;
