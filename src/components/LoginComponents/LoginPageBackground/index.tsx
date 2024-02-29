import styles from "./styles.module.css";

const BlueBackground = (props: { loginMode: boolean }) => {
  return (
    <div
      className={`${styles.background} ${
        props.loginMode
          ? "lg:flex hidden left-0 rounded-e-none rounded-s-[3.1rem]"
          : "absolute right-0 rounded-e-[3.1rem] rounded-s-none lg:flex hidden"
      } `}
    ></div>
  );
};
export default BlueBackground;
