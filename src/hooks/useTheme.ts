import { useColorScheme } from "react-native";

import { Colors } from "@/theme";

const useTheme = () => {
    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

    const colors = Colors[isDarkTheme ? "dark" : "light"];

    const activeColor = colors.active;
    const deActiveColor = colors.deActive;

    return {
        isDarkTheme,
        colors,
        activeColor,
        deActiveColor,
    }
};

export default useTheme;