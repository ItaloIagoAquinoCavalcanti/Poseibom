import { NavigationContainer } from "@react-navigation/native"
import { useContext } from "react"
import { AppRoutes } from "./App.routes"
import { AuthRoutes } from "./auth.routes"
import { AuthContext } from "../context/AuthContext"

export const Routes = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isAuth ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}