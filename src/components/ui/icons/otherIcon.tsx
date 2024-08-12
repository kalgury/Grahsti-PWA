import React from 'react'

const OtherIcon = ({ dimension, color }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={dimension} height={dimension} viewBox="0 0 24 24" fill="none">
      <path d="M12 12H12.01M16 12H16.01M8 12H8.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default OtherIcon


