import ReactDOM from 'react-dom';

interface IModalProps {
  children?: React.ReactNode;
  className?: string;
}

export const Modal = (props: IModalProps) => {
  const content = (
    <div
      className={
        'fixed top-0 left-0 w-screen h-screen bg-black/90 z-10' +
        props.className
      }
    >
      <div className="absolute top-[10vh] left-[10%] w-[80%] bg-slate-400 shadow-black rounded2xl h-max-[89vh] overflow-y-auto z-20">
        <main>{props.children}</main>
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement,
  );
};
