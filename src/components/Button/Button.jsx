import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const buttonClass = `btn btn-${variant} ${
    disabled ? "disabled" : ""
  } ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
