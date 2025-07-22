import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
console.log("Meaning received:", meaning);

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definitions.map((definition, index) => (
        <div key={index}>
          <p>
            <strong>Definition:</strong> {definition.definition}
          </p>

          {definition.example && (
            <p> 
              <em>Example:</em> "{definition.example}"
            </p>  
          )}

          {definition.synonyms && 
            Array.isArray(definition.synonyms) && 
            definition.synonyms.length > 0 && (
              <Synonyms synonyms={definition.synonyms} />  
          )}
        </div>
      ))}
    </div>
  );
}