import React from "react"

export default function SearchBox({ value, name, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

