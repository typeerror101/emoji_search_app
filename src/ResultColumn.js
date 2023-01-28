import React from 'react'

export default function ResultColumn({emoji}) {
  return (
    <div>
      
      {emoji.map((emoji) => (
        <span key={emoji.code}>{emoji.code}</span>
      ))}

      
    </div>
  )
}
