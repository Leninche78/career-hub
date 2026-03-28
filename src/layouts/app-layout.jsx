import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background glowing effects */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[80px]"></div></div>
      <div className="grid-background absolute inset-0 -z-20"></div>
      
      <Header />
      <main className="min-h-[calc(100vh-100px)] container relative z-10">
        <Outlet />
      </main>
      
      <div className="p-8 text-center bg-card mt-10 border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md relative z-10 text-muted-foreground font-medium">
        Made with <span className="text-primary mx-1 drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]">💙</span> by Kutty@Patttii
      </div>
    </div>
  );
};

export default AppLayout;
