import { createTheme, responsiveFontSizes } from "@mui/material";
import { green, purple } from "@mui/material/colors";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },
    typography:{
        fontFamily: "Helvetica neue"
    }
  });

  theme = responsiveFontSizes(theme);
  export default theme