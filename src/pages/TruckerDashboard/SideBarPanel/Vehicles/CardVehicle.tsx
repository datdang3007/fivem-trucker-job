import { Grid, Typography, styled, useTheme } from "@mui/material";
import { COLOR_PALLETTE } from "../../../../constants";
import { ButtonCommon, ImageCommon } from "../../../../components";
import { AttachMoney } from "@mui/icons-material";

type Props = {
  image: string;
  name: string;
  level: number;
  speed: string;
  trunkSpace: number;
  listCargo: string[];
};

export const CardVehicle = (props: Props) => {
  const theme = useTheme();
  const { image, name, level, speed, trunkSpace, listCargo } = props;

  return (
    <CustomCard container columnGap={theme.spacing(16)}>
      {/* Image */}
      <Grid item xs="auto">
        <ImageBox>
          <ImageCommon src={image} />
        </ImageBox>
      </Grid>

      {/* Info */}
      <Grid item xs>
        <Grid container height={1} flexDirection="row">
          <Grid item xs="auto">
            {/* Name */}
            <Grid item xs={12}>
              <TypographyStyle fontSize={theme.spacing(18)} fontWeight="bold">
                {name}
              </TypographyStyle>
            </Grid>

            {/* Level */}
            <Grid item xs={12}>
              <TypographyStyle fontSize={theme.spacing(11)}>
                Cấp độ {level}
              </TypographyStyle>
            </Grid>
          </Grid>

          <Grid container rowGap={theme.spacing(4)}>
            <Grid item xs={12}>
              <TypographyStyle fontSize={theme.spacing(13)}>
                - Tốc độ: {speed}km/h
              </TypographyStyle>
            </Grid>

            <Grid item xs={12}>
              <TypographyStyle fontSize={theme.spacing(13)}>
                - Khoảng trống cốp: {trunkSpace}
              </TypographyStyle>
            </Grid>

            <Grid item xs={12}>
              <TypographyStyle fontSize={theme.spacing(13)}>
                - Mặt hàng có thể chở: {listCargo.join(", ")}
              </TypographyStyle>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Button Acctions */}
      <Grid container item xs="auto" alignItems="flex-end">
        <Grid container>
          <ButtonCommon
            text="Thuê xe"
            buttonProps={{
              color: "primary",
              variant: "contained",
              startIcon: <AttachMoney />,
            }}
          />
        </Grid>
      </Grid>
    </CustomCard>
  );
};

const TypographyStyle = styled(Typography)({
  color: "#FFFFFF",
});

const ImageBox = styled(Grid)(({ theme }) => ({
  overflow: "hidden",
  width: theme.spacing(260),
  borderRadius: theme.spacing(4),
}));

const CustomCard = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
  borderRadius: theme.spacing(8),
  background: COLOR_PALLETTE.GRAY_800,
}));
