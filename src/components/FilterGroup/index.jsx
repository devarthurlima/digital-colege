import "./FilterGroup.css";

export default function FilterGroup({
  title,
  inputType = "checkbox",
  options = [],
  name,
  selectedValues = [],
  onChange,
}) {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-options">
        {options.map((option, index) => {
          const optionValue =
            typeof option === "string" ? option : option.value;
          const optionLabel = typeof option === "string" ? option : option.text;
          const isChecked = selectedValues.includes(optionValue);

          return (
            <label key={index} className="filter-option-label">
              <input
                type={inputType}
                name={name || title}
                value={optionValue}
                checked={isChecked}
                onChange={() => onChange && onChange(optionValue)}
                className="filter-checkbox"
              />
              <span className="filter-option-text">{optionLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
