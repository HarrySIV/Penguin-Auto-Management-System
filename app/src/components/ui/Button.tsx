type TButtonProps = {
  text: string;
  className?: string;
  onClick?:
    | (() => void)
    | (() => Promise<void>)
    | ((e: React.SubmitEvent) => Promise<void>);
};

export const Button = (props: TButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={'m-2 p-2 cursor-pointer ' + props.className}
    >
      {props.text}
    </button>
  );
};
