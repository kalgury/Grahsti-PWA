import React from 'react'

const HealthIcon = ({ dimension, color }: any) => {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={dimension} height={dimension} viewBox="0 0 512 512" version="1.1">
      <title>health-filled</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="add" fill={color} transform="translate(64.000000, 64.000000)">
          <path d="M128,154.368 L192,282.36945 L226.517333,213.333333 L356.735892,213.332557 C326.677773,271.159881 271.765809,335.16014 192,405.333333 C112.234191,335.16014 57.3222272,271.159881 27.2641079,213.332557 L98.5180584,213.333333 L128,154.368 Z M268.8,1.42108547e-14 C332.423203,1.42108547e-14 384,51.5767968 384,115.2 C384,132.924092 380.921643,151.412754 374.764929,170.665986 L247.850667,170.666667 L224,122.963883 L192,186.944 L128,58.9638831 L72.128,170.666667 L9.23507092,170.665986 C3.07835697,151.412754 1.42108547e-14,132.924092 1.42108547e-14,115.2 C1.42108547e-14,51.5767968 51.5767968,1.42108547e-14 115.2,1.42108547e-14 C144.712861,1.42108547e-14 171.633638,11.098031 192.016682,29.348444 C212.383272,11.091061 239.296408,1.42108547e-14 268.8,1.42108547e-14 Z" id="Combined-Shape">
          </path>
        </g>
      </g>
    </svg>
  )
}

export default HealthIcon


