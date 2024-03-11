import { TextBoxType } from "@/types";

const TextBox = ({ tittle, body }: TextBoxType) => {
  return (
    <div className="flex gap-12 items-center md:px-36 px-14 flex-col min-w-6">
      <h2 className="text-7xl lg:text-6xl">{tittle}</h2>
      <p className="xl:text-2xl lg:text-lg text-center text-2xl align-middle">
        {body}
      </p>
    </div>
  );
};
export default TextBox;
