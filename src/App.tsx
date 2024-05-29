import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { TDMain } from "./pages";

function App() {
  const theme = useTheme();
  const overrideTheme = createTheme({
    spacing: 1,
    typography: {
      fontFamily: [`"Roboto"`, "sans-serif"].join(","),
    },
    palette: {
      primary: { main: "#00C16A" },
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            paddingInline: `${theme.spacing(2)} !important`,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: `${theme.spacing(1)} !important`,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={overrideTheme}>
      <CssBaseline />
      <TDMain />;
    </ThemeProvider>
  );
}

export default App;
