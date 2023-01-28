import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SearchRow from './SearchRow';
import ResultColumn from './ResultColumn';
import './App.css';

const BASE_URL = "https://emoji-api.com/emojis?access_key=59c558826289676888db5ca8e4301bdd7dfa1c10"

function App() {
  const [emoji,setEmoji] = useState([])

  useEffect((emoji) => {
    axios
    .get(BASE_URL)
    .then((res) => setEmoji(res.data))
  
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className='Box'>
      <h1>Emoji Search App</h1>
      <SearchRow />
      <ResultColumn emoji = {emoji}/>
    </div>
  );
}

export default App;
