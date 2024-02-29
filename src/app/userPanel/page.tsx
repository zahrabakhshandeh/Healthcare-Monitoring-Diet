import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";
import BadgeLogo from "/public/svg/Vector.svg"

const userPanel = () => {
    return(
        <main>
            <div className = "grid lg:grid-cols-5 md:grid-cols-3 gap-4">
                <div className="col-span-1 bg-[var(--primary-blue)] flex flex-col">
                </div>
                <div className="lg:col-span-4 grid lg:grid-cols-4 grid-cols-2 col-span-2">
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
                </div>
                
            </div>
        </main>
    )
}
export default userPanel;


// <main className="m-5">
//             <div className="grid lg:grid-cols-5 lg:gap-5 md:grid-cols-2">
//                 <div className="bg-[var(--primary-blue)]">
//                     userPanel
//                 </div>
//                 <div className="flex justify-center gap-5 p-11">
//                     <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."  badgeLogo={<BadgeLogo />} badgeColor="orange-color"/>
//                 </div>
//                 <div className="flex justify-center p-11">
//                     <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."/>
//                 </div>
//                 <div className="flex justify-center gap-5 p-11">
//                     <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ." badgeColor="primary-blue"/>
//                 </div>
//                 <div className="flex justify-center p-11">
//                     <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."/>
//                 </div>
//                 <div>
//                     5
//                 </div>

//             </div>
//         </main>