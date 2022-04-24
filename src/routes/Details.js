import '../Css/Details.css';
import React, { useEffect, useState } from 'react';
import SocialMedia from '../components/SocialMedia';
import DisplayMovie from '../components/DisplayMovie';
import ReactPlayer from 'react-player';
import axios from 'axios';

export default function Details() {
  const [movie, setMovie] = useState('');
  const [trailer, SetTrailer] = useState('');

  useEffect(() => {
    axios
      .get('https://imdb-api.com/en/API/Title/k_ns4o5sjc/tt1375666') // /k_ns4o5sjc/${id} k_46zywf07
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://imdb-api.com/API/YouTube/k_ns4o5sjc/8hP9D6kZseM') // k_ns4o5sjc
      .then((answer) => answer.data.videos)
      .then((movieInfo) => {
        SetTrailer(movieInfo[1]);
      });
  }, []);

  return (
    <div className="main">
      <SocialMedia />
      <DisplayMovie movie={movie} trailer={trailer} />
      <ReactPlayer />
    </div>
  );
}
