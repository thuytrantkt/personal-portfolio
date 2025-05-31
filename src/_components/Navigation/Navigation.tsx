"use client";

import { useEffect, useState } from "react";
import useBreakpoint from "@/_hooks/useBreakpoints";
import Menu from "@mui/icons-material/Menu";
import { IconButton } from "@mui/joy";
import NavigationListItems from "./NavigationListIems";
import { usePathname } from "next/navigation";
import DrawerMobileNavigation from "./DrawerMobileNavigation";

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
