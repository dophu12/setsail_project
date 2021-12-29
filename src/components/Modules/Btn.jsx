import React from 'react'

function Btn({ padding, children, className }) {
  return (
    <button
      className={`btn ${className}`}
      style={{
        padding: padding
      }}
    >
      {children}
    </button>
  )
}

export default Btn
