type TCardProps = {
  title?: string;
  content?: React.ReactElement;
  className?: string;
};

export const Card = (props: TCardProps) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      {props.content}
    </div>
  );
};
