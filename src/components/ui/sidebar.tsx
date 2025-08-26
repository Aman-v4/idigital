"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = false,
  }: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
  }) => {
    const [openState, setOpenState] = useState(false);
    const [activeLink, setActiveLink] = useState("dashboard"); // Set dashboard as default active
  
    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;
  
    return (
      <SidebarContext.Provider value={{ 
        open, 
        setOpen, 
        animate: animate,
        activeLink,
        setActiveLink 
      }}>
        {children}
      </SidebarContext.Provider>
    );
  };
  

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-[#171821] border-r border-neutral-200 dark:border-neutral-700 w-[250px] shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "60px") : "250px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-[#171821] w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-[#171821] p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-[#6B6C71]"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
    link,
    className,
    ...props
  }: {
    link: Links;
    className?: string;
  }) => {
    const { open, animate, activeLink, setActiveLink } = useSidebar();
    
    const isActive = activeLink === link.label.toLowerCase();
    
    return (
      <a
        href={link.href}
        className={cn(
          "flex items-center px-10 gap-4 group/sidebar rounded-tr-lg rounded-br-lg py-4 my-2 transition-all duration-200 ease-in-out",
          isActive 
            ? "bg-[#A9DFD8] text-[#171821]" // Active styles
            : "hover:bg-[#A9DFD8] hover:text-[#171821] text-[#949494]", // Default styles
          className
        )}
        onClick={() => setActiveLink(link.label.toLowerCase())}
        {...props}
      >
        {link.icon}
  
        <motion.span
          animate={{
            display: animate ? (open ? "inline-block" : "none") : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className={cn(
            "font-medium text-md tracking-wider group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",
            isActive 
              ? "text-[#171821]" // Active text color
              : "text-neutral-700 dark:text-[#949494] group-hover/sidebar:text-[#171821]" // Default text color
          )}
        >
          {link.label}
        </motion.span>
      </a>
    );
  };
  
