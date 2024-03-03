import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";
import BadgeLogo from "/public/svg/Vector.svg"
import MessageBox from "@/components/userPanelComponents/MessageBox";
import CalenderBox from "@/components/userPanelComponents/CalenderBox";
import NavbarMobile from "@/components/userPanelComponents/Navbar-mobile";
import HamburgerMenu from "@/components/userPanelComponents/HamburgerMenu";

const userPanel = () => {
    return(
            <>
                
                

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح"  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح"  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح"  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1 ">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح"  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="xl:col-span-3 col-span-2 lg:col-span-2 md:col-span-2 ">
                        <MessageBox />
                    </div>

                    <div className="lg:col-span-2 col-span-2 md:col-span-1 xl:col-span-1">
                        <CalenderBox />
                    </div>
            </>
    )
}
export default userPanel;