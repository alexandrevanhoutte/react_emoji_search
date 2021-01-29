import React, {useState, useEffect} from "react";

import SearchInput from './components/SearchInput';
import ResultPanel from './components/ResultPanel';
import FilterEmoji from './logic/FilterEmoji';

import './App.css';

function App() {

  const [emojiList, setEmojiList] = useState(null)

  useEffect(() => {
    setEmojiList(FilterEmoji(null))
  }, [])

  function handleInputCallback(input) {
    console.log("test")
    setEmojiList(FilterEmoji(input))
  }

  return (
    <div className="App">
      <SearchInput callback={handleInputCallback} />
      <ResultPanel emojiListProps={emojiList} />
    </div>
  );
}

export default App;
