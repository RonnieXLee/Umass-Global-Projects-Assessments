import React, { useState } from "react";
import "./Madlibs.css";

const sentences = [
  "The {adjective} {noun} jumped over the {color} {noun2}.",
  "The {color} {noun} ate a {adjective} {noun2}.",
  "I saw a {adjective} {noun} chasing a {color} {noun2}.",
  "The {adjective} {noun} and {noun2} collided with a {color} explosion.",
  "I found a {adjective} {color} {noun} hiding behind the {noun2}.",
  "The {noun} sang a {color} song to the {adjective} {noun2}.",
  "In a {color} world, the {adjective} {noun} and {noun2} live happily ever after.",
  "The {adjective} {noun} flew over the {color} {noun2}.",
  "A {color} {noun} and a {adjective} {noun2} walked into a bar.",
  "Once upon a time, there was a {adjective} {color} {noun} who befriended a {noun2}.",
  // Add more sentences here...
];

const getRandomSentence = () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
};

const Madlibs = () => {
  const [noun, setNoun] = useState("");
  const [noun2, setNoun2] = useState("");
  const [adjective, setAdjective] = useState("");
  const [color, setColor] = useState("");
  const [story, setStory] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "noun") {
      setNoun(value);
    } else if (name === "noun2") {
      setNoun2(value);
    } else if (name === "adjective") {
      setAdjective(value);
    } else if (name === "color") {
      setColor(value);
    }
  };

  const generateStory = () => {
    if (!noun || !noun2 || !adjective || !color) {
      const errorMessages = [];
      if (!noun) errorMessages.push("Noun");
      if (!noun2) errorMessages.push("Noun 2");
      if (!adjective) errorMessages.push("Adjective");
      if (!color) errorMessages.push("Color");
      setError(`${errorMessages.join(", ")} ${errorMessages.length > 1 ? "are" : "is"} blank! Please fill in.`);
    } else {
      const randomSentence = getRandomSentence();
      const formattedSentence = randomSentence
        .replace("{noun}", noun)
        .replace("{noun2}", noun2)
        .replace("{adjective}", adjective)
        .replace("{color}", color);
      setStory(formattedSentence);
      setError("");
    }
  };

  const restartGame = () => {
    setNoun("");
    setNoun2("");
    setAdjective("");
    setColor("");
    setStory("");
    setError("");
  };

  return (
    <div className="madlibs-container">
      <h1 className="madlibs-title">Madlibs!</h1>
      <div className="madlibs-form">
        <input
          type="text"
          name="noun"
          value={noun}
          onChange={handleInputChange}
          placeholder="Noun"
        />
        <br />
        <input
          type="text"
          name="noun2"
          value={noun2}
          onChange={handleInputChange}
          placeholder="Noun 2"
        />
        <br />
        <input
          type="text"
          name="adjective"
          value={adjective}
          onChange={handleInputChange}
          placeholder="Adjective"
        />
        <br />
        <input
          type="text"
          name="color"
          value={color}
          onChange={handleInputChange}
          placeholder="Color"
        />
        <br />
        {error && <p className="madlibs-error">{error}</p>}
        <button className="madlibs-get-story" onClick={generateStory}>
          Get Story
        </button>
      </div>
      {story && (
        <div className="madlibs-story">
          <p>{story}</p>
          <button className="madlibs-restart" onClick={restartGame}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Madlibs;
