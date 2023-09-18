import classes from './Modal.module.css';

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
};

function Modal({ children, onClick }: Props) {
  return (
    <div className={classes.modal}>
      <button className={classes['btn-dismiss']} type='button' onClick={onClick}>
        X
      </button>
      {children}
    </div>
  );
}

export default Modal;
