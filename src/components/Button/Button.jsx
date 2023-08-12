const Button = ({ label, colorRevert, disabled, onClickHandler, payload }) => {
  const handleClick = () => {
    if (typeof onClickHandler === "function") {
      onClickHandler(payload);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
      disabled:opacity-40
        disabled:cursor-not-allowed
        px-4 py-2 rounded-lg font-semibold text-lg
        ${colorRevert ? "bg-white text-pink" : "bg-pink hover:bg-darkpink duration-300 text-white"}
      `}
    >
      {label}
    </button>
  );
};
export default Button;
