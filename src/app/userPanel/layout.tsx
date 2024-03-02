import Sidebar from "@/components/userPanelComponents/Sidebar" 


export default function Layout({ children }:any) {
  return (
        <div className = "grid lg:grid-cols-5 md:grid-cols-4 gap-4 ">

                <div className="lg:col-span-1 flex-col hidden justify-start pe-1 items-start lg:flex bg-[var(--primary-blue)]">
                    <Sidebar />
                </div>

                <div className="lg:col-span-4 grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 md:col-span-4 col-span-2 sm:grid-cols-2 lg:pt-10">
                    {children}
                </div>
                
        </div>
  )
}