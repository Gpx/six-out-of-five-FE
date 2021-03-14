import cx from "classnames";
import styles from "./TagSelector.module.scss";

export default function TagSelector(props) {
  return (
    <div className={cx(styles.main, { [styles.open]: props.open })}>
      <div>Food</div>
      <div>Gadgets</div>
      <div>Websites</div>
      <div>Clothing</div>
    </div>
  );
}
