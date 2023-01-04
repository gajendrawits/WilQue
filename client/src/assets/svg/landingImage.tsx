const LandingImage = () => (
  <svg
    width="800"
    height="450"
    viewBox="0 0 800 450"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="browser-a">
        <stop stop-color="#F6F8FA" stop-opacity=".48" offset="0%" />
        <stop stop-color="#F6F8FA" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="browser-b">
        <stop stop-color="#F6F8FA" stop-opacity=".48" offset="0%" />
        <stop stop-color="#F6F8FA" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="100%"
        y1="-12.816%"
        x2="0%"
        y2="-12.816%"
        id="browser-c"
      >
        <stop stop-color="#F6F8FA" stop-opacity="0" offset="0%" />
        <stop stop-color="#E3E7EB" offset="50.045%" />
        <stop stop-color="#F6F8FA" stop-opacity="0" offset="100%" />
      </linearGradient>
      <filter
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
        filterUnits="objectBoundingBox"
        id="dropshadow-1"
      >
        <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
        <feGaussianBlur
          stdDeviation="24"
          in="shadowOffsetOuter"
          result="shadowBlurOuter"
        />
        <feColorMatrix
          values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
          in="shadowBlurOuter"
        />
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <rect width="800" height="450" rx="4" fill="#FFF" />
      <rect width="800" height="450" rx="4" fill="#FFF" />
      <g fill="url(#browser-a)" transform="translate(47 67)">
        <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z" />
      </g>
      <g transform="translate(47 239)" fill="url(#browser-b)">
        <path d="M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z" />
      </g>
      <path
        fill="url(#browser-c)"
        d="M0 146h706v2H0z"
        transform="translate(47 67)"
      />
      <g transform="translate(0 12)">
        <circle fill="#FF6D8B" cx="36" cy="4" r="4" />
        <circle fill="#FFCB4F" cx="52" cy="4" r="4" />
        <circle fill="#7CE8DD" cx="68" cy="4" r="4" />
        <path fill="url(#browser-c)" d="M0 20h800v2H0z" />
        <path fill="#E3E7EB" d="M742 2h24v4h-24z" />
      </g>
      <g>
        <path fill="#F6F8FA" d="M47 385h706v32H47z" />
        <path fill="#E3E7EB" d="M356 399h88v4h-88z" />
      </g>
    </g>
  </svg>
);
export default LandingImage;
