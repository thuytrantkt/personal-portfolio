"use client";

import { useEffect, useState } from "react";
import useBreakpoint from "@/app/hooks/useBreakpoints";
import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/joy";
import DrawerMobileNavigation from "./DrawerMobileNavigation";
import NavigationListItems from "./NavigationListIems";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const lgScreen = useBreakpoint("lg");
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("home");

  const handleOpenDrawerMobile = () => {
    setOpen(true);
  };

  const handleCloseDrawerMobile = () => {
    setOpen(false);
  };

  const handleItemSelected = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    const currentPath = pathname.split("/").filter((item) => item !== "");
    console.log("currentPath", currentPath);
    if (currentPath.length > 0) {
      setSelected(currentPath[0]);
    }
  }, [pathname]);

  return (
    <>
      <DrawerMobileNavigation
        open={open}
        handleCloseDrawerMobile={handleCloseDrawerMobile}
        selected={selected}
        handleSelected={handleItemSelected}
      />
      {lgScreen ? (
        <nav>
          <NavigationListItems
            type="desktop"
            selected={selected}
            handleSelected={handleItemSelected}
          />
        </nav>
      ) : (
        <IconButton color="primary" onClick={handleOpenDrawerMobile}>
          <Menu />
        </IconButton>
      )}
    </>
  );
};

export default Navigation;
