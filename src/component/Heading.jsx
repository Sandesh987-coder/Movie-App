import React from 'react';

export default function Heading({ heading }) {
  return (
    <div className="heading-container">
      <h1 className="heading">{heading}</h1>
    </div>
  );
}
