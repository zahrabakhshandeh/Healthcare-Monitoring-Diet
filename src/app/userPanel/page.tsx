import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";
import BadgeLogo from "/public/svg/Vector.svg"
import MessageBox from "@/components/userPanelComponents/MessageBox";
import CalenderBox from "@/components/userPanelComponents/CalenderBox";

const userPanel = () => {
    return(
        <main>
            <div className = "grid lg:grid-cols-5 md:grid-cols-3 gap-4">
                <div className="col-span-1 bg-[var(--primary-blue)] flex flex-col">
                </div>
                <div className="lg:col-span-4 grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 md:col-span-2 col-span-1">
                    <div className="flex justify-center gap-5 p-11">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>
                    <div className="flex justify-center gap-5 p-11">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>
                    <div className="flex justify-center gap-5 p-11">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>
                    <div className="flex justify-center gap-5 p-11">
                        <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
                    </div>
                    <div className="lg:col-span-3 col-span-1 md:col-span-2">
                        <MessageBox />
                    </div>
                    <div className="lg:col-span-1 col-span-1 md:col-span-1">
                        <CalenderBox />
                    </div>
                </div>
                
            </div>
        </main>
    )
}
export default userPanel;