interface Props {
  value: string;
  onClick: () => void;
}

const BtnRole = ({ value, onClick }: Props) => {
  return (
    <>
      <button
        className="py-3 w-full border-t-2 border-b-2 rounded-md hover:bg-red-800 hover:opacity-70"
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

export default BtnRole;
