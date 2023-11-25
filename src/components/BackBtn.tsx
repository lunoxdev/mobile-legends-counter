interface Types {
  onClick: () => void;
}

const BackBtn = ({ onClick }: Types) => {
  return (
    <>
      <button
        className="flex flex-col justify-start items-start"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ffffff"
            d="M0 7.9L6 3v3h2c8 0 8 8 8 8s-1-4-7.8-4H6v2.9l-6-5z"
          />
        </svg>
      </button>
    </>
  );
};

export default BackBtn;
