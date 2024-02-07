import { InputHTMLAttributes, useCallback, useMemo } from "react";

type TInput = InputHTMLAttributes<HTMLDivElement> & {
  className?: string;
  firstIconSrc?: string;
};
const MainInput = (props: TInput) => {
  const checkFirstIcon = useCallback(() => {
    if (props.firstIconSrc) {
      return (
        <picture>
          <img src={props.firstIconSrc} alt="" />
        </picture>
      );
    }
  }, []);
  return (
    <div className={`flex rounded-2xl items-center shadow-sm drop-shadow bg-[var(--second-white-color)] gap-2 p-2`}>
      {checkFirstIcon()}
      <input
        {...props}
        className=" outline-none placeholder:text-sm bg-transparent border-none"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};
export default MainInput;
