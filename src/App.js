import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/img";
import Youtube from "./components/youtube";
import axios from 'axios';

const dummyData = {
  date: "2023-06-03",
  explanation: "A darkened and mysterious north polar region known to some as Mordor Macula caps this premier high-resolution view. The portrait of Charon, Pluto's largest moon, was captured by New Horizons near the spacecraft's closest approach on July 14, 2015. The combined blue, red, and infrared data was processed to enhance colors and follow variations in Charon's surface properties with a resolution of about 2.9 kilometers (1.8 miles). A stunning image of Charon's Pluto-facing hemisphere, it also features a clear view of an apparently moon-girdling belt of fractures and canyons that seems to separate smooth southern plains from varied northern terrain. Charon is 1,214 kilometers (754 miles) across. That's about 1/10th the size of planet Earth but a whopping 1/2 the diameter of Pluto itself, and makes it the largest satellite relative to its parent body in the Solar System. Still, the moon appears as a small bump at about the 1 o'clock position on Pluto's disk in the grainy, negative,telescopic picture inset at upper left. That view was used by James Christy and Robert Harrington at the U.S. Naval Observatory in Flagstaff to discover Charon in June of 1978.",
  hdurl: "https://apod.nasa.gov/apod/image/2306/Charon-Neutral-Bright-Release.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Charon: Moon of Pluto",
  url: "https://apod.nasa.gov/apod/image/2306/charon_then_now_1024.jpg"
  }


 

function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("2023-31-05");
  const changeHandler = (event) => {
   console.log(event.target.value);
    setData(event.target.value);
  }
  useEffect(()=>{
     axios.get("https://api.nasa.gov/planetary/apod?api_key=MvcHkrEMHLaYDT7X9TAkT9cOza0UPB2CpNxpP00J&date="+date)
    .then(res => {
      setData(res.data);
    })
    
   //setData(dummyData)
  }, [date])


  return (
    <div className="App">
      <input type="date" value= {date} onChange={changeHandler} />
      <h1> {data.title} </h1>
      {data.media_type == "image"
      ? <Image dataurl = {data.url}/> 
    :<Youtube dataurl = {data.url}/> }
      <p className="explanation">
     {data.explanation}
      </p>
      <p className="date">
     {data.explanation}
      </p>
    </div>
  );
}

export default App;
