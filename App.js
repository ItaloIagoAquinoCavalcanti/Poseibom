import * as React from "react";
import { useFonts } from "expo-font";

import { Routes } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Red Hat Display_regular": require("./assets/fonts/Red_Hat_Display_regular.ttf"),
    "Red Hat Display_semibold": require("./assets/fonts/Red_Hat_Display_semibold.ttf"),
    "Red Hat Display_bold": require("./assets/fonts/Red_Hat_Display_bold.ttf"),
    "Red Hat Display_extrabold": require("./assets/fonts/Red_Hat_Display_extrabold.ttf"),
    Ubuntu_light: require("./assets/fonts/Ubuntu_light.ttf"),
    Ubuntu_regular: require("./assets/fonts/Ubuntu_regular.ttf"),
    Rubik_regular: require("./assets/fonts/Rubik_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default App;
