import { DirectionsCarRounded, StoreRounded } from "@mui/icons-material";
import { Grid, useTheme } from "@mui/material";
import { ButtonCommon } from "../../../components";
import { useTruckerJobProvider } from "../../../providers";
import { ETruckerTabId } from "../../../constants";
import { useCallback } from "react";

const listButton = [
  {
    text: "Phương tiện",
    icon: <DirectionsCarRounded />,
    tab: ETruckerTabId.Vehicles,
  },
  {
    text: "Thị trường",
    icon: <StoreRounded />,
    tab: ETruckerTabId.Markets,
  },
];

export const SideBar = () => {
  const theme = useTheme();
  const { tab, handleSetTab } = useTruckerJobProvider();

  const renderButtonsComponent = useCallback(() => {
    return listButton.map((b) => (
      <ButtonCommon
        text={b.text}
        buttonProps={{
          fullWidth: true,
          startIcon: b.icon,
          onClick: () => handleSetTab(b.tab),
          variant: tab === b.tab ? "contained" : "outlined",
        }}
        textProps={{
          width: "100%",
          textAlign: "left",
        }}
      />
    ));
  }, [tab, handleSetTab]);

  return (
    <Grid container padding={theme.spacing(16)} rowGap={theme.spacing(8)}>
      {renderButtonsComponent()}
    </Grid>
  );
};
