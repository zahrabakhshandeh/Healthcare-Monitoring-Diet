import TextBox from "../TextBox";
import HowToHelp_svg1 from "/public/svg/how_we_help1.svg";
import HowToHelp_svg2 from "/public/svg/Online Doctor-pana 1.svg";
import HowToHelp_svg3 from "/public/svg/Forensic medicine.svg";
import HowToHelp_svg4 from "/public/svg/Group 88.svg";
import { TextSectionType } from "@/types";
import { useCallback } from "react";

const TextSection = ({ size }: TextSectionType) => {
  const renderTextSectionBySize = useCallback(() => {
    if (size == "desktop") {
      return (
        <div className="lg:grid space-y-28 items-center gap-y-10 lg:grid-cols-9 grid-cols-2 m-10  hidden">
          <div className="lg:col-span-5 col-span-2 flex justify-center scale-75 md:scale-100">
            <HowToHelp_svg1 />
          </div>
          <div className="lg:col-span-4 col-span-2">
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-4 col-span-2">
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-5  col-span-2 flex justify-center scale-75 md:scale-100">
            <HowToHelp_svg2 />
          </div>
          <div className="lg:col-span-5  col-span-2 flex justify-center scale-75 md:scale-100">
            <HowToHelp_svg3 />
          </div>
          <div className="lg:col-span-4 col-span-2">
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-4 col-span-2">
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>

          <div className="lg:col-span-5 col-span-2 flex justify-center scale-75 md:scale-100">
            <HowToHelp_svg4 />
          </div>
        </div>
      );
    }
    if (size == "mobile") {
      return (
        <div className="flex gap-14 flex-col m-10  lg:hidden">
          <div className="flex justify-center scale-75 md:scale-100 mt-10">
            <HowToHelp_svg1 />
          </div>
          <div >
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-5 col-span-2 flex justify-center scale-75 md:scale-100 mt-10">
            <HowToHelp_svg2 />
          </div>
          <div >
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-5 col-span-2 flex justify-center scale-75 md:scale-100 items-center mt-10">
            <HowToHelp_svg3 />
          </div>
          <div >
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
          <div className="lg:col-span-5 col-span-2 flex justify-center scale-75 md:scale-100 mt-10">
            <HowToHelp_svg4 />
          </div>
          <div className="col-span-2 ">
            <TextBox
              tittle="موضوع"
              body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای"
            />
          </div>
        </div>
      );
    }
  }, []);

  return <>{renderTextSectionBySize()}</>;
};
export default TextSection;
