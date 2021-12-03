import { useState } from "react";
import { moonEmojis } from "../constants/emojidata";
import "./Emoji.css";

const Emoji = () => {
  const emojiWeKnow = Object.keys(moonEmojis);
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  const displayEmojiMeaning = (emojiValue) => {
    setEmoji(emojiValue);
    let value = ""
    moonEmojis[emojiValue]?value=moonEmojis[emojiValue]:value="This emoji is not known";
    setEmojiMeaning(value);
  };

  const changehandler = (event) => {
      const emojiValue = event.target.value;
      setEmoji(emojiValue);
      displayEmojiMeaning(emojiValue);
  }

  return (
    <div className="container">
      <h2>Learn What these Moon Emojis are called</h2>
      <input value={emoji} type="text" onChange={changehandler} placeholder="type the emoji here" />
      <div className="meaning"><h2>{emojiMeaning}</h2></div>
      <h2>Emojis we currently know 👇🏻</h2>
      <div className="knownEmojis">
        {emojiWeKnow.map((emoji) => {
          return (
            <span key={emoji} onClick={()=>displayEmojiMeaning(emoji)} className="emojiList">{emoji}</span>
          );
        })}
      </div>
    </div>
  );
};

export default Emoji;
