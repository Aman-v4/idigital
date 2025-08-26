"use client"
import { SidebarProvider, Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { House,AlignEndHorizontal,ShoppingCart,User,ChartSpline,MessageCircle,Settings,Star,Award,BellDot,ChevronDown, Wallet, IndianRupee} from "lucide-react";
import { useState } from "react";
import Image from 'next/image'

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
              <div className=" flex-[7] flex flex-col gap-4 gradient-border border-b-0.5 border-[#a9dfd891] relative h-[290px] rounded-lg bg-[#21222D] shadow-lg py-6 px-6">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-xl font-semibold tracking-wider">Earning Insights</p>
                  <p className="text-gray-400 text-sm  tracking-wider">Performance Summary</p>
                </div>
                
                <div className="flex gap-4 ">
                  <div className="h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-5 py-3 justify-between">
                    <div className="mb-4 ">
                      <Image src="/graph.png" alt="earnings" width={50} height={50} />
                    </div>
                    <p className="flex text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee/>51,060
                    </p>
                    <p className="text-gray-400 text-sm tracking-wider">
                      All time
                    </p>
                    <p className="text-[#C4904C] text-sm tracking-wide">
                      +10% from yesterday
                    </p>
                  </div>
                  <div className="h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-5 py-3 justify-between">
                    <div className="mb-4">
                      <Image src="/battery.png" alt="earnings" width={25} height={25} />
                    </div>
                    <p className="flex text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee/>21,340
                    </p>
                    <p className="text-gray-400 text-sm tracking-wider">
                      All time Paid
                    </p>
                    <p className="text-[#85ADAA] text-sm tracking-wide">
                      +5% from yesterday
                    </p>
                  </div>
                  <div className="h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-5 py-3 justify-between">
                    <div className="mb-4">
                      <Image src="/purse.png" alt="earnings" width={35} height={35} />
                    </div>
                    <p className="flex text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee/>10,162
                    </p>
                    <p className="text-gray-400 text-sm tracking-wider">
                      In last 30 days
                    </p>
                    <p className="text-[#F2C8ED] text-sm tracking-wide">
                      +3% from yesterday
                    </p>
                  </div>
                  <div className="h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-5 py-3 justify-between">
                    <div className="mb-4">
                      <Image src="/user.png" alt="earnings" width={30} height={30} />
                    </div>
                    <p className="flex text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee/>3,890
                    </p>
                    <p className="text-gray-400 text-sm tracking-wider">
                      In last 7 days
                    </p>
                    <p className="text-[#20AEF3] text-sm tracking-wide">
                      -2% from yesterday
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex-[3] gradient-border border-b-0.5 border-[#a9dfd891] relative h-[290px] rounded-lg bg-[#21222D] shadow-lg py-6 px-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-xl font-semibold tracking-wider">Earning Level</p>
                  <div>
                    dropdown
                  </div>
                </div> 
                <div className="flex justify-center items-center mt-8">
                  <Image src="/graph2.png" alt="level" width={240} height={240} className="shadow-lg" />
                  
                </div>


              </div>
            </div>



            <div className="flex gap-5">
              <div className=" flex-[3] flex flex-col gap-4 gradient-border border-b-0.5 border-[#a9dfd891] relative h-[350px] rounded-lg bg-[#21222D] shadow-lg py-6 px-6">
                <div className="flex flex-col ">
                  <p className="text-gray-300 text-xl font-semibold tracking-wider">Your Rank</p>
                  <p className="text-gray-400 text-sm  tracking-wider">Among other affiliates</p>
                  <p className="text-[#A9DFD8] text-3xl mt-4 font-semibold tracking-wider">#6987</p>
                  <div className="flex justify-between items-center border-b border-gray-600/50 py-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-yellow-200 w-8 h-8">

                      </div>
                      <p className="text-gray-300 text-sm tracking-wider">
                        Taniya Patiyal
                      </p>

                    </div>

                    <div>
                      <p>#6986</p>

                    </div>

                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600/50 bg-gray-900/30 py-4">
                    <div className="flex items-center  gap-2">
                      <div className="rounded-full bg-green-200 w-8 h-8">

                      </div>
                      <p className="text-gray-300 text-sm tracking-wider">
                        Piyush Patiyal
                      </p>

                    </div>

                    <div>
                      <p>#6987</p>

                    </div>

                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600/50 py-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-pink-200 w-8 h-8">

                      </div>
                      <p className="text-gray-300 text-sm tracking-wider">
                        Uttkarsh Singh
                      </p>

                    </div>

                    <div>
                      <p>#6988</p>

                    </div>

                  </div>
                </div>
                
                
              </div>

              <div className=" flex-[7] gradient-border border-b-0.5 border-[#a9dfd891] relative h-[350px] rounded-lg bg-[#21222D] shadow-lg py-6 px-4">
                
              </div>

            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
