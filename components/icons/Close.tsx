const Close = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M16 8L8 16M16 16L8 8"
        stroke="#7E868C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Close;
