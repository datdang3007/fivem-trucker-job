import { Grid, Typography, useTheme } from "@mui/material";
import { useTruckerJobProvider } from "../../../providers";
import { useCallback } from "react";
import { ETruckerTabId } from "../../../constants";
import { Vehicles } from "./Vehicles";

export const SideBarPanel = () => {
  const theme = useTheme();
  const { tab } = useTruckerJobProvider();

  const renderTabPanelComponent = useCallback(() => {
    switch (tab) {
      case ETruckerTabId.Vehicles:
        return <Vehicles />;
      case ETruckerTabId.Markets:
        return <></>;
      default:
        return <Typography>unkown</Typography>;
    }
  }, [tab]);

  return (
    <Grid container padding={theme.spacing(16)}>
      {renderTabPanelComponent()}
    </Grid>
  );
};