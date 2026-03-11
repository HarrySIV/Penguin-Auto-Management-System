type TCardProps = {
  title?: string;
  content?: React.ReactElement;
};

export const Card = (props: TCardProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.content}
    </div>
  );
};
