type TInputProps = {
  type: 'text' | 'textarea' | 'email';
  value: string;
};

export const Input = (props: TInputProps) => {
  if (
    props.type === 'text' ||
    props.type === 'textarea' ||
    props.type === 'email'
  ) {
    return <input type="text" placeholder={props.value} />;
  } else if (props.type === 'selector') {
    return <input type="selector" />;
  }
};
