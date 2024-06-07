import classes from "./Button.module.css";
export default function Button({ children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={
        isActive ? `${classes.button} ${classes.active}` : `${classes.button}`
      }
    >
      {children}
    </button>
  );
}
