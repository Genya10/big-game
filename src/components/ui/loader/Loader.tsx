export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
    >
      <circle cx="32" cy="32" r="28" stroke="#ffd700" strokeWidth="8" />
      <circle cx="32" cy="32" r="20" stroke="#1e90ff" strokeWidth="8" />
      <path
        d="M32 18 L37 27 L47 30 L37 33 L32 42 L27 33 L17 30 L27 27 Z"
        fill="#ffd700"
      />
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 6 6"
        to="360 6 6"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </svg>
  );
}
