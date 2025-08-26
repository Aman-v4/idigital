"use client"
import { SidebarProvider, Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { House,AlignEndHorizontal,ShoppingCart,User,ChartSpline,MessageCircle,Settings,Star,Award,BellDot,ChevronDown} from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: <House />, 
    },
    {
      label: "Earnings",
      href: "/", 
      icon: <User />,
    },
    {
      label: "Tiers",
      href: "/", 
      icon: <AlignEndHorizontal />,
    },
    {
      label: "M-Tools",
      href: "/", 
      icon: <ShoppingCart />,
      },
    {
      label: "KYC",
      href: "/", 
      icon: <ChartSpline />,
    },{
      label: "LeadLink",
      href: "/", 
      icon: <MessageCircle />,
    },{
      label: "RefInfo",
      href: "/", 
      icon: <Settings />,
    },{
      label: "Quality",
      href: "/", 
      icon: <Star />,
    },
    {
      label: "Rewards",
      href: "/", 
      icon: <Award />,
    },
  ];

  return (
    <SidebarProvider open={open} setOpen={setOpen}>
      <div className="flex h-screen">
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <div className="flex flex-col gap-5 mt-14 mx-10">


            <div className="flex justify-between items-center h-[60px]  rounded-lg">
                <div>
                  <p className="text-3xl tracking-wide font-medium">Hello, <span className=" text-[#A9DFD8] ">  Aman Verma🤘</span></p>
                </div>

                <div className="flex items-center gap-6">
                  <BellDot />
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#A9DFD8] w-10 h-10">
                    </div>
                    <div>
                      <ChevronDown />
                    </div>

                  </div>
                </div>
            </div>



            <div className="flex gap-5 items-center h-[60px] bg-[#21222D] rounded-lg px-6 shadow-lg  ">
              <div className="border-r-1 pr-5 h-full items-center flex border-gray-600/50 ">
                <p className="text-3xl font-semibold text-gray-300 tracking-wider">
                  6<span className="text-sm text-gray-400/50">Days </span>
                  11<span className="text-sm text-gray-400/50">Hr </span>
                  59<span className="text-sm text-gray-400/50">Min </span>
                  09<span className="text-sm text-gray-400/50">Sec </span>  
                </p>
              </div>
              <div>
                <p className="text-gray-300 tracking-wider text-sm">
                  Your <span className="text-[#A9DFD8]">next</span> level is just <span className="text-[#A9DFD8]">one click away...</span> 
                </p>
              </div>
            </div>



            <div className="flex gap-5 ">
              <div className=" flex-[7] gradient-border border-b-0.5 border-[#a9dfd891] relative h-[300px] rounded-lg bg-[#21222D] shadow-lg py-6 px-4">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-xl font-semibold tracking-wider">Earning Insights</p>
                  <p className="text-gray-400 text-sm  tracking-wider">Performance Summary</p>
                </div>
                
                <div></div>
              </div>

              <div className=" flex-[3] gradient-border border-b-0.5 border-[#a9dfd891] relative h-[300px] rounded-lg bg-[#21222D] shadow-lg py-6 px-4">

              </div>
            </div>



            <div>

            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
