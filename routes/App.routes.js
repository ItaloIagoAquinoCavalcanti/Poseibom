const Stack = createNativeStackNavigator();
import * as React from "react";
import { FinalizarCompra } from '../screens/FinalizarCompra'
import CartoConfVisa from "../screens/CartoConfVisa";
import CartoConfHiper from "../screens/CartoConfHiper";
import CartoConfNubank from "../screens/CartoConfNubank";
import QrCodeTilpiaFresca from "../screens/QrCodeTilpiaFresca";
import PixTilpiaFresca from "../screens/PixTilpiaFresca";
import CartoConfMaster from "../screens/CartoConfMaster";
import CartoTilpiaFresca from "../screens/CartoTilpiaFresca";
import CartoConfVisa30 from "../screens/CartoConfVisa30";
import CartoConfHiper30 from "../screens/CartoConfHiper30";
import CartoConfNubank30 from "../screens/CartoConfNubank30";
import QrCodeTilpiaCongelada from "../screens/QrCodeTilpiaCongelada";
import PixTilpiaCongelada from "../screens/PixTilpiaCongelada";
import CartoConfMaster30 from "../screens/CartoConfMaster30";
import CartoTilpiaCongelada from "../screens/CartoTilpiaCongelada";
import CompraTilpiaCongelada from "../screens/CompraTilpiaCongelada";
import TelaTilpiaCongelada from "../screens/TelaTilpiaCongelada";
import CartoConfVisa20 from "../screens/CartoConfVisa20";
import CartoConfHiper20 from "../screens/CartoConfHiper20";
import CartoConfNubank20 from "../screens/CartoConfNubank20";
import Check from "../screens/Check";
import CartoConfMaster20 from "../screens/CartoConfMaster20";
import TelaNovoCartoNoPgamento30 from "../screens/TelaNovoCartoNoPgamento30";
import TelaNovoCartoNoPgamento20 from "../screens/TelaNovoCartoNoPgamento20";
import TelaNovoCartoNoPgamento from "../screens/TelaNovoCartoNoPgamento";
import TelaCartoMasterCard from "../screens/TelaCartoMasterCard";
import TelaCartoNubank from "../screens/TelaCartoNubank";
import TelaCartoHiperCard from "../screens/TelaCartoHiperCard";
import TelaNovoCarto from "../screens/TelaNovoCarto";
import QrCodeTilpiaViva from "../screens/QrCodeTilpiaViva";
import TelaTrocaDeFoto from "../screens/TelaTrocaDeFoto";
import TelaRemoverCarto from "../screens/TelaRemoverCarto";
import TelaCartoVISA from "../screens/TelaCartoVISA";
import TelaCartes from "../screens/TelaCartes";
import TelaNotificaes from "../screens/TelaNotificaes";
import TelaPerfil from "../screens/TelaPerfil";
import PixTilpiaViva from "../screens/PixTilpiaViva";
import CartoTilpiaViva from "../screens/CartoTilpiaViva";
import CompraTilpiaViva from "../screens/CompraTilpiaViva";
import TelaTilpiaViva from "../screens/TelaTilpiaViva";
import TelaHistrico from "../screens/TelaHistrico";
import CompraTilpiaFresca from "../screens/CompraTilpiaFresca";
import TelaTilpiaFresca from "../screens/TelaTilpiaFresca";
import TelaHome from "../screens/TelaHome";
import EsqueciaSenha from "../screens/EsqueciaSenha";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Produto } from "../screens/Produto";
import { QrCode } from "../screens/QrCode";

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TelaHome">
      <Stack.Screen
        name="CartoConfVisa"
        component={CartoConfVisa}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfHiper"
        component={CartoConfHiper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfNubank"
        component={CartoConfNubank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCodeTilpiaFresca"
        component={QrCodeTilpiaFresca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PixTilpiaFresca"
        component={PixTilpiaFresca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfMaster"
        component={CartoConfMaster}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoTilpiaFresca"
        component={CartoTilpiaFresca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfVisa30"
        component={CartoConfVisa30}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfHiper30"
        component={CartoConfHiper30}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfNubank30"
        component={CartoConfNubank30}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCodeTilpiaCongelada"
        component={QrCodeTilpiaCongelada}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PixTilpiaCongelada"
        component={PixTilpiaCongelada}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfMaster30"
        component={CartoConfMaster30}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoTilpiaCongelada"
        component={CartoTilpiaCongelada}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompraTilpiaCongelada"
        component={CompraTilpiaCongelada}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaTilpiaCongelada"
        component={TelaTilpiaCongelada}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfVisa20"
        component={CartoConfVisa20}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfHiper20"
        component={CartoConfHiper20}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfNubank20"
        component={CartoConfNubank20}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Check"
        component={Check}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoConfMaster20"
        component={CartoConfMaster20}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaNovoCartoNoPgamento30"
        component={TelaNovoCartoNoPgamento30}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaNovoCartoNoPgamento20"
        component={TelaNovoCartoNoPgamento20}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaNovoCartoNoPgamento"
        component={TelaNovoCartoNoPgamento}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCartoMasterCard"
        component={TelaCartoMasterCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCartoNubank"
        component={TelaCartoNubank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCartoHiperCard"
        component={TelaCartoHiperCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaNovoCarto"
        component={TelaNovoCarto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCodeTilpiaViva"
        component={QrCodeTilpiaViva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaTrocaDeFoto"
        component={TelaTrocaDeFoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaRemoverCarto"
        component={TelaRemoverCarto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCartoVISA"
        component={TelaCartoVISA}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCartes"
        component={TelaCartes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaNotificaes"
        component={TelaNotificaes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaPerfil"
        component={TelaPerfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PixTilpiaViva"
        component={PixTilpiaViva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CartoTilpiaViva"
        component={CartoTilpiaViva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompraTilpiaViva"
        component={CompraTilpiaViva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaTilpiaViva"
        component={TelaTilpiaViva}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaHistrico"
        component={TelaHistrico}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompraTilpiaFresca"
        component={CompraTilpiaFresca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaTilpiaFresca"
        component={TelaTilpiaFresca}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaHome"
        component={TelaHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EsqueciaSenha"
        component={EsqueciaSenha}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="FinalizarCompra"
        component={FinalizarCompra}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrCode"
        component={QrCode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
