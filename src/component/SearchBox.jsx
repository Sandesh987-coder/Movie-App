import React from 'react'

export default function SearchBox(props) {
  return (
    <div >
        <input type="text" placeholder='Search the movie' className='search' value={props.value} name={props.name} onChange={props.onChange}></input>
    </div>
  )
}
