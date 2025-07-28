"use client";

import useBreakpoint from "@/hooks/useBreakpoints";
import { NAVIGATION_LIST_ITEMS } from "@/utils/constants";
import { List, ListItem, ListItemButton } from "@mui/joy";
import Link from "next/link";

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
      {NAVIGATION_LIST_ITEMS.map((item) => (
        <ListItem key={item.name}>
          <Link href={item.href}>
            <ListItemButton
              selected={selected === item.name}
              onClick={() => handleSelected(item.name)}
              component="span"
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationListItems;
