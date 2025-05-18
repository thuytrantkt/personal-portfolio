import * as React from "react";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ModalClose,
  Typography,
} from "@mui/joy";
import NavigationListItems from "./NavigationListIems";

export default function DrawerMobileNavigation({
  open,
  handleCloseDrawerMobile,
  selected,
  handleSelected,
}: {
  open: boolean;
  handleCloseDrawerMobile: () => void;
  selected: string;
  handleSelected: (value: string) => void;
}) {
  return (
    <Drawer open={open} onClose={handleCloseDrawerMobile}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          mt: 1,
          mr: 2,
        }}
      >
        <Typography
          component="label"
          htmlFor="close-icon"
          sx={{ fontSize: "sm", fontWeight: "lg", cursor: "pointer" }}
        >
          <span aria-labelledby="Close icon" className="sr-only">
            Close
          </span>
        </Typography>
        <ModalClose id="close-icon" sx={{ position: "initial" }} />
      </Box>
      <nav>
        <NavigationListItems
          type="mobile"
          selected={selected}
          handleSelected={handleSelected}
        />
      </nav>
    </Drawer>
  );
}
