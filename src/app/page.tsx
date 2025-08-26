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
          <div className="flex flex-col gap-4 mt-16 mx-10">


            <div className="border-2 flex justify-between items-center border-red-500 h-[100px]  rounded-lg">
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

            <div className="gradient-border border-b-0.5 border-[#a9dfd891] relative h-[100px] bg-[#21222D] rounded-lg">

            </div>

            <div>

            </div>

            <div>

            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
