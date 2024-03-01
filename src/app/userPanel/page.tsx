import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";
import BadgeLogo from "/public/svg/Vector.svg"
import MessageBox from "@/components/userPanelComponents/MessageBox";
import CalenderBox from "@/components/userPanelComponents/CalenderBox";
import Sidebar from "@/components/userPanelComponents/Sidebar";

const userPanel = () => {
    return(
        <main>
            <div className = "grid lg:grid-cols-5 md:grid-cols-4 gap-4 ">

                <div className="col-span-1 bg-[var(--primary-blue)] md:flex flex-col hidden justify-start p-10 items-center">
                    <Sidebar />
                </div>

                <div className="lg:col-span-4 grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 md:col-span-4 col-span-2 sm:grid-cols-2 pt-10">

                    <div className="flex justify-center gap-5 md:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 md:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 md:p-11 px-5 col-span-2 md:col-span-1">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>

                    <div className="flex justify-center gap-5 md:p-11 px-5 col-span-2 md:col-span-1 ">
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