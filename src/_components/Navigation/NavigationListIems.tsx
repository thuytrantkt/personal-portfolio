"use client";

import useBreakpoint from "@/_hooks/useBreakpoints";
import { NAVOGATION_LIST_ITEMS } from "@/_utils/constants";
import { List, ListItem, ListItemButton } from "@mui/joy";

const NavigationListItems = ({
  type,
  selected,
  handleSelected,
}: {
  type: "desktop" | "mobile";
  selected: string;
  handleSelected: (value: string) => void;
}) => {
  const lgScreen = useBreakpoint("lg");
  const customListStylesOnLgScreen =
    type === "desktop" && lgScreen ? { flexFlow: "row" } : {};

  return (
    <List sx={customListStylesOnLgScreen}>
      {NAVOGATION_LIST_ITEMS.map((item) => (
        <ListItem key={item.name}>
          <ListItemButton
            selected={selected === item.name}
            onClick={() => handleSelected(item.name)}
            component="a"
            href={item.href}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationListItems;
