"use client"
import { SidebarProvider, Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { House,AlignEndHorizontal,ShoppingCart,User,ChartSpline,MessageCircle,Settings,Star,Award} from "lucide-react";
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
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
