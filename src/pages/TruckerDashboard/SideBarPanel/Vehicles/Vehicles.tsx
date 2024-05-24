import { Grid, Typography, styled, useTheme } from "@mui/material";
import { CardVehicle } from "./CardVehicle";
import Rebel2Img from "../../../../assets/rebel2.webp";
import { useMemo } from "react";

interface ITruckerVehicle {
  model: string;
  price: number;
  image: string;
  name: string;
  level: number;
  speed: string;
  trunkSpace: number;
  listCargo: string[];
}

const listTruckerVehicle: ITruckerVehicle[] = [
  {
    model: "rebel2",
    price: 1000,
    image: Rebel2Img,
    name: "Rebel 2",
    level: 1,
    speed: "80-90",
    trunkSpace: 2,
    listCargo: ["Hàng cỡ nhỏ"],
  },
];

export const Vehicles = () => {
  const theme = useTheme();

  const renderCardsVehicleComponent = useMemo(() => {
    return listTruckerVehicle.map((veh) => {
      return (
        <CardVehicle
          key={veh.model}
          image={veh.image}
          name={veh.name}
          level={veh.level}
          speed={veh.speed}
          trunkSpace={veh.trunkSpace}
          listCargo={veh.listCargo}
        />
      );
    });
  }, []);

  return (
    <Grid container rowGap={theme.spacing(16)}>
      {/* Title */}
      <Grid container>
        <TypographyStyle fontSize={theme.spacing(22)} fontWeight="bold">
          Danh sách phương tiện
        </TypographyStyle>
      </Grid>

      {/* List */}
      <Grid container rowGap={theme.spacing(12)}>
        {renderCardsVehicleComponent}
      </Grid>
    </Grid>
  );
};

const TypographyStyle = styled(Typography)({
  color: "#FFFFFF",
});
