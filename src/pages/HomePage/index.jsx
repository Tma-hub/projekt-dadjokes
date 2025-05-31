import './style.css';
import Joke from '../Joke/joke';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const jsonData = await response.json();
      setJokes(jsonData.data);
    };
    getJokes();
  }, []);

  return (
    <div className="joke-list">
      {jokes.map((joke) => (
        <Joke
          key={joke.name}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
export default HomePage;
