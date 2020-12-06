import React from 'react'


export default function Buttons({ onHandleClick }) {
  return (
    <div>
      <button type="button" name="good" onClick={onHandleClick}>good</button>
      <button type="button" name="neutral" onClick={onHandleClick}>neutral</button>
      <button type="button" name="bad" onClick={onHandleClick}>bad</button>
    </div>
  )
}
