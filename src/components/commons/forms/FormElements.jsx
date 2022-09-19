import React from "react";

export const TextInput = ({
  label = "",
  id = "",
  type = "text",
  value = "",
  onChange = undefined,
  placeholder = "",
  required = false,
  multiline = 0,
  disabled = false,
  name = "",
  ...otherProps
}) => {
  return (
    <div className="form-group">
      {label !== "" && <label className="form-label">{label}</label>}
      {multiline < 1 ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          name={name}
          {...otherProps}
        />
      ) : (
        <textarea
          rows={multiline}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
          {...otherProps}
        />
      )}
    </div>
  );
};

export const CheckBox = ({
  label = "",
  value = "",
  onChange = undefined,
  disabled = false,
  name = "",
  ...otherProps
}) => {
  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...otherProps}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export const Button = ({
  text,
  type = "button",
  color = "dark",
  fullWidth = false,
  handleClick = undefined,
}) => {
  return handleClick !== undefined ? (
    <button
      onClick={() => handleClick()}
      className={`btn btn-${color} ${fullWidth && "btn-block"}`}
      type={type}
    >
      {text}
    </button>
  ) : (
    <button
      className={`btn btn-${color} ${fullWidth && "btn-block"}`}
      type={type}
    >
      {text}
    </button>
  );
};
