import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";
import BadgeLogo from "/public/svg/Vector.svg"
import MessageBox from "@/components/userPanelComponents/MessageBox";
import CalenderBox from "@/components/userPanelComponents/CalenderBox";
import Sidebar from "@/components/userPanelComponents/Sidebar";
import NavbarMobile from "@/components/userPanelComponents/Navbar-mobile";

const userPanel = () => {
    return(
        <main>
            <div className = "grid lg:grid-cols-5 md:grid-cols-4 gap-4 ">

                <div className="lg:col-span-1 flex-col hidden justify-start pe-1 items-start lg:flex bg-[var(--primary-blue)]">
                    <Sidebar />
                </div>

                <div className="lg:col-span-4 grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 md:col-span-4 col-span-2 sm:grid-cols-2 lg:pt-10">

                    <div className="lg:hidden sm:col-span-2 col-span-1 flex justify-start px-4 items-center bg-[var(--primary-blue)] py-3 mb-4 shadow-md">
                        <NavbarMobile />
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 sm:p-11 px-5 col-span-2 md:col-span-1 ">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="xl:col-span-3 col-span-2 lg:col-span-2 md:col-span-2 ">
                        <MessageBox />
                    </div>

                    <div className="lg:col-span-2 col-span-2 md:col-span-1 xl:col-span-1">
                        <CalenderBox />
                    </div>

                </div>
                
            </div>
        </main>
    )
}
export default userPanel;