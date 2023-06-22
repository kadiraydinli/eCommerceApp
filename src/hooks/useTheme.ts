import { useEffect } from "react";
import { useColorScheme } from "react-native";

import { Colors } from "@/theme";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeTheme } from "@/store/theme";
import { ThemeType } from "@/store/theme/types";

const useTheme = () => {
    const theme = useColorScheme();
    const dispatch = useAppDispatch();
    const { theme: storeTheme } = useAppSelector(store => store.theme);

    const isDarkTheme = storeTheme === 'dark';

    const colors = Colors[isDarkTheme ? "dark" : "light"];

    const activeColor = colors.active;
    const deActiveColor = colors.deActive;

    const toggleTheme = () => {
        const newTheme: ThemeType = storeTheme === "dark" ? "light" : "dark";
        dispatch(changeTheme(newTheme));
    }

    useEffect(() => {
        if (typeof storeTheme === "undefined") {
            dispatch(changeTheme(theme as ThemeType));
        }
    }, [theme, storeTheme]);

    return {
        isDarkTheme,
        colors,
        activeColor,
        deActiveColor,
        toggleTheme,
    }
};

export default useTheme;