import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log("Phonetics:", response.data.phonetics);
    if (typeof response.data === "string") {
      alert("Error from API" + response.data);
      return;
    }
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault()
    let apiKey = "4e2df5aotaa983694533f2b4440ef095";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
}

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input 
          type="search" 
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
          className="site-search"
         /><button className="button">Search</button>
      </form>

      <Results data={results} />
    </div>
  );
}