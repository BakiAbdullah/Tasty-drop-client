const Button = ({ label, colorRevert, disabled, buttonBlock, onClickHandler, payload }) => {
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
        px-4 py-2 rounded-lg font-medium text-xs  xl:text-lg
        ${buttonBlock && 'block w-full'}
        ${
          colorRevert
            ? "bg-white text-pink"
            : "bg-pink hover:bg-darkpink duration-300 text-white"
        }
      `}
    >
      {label}
    </button>
  );
};
export default Button;
