"use client"
import { SidebarProvider, Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { House,AlignEndHorizontal,ShoppingCart,User,ChartSpline,MessageCircle,Settings,Star,Award,BellDot,ChevronDown, Wallet, IndianRupee} from "lucide-react";
import { useState, useEffect } from "react";
import Image from 'next/image'


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Auto-collapse sidebar based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState('Select an option');
  
  const options2 = [
    'Weakly',
    'Monthly', 
    'Yearly',
    'All time'
  ];
  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  
  const handleSelect2 = (option2: string) => {
    setSelectedValue2(option2);
    setIsOpen2(false);
  };

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
      <div className="relative flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className={`${open ? 'block' : 'hidden lg:block'} fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto`}>
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex justify-center items-center bg-white px-2 py-2 mt-4 md:mt-10">
                <Image 
                  src="/razorpaylogo.png" 
                  alt="idigital" 
                  width={200} 
                  height={200}
                  className="w-auto h-8 md:h-12 max-w-[150px] md:max-w-[200px]"
                />
              </div>
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
              </div>
            </SidebarBody>
          </Sidebar>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {open && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 w-full min-w-0 overflow-auto">
          <div className="flex flex-col gap-3 md:gap-5 mt-4 md:mt-14 mx-3 md:mx-6 lg:mx-10 pb-6">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 min-h-[60px] rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-medium break-words">
                    Hello, <span className="text-[#A9DFD8]">Aman Verma🤘</span>
                  </p>
                </div>

                <div className="relative flex-shrink-0">
                  <div className="flex items-center gap-3 md:gap-6">
                    <BellDot className="w-5 h-5 md:w-6 md:h-6" />
                    <div 
                      className="flex items-center gap-2 cursor-pointer hover:bg-[#1d1e34] transition-colors duration-200 ease-in-out rounded-full p-1 md:p-2" 
                      onClick={toggleDropdown}
                    >
                      <div className="rounded-full bg-[#A9DFD8] w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                        <Image 
                          src="/profile.jpg" 
                          alt="user" 
                          width={40} 
                          height={40} 
                          className="rounded-full w-full h-full object-cover" 
                        />
                      </div>
                      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                  </div>

                    {isOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={closeDropdown}
                        ></div>
                        
                        <div className="absolute right-0 top-full mt-2 w-44 md:w-48 bg-[#1d1e24] text-white rounded-lg shadow-lg border border-gray-600 z-20">
                          <div className="py-1">
                            <a 
                              href="#" 
                              className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-[#1d1e34] transition-colors duration-200 ease-in-out"
                              onClick={closeDropdown}
                            >
                              Profile Settings
                            </a>
                            <a 
                              href="#" 
                              className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-[#1d1e34] transition-colors duration-200 ease-in-out"
                              onClick={closeDropdown}
                            >
                              Account Preferences
                            </a>
                            <a 
                              href="#" 
                              className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-[#1d1e34] transition-colors duration-200 ease-in-out"
                              onClick={closeDropdown}
                            >
                              Help & Support
                            </a>
                            <hr className="border-gray-600" />
                            <a 
                              href="#" 
                              className="block px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm text-red-600 hover:bg-red-500 hover:text-black transition-colors duration-200 ease-in-out"
                              onClick={closeDropdown}
                            >
                              Sign Out
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
            </div>

            {/* Timer Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center min-h-[60px] bg-[#21222D] rounded-lg px-4 md:px-6 py-4 shadow-lg">
              <div className="border-r-0 sm:border-r pr-0 sm:pr-5 border-b sm:border-b-0 pb-3 sm:pb-0 w-full sm:w-auto border-gray-600/50">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 tracking-wider">
                  6<span className="text-xs md:text-sm text-gray-400/50">Days </span>
                  11<span className="text-xs md:text-sm text-gray-400/50">Hr </span>
                  59<span className="text-xs md:text-sm text-gray-400/50">Min </span>
                  09<span className="text-xs md:text-sm text-gray-400/50">Sec </span>  
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 tracking-wider text-xs md:text-sm break-words">
                  Your <span className="text-[#A9DFD8]">next</span> level is just <span className="text-[#A9DFD8]">one click away...</span> 
                </p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex flex-col xl:flex-row gap-3 md:gap-5">
              {/* Earning Insights Section */}
              <div className="flex-1 xl:flex-[7] flex flex-col gap-4 gradient-border border-b-0.5 border-[#a9dfd891] relative min-h-[290px] rounded-lg bg-[#21222D] shadow-lg py-4 md:py-6 px-4 md:px-6">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold tracking-wider">Earning Insights</p>
                  <p className="text-gray-400 text-xs md:text-sm tracking-wider">Performance Summary</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
                  <div className="h-[140px] md:h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-3 md:px-5 py-3 justify-between">
                    <div className="mb-2 md:mb-4">
                      <Image 
                        src="/graph.png" 
                        alt="earnings" 
                        width={50} 
                        height={50}
                        className="w-8 h-8 md:w-12 md:h-12"
                      />
                    </div>
                    <p className="flex text-base sm:text-lg md:text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5"/>51,060
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                      All time
                    </p>
                    <p className="text-[#C4904C] text-xs md:text-sm tracking-wide">
                      +10% from yesterday
                    </p>
                  </div>
                  <div className="h-[140px] md:h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-3 md:px-5 py-3 justify-between">
                    <div className="mb-2 md:mb-4">
                      <Image 
                        src="/battery.png" 
                        alt="earnings" 
                        width={25} 
                        height={25}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                    <p className="flex text-base sm:text-lg md:text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5"/>21,340
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                      All time Paid
                    </p>
                    <p className="text-[#85ADAA] text-xs md:text-sm tracking-wide">
                      +5% from yesterday
                    </p>
                  </div>
                  <div className="h-[140px] md:h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-3 md:px-5 py-3 justify-between">
                    <div className="mb-2 md:mb-4">
                      <Image 
                        src="/purse.png" 
                        alt="earnings" 
                        width={35} 
                        height={35}
                        className="w-7 h-7 md:w-9 md:h-9"
                      />
                    </div>
                    <p className="flex text-base sm:text-lg md:text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5"/>10,162
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                      In last 30 days
                    </p>
                    <p className="text-[#F2C8ED] text-xs md:text-sm tracking-wide">
                      +3% from yesterday
                    </p>
                  </div>
                  <div className="h-[140px] md:h-[170px] w-full bg-[#171821] shadow-lg rounded-lg flex flex-col px-3 md:px-5 py-3 justify-between">
                    <div className="mb-2 md:mb-4">
                      <Image 
                        src="/user.png" 
                        alt="earnings" 
                        width={30} 
                        height={30}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                    <p className="flex text-base sm:text-lg md:text-xl font-semibold tracking-wide items-center gap-1">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5"/>3,890
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm tracking-wider">
                      In last 7 days
                    </p>
                    <p className="text-[#20AEF3] text-xs md:text-sm tracking-wide">
                      -2% from yesterday
                    </p>
                  </div>
                </div>
              </div>

              {/* Earning Level Section */}
              <div className="w-full xl:flex-[3] gradient-border border-b-0.5 border-[#a9dfd891] relative min-h-[290px] rounded-lg bg-[#21222D] shadow-lg py-4 md:py-6 px-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold tracking-wider">Earning Level</p>
                  <div className="relative w-full sm:w-auto">
                    <div 
                      className="flex items-center justify-between gap-2 px-2 py-2 bg-[#171821] rounded-md cursor-pointer hover:border-gray-700 transition-colors min-w-[130px] w-full sm:w-auto"
                      onClick={toggleDropdown2}
                    >
                      <span className="text-white text-xs md:text-sm">{selectedValue2}</span>
                      <div className={`transition-transform duration-200 ${isOpen2 ? 'rotate-180' : ''}`}>
                        <ChevronDown size={16} />
                      </div>
                    </div>
      
                  {isOpen2 && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsOpen2(false)}
                      ></div>
                      
                      <div className="absolute top-full left-0 right-0 mt-1 bg-[#171821] text-center rounded-md shadow-lg z-20">
                        <div className="py-1">
                          {options2.map((option2, index2) => (
                            <div
                              key={index2}
                              className="px-4 py-2 text-xs md:text-sm text-white hover:bg-[#171821] cursor-pointer transition-colors duration-200 ease-in-out"
                              onClick={() => handleSelect2(option2)}
                            >
                              {option2}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                </div> 
                <div className="flex justify-center items-center mt-4 md:mt-8">
                  <Image 
                    src="/graph2.png" 
                    alt="level" 
                    width={240} 
                    height={240} 
                    className="shadow-lg w-auto h-auto max-w-[160px] sm:max-w-[180px] md:max-w-[240px] max-h-[160px] sm:max-h-[180px] md:max-h-[240px]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-5">
              {/* Your Rank Section */}
              <div className="w-full lg:flex-[3] flex flex-col gap-4 gradient-border border-b-0.5 border-[#a9dfd891] relative min-h-[350px] rounded-lg bg-[#21222D] shadow-lg py-4 md:py-6 px-4 md:px-6">
                <div className="flex flex-col">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold tracking-wider">Your Rank</p>
                  <p className="text-gray-400 text-xs md:text-sm tracking-wider">Among other affiliates</p>
                  <p className="text-[#A9DFD8] text-xl sm:text-2xl md:text-3xl mt-4 font-semibold tracking-wider">#6987</p>
                  
                  <div className="flex justify-between items-center border-b border-gray-600/50 py-3 md:py-4 px-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="rounded-full bg-yellow-200 w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                        <Image 
                          src="/profilegirl.jpg" 
                          alt="user" 
                          width={32} 
                          height={32} 
                          className="rounded-full w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm tracking-wider truncate">
                        Taniya Patiyal
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs md:text-sm">#6986</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-gray-600/50 bg-gray-900/30 py-3 md:py-4 px-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="rounded-full bg-green-200 w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                        <Image 
                          src="/profile.jpg" 
                          alt="user" 
                          width={32} 
                          height={32} 
                          className="rounded-full w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm tracking-wider truncate">
                        Piyush Patiyal
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs md:text-sm">#6987</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-gray-600/50 py-3 md:py-4 px-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="rounded-full bg-pink-200 w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                        <Image 
                          src="/profile.jpg" 
                          alt="user" 
                          width={32} 
                          height={32} 
                          className="rounded-full w-full h-full object-cover" 
                        />
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm tracking-wider truncate">
                        Uttkarsh Singh
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs md:text-sm">#6988</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Earning Graph Section */}
              <div className="w-full lg:flex-[7] gradient-border border-b-0.5 border-[#a9dfd891] relative min-h-[350px] rounded-lg bg-[#21222D] shadow-lg py-4 md:py-6 px-4 md:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-0">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-semibold tracking-wider">Total Earning</p>
                  <div className="flex items-center gap-2 bg-[#171821] rounded-md px-3 py-2">
                    <div className="rounded-full bg-yellow-700 w-2 h-2"></div>
                    <p className="text-gray-300 text-xs md:text-sm tracking-wider">
                      Revenue
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-6 overflow-x-auto">
                  <Image 
                    src="/graph3.svg" 
                    alt="earnings" 
                    width={650} 
                    height={280} 
                    className="w-full h-auto min-w-[300px] max-w-full max-h-[200px] sm:max-h-[250px] md:max-h-[280px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
