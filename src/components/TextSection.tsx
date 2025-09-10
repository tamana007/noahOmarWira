// import React from 'react';

// function TextSection({ section }) {
//   if (!section) return null; // safety check

//   return (
//     <div className="liveContainer">
//       <p className="firstParagraph">{section.first}</p>
//       <p className="subParagraph">{section.sub}</p>
//     </div>
//   );
// }

// src/components/TextSection.js
import React from "react";

function TextSection({ firstParagraph, subParagraph }) {
  if(!{firstParagraph,subParagraph})return null
  return (
    <div className="liveContainer">
      <p className="firstParagraph">{firstParagraph}</p>
      <p className="subParagraph">{subParagraph}</p>
    </div>
  );
}

export default TextSection;

