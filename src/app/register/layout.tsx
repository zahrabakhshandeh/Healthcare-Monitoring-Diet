import { ReactNode } from "react";

const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-slate-50 flex px-5  justify-around items-center h-screen">
      {children}
    </main>
  );
};

export default LayoutRegister;
