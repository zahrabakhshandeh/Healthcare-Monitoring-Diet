import SignUpArt from "/public/signup.svg";
import SignupBox from "@/components/SignupComponents/SignupBox";
const SignUpPage = () => {
  
  return (
    <div className="grid grid-col-2 bg-[var(--hr-gray)]">
            <div className="">
                <SignUpArt />
            </div>
            <div className="">
                <SignupBox/>
            </div>
        </div>
  );
};
export default SignUpPage;