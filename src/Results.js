import React from "react";
import Meaning from "./Meaning";

export default function Results({ data }) {
  if (!data) return null;

  return (
    <div className="Results">
      <h2>{data.word}</h2>
      {data.phonetic && <p><strong>Phonetic:</strong> {data.phonetic}</p>}

      {data.meanings && data.meanings.map((meaning, index) => (
        <Meaning key ={index} meaning={Meaning} />
      ))}
    </div>
  );
}