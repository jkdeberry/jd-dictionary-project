import React from "react";

export default function Results({ data }) {
  if (!data) return null;

  return (
    <div className="Results">
      <h2>{data.word}</h2>
      {data.phonetic && <p><strong>Phonetic:</strong> {data.phonetic}</p>}

      {data.meanings.map((meaning, index) => (
        <div key={index} className="Meaning">
          <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>


          {meaning.definition && (
            <p><strong>Definition:</strong> {meaning.definition}</p>
          )}
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <p><strong>Synonyms:</strong> {meaning.synonyms.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
}