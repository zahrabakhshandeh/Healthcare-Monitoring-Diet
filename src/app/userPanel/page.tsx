import QuickLinkBox from "@/components/userPanelComponents/QuickLinkBox";

const userPanel = () => {
    return(
        <main className="m-5">
            <div className="grid grid-cols-5 gap-5">
                <div className="bg-[var(--primary-blue)]">
                    userPanel
                </div>
                <div className="flex justify-center gap-5 p-11">
                    <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ." badgeColor="orange-color"/>
                </div>
                <div className="flex justify-center p-11">
                    <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."/>
                </div>
                <div className="flex justify-center gap-5 p-11">
                    <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ." badgeColor="primary-blue"/>
                </div>
                <div className="flex justify-center p-11">
                    <QuickLinkBox subject="تیتر" bodyText="متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح متن توضیح ."/>
                </div>
                <div>
                    5
                </div>

            </div>
        </main>
    )
}
export default userPanel;