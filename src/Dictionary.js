import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.meaning);
  }

  function search(event) {
    event.preventDefault();


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
          id="site-search"
          name="ds" 
          placeholder="Enter a word..."
        />
        <button>Search</button>
      </form>
    </div>
  );
}