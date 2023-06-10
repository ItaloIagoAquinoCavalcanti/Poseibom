import * as React from "react";
import TelaDeLogin from "../screens/TelaDeLogin";
import TelaDeCadastro from "../screens/TelaDeCadastro";
import EsqueciaSenha from "../screens/EsqueciaSenha";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export const AuthRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TelaDeLogin"
                component={TelaDeLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TelaDeCadastro"
                component={TelaDeCadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EsqueciaSenha"
                component={EsqueciaSenha}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
