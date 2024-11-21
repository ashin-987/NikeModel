const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth,
  type = "button",
}) => {
  const buttonClasses = `
    flex justify-center items-center gap-2 px-4 py-3 sm:px-7 sm:py-4 
    font-montserrat text-base sm:text-lg leading-none 
    rounded-full transition-all duration-300 ease-in-out 
    hover:bg-opacity-90 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-coral-red
    ${fullWidth ? "w-full" : ""} ${backgroundColor} ${textColor} ${borderColor}`;

  return (
    <button type={type} className={buttonClasses}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={`${label} icon`}
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
