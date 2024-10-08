"use client";

import DashboardHeader from "@/components/headers/DashboardHeader";
import MobileSideBar from "@/components/sidebar-links/MobileSideBar";
import SideBarLinks from "@/components/sidebar-links/SideBarLinks";
import ChartProvider from "@/context/ChartContext";
import UserProvider from "@/context/UserAuthContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // state to toggle the side bar
  const [active, setActive] = useState(false);

  return (
    <html lang="en">
      <ChartProvider>
        <body className="bg-stone-950 font-main h-screen">
          {/* parent div container */}
          <section className="flex bg-stone-950">
            {/* sidebar */}
            <MobileSideBar isOpen={active} toggle={setActive} />
            {/* end of sidebar */}
            <aside className="w-[300px] hidden md:block  ">
              <SideBarLinks />
            </aside>
            <UserProvider>
              <main className="w-full overflow-auto min-h-0 bg-stone-950">
                {/* the header for the pages */}
                <DashboardHeader toggle={setActive} />
                {children}
              </main>
            </UserProvider>
          </section>
          {/* end of parent div container */}
          <ToastContainer />
        </body>
      </ChartProvider>
    </html>
  );
}
