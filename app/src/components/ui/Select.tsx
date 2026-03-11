type TSelectProps =
  | {
      type: null;
      options: string[];
    }
  | {
      type: 'year';
      options: number;
    };
export const Select = (props: TSelectProps) => {
  if (props.type) {
    const years = [];
    for (let i = 0; i + props.options <= 2026; i++) {
      years.push(props.options + i);
    }
    return (
      <select>
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
    );
  } else {
    return (
      <select>
        {props.options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    );
  }
};
