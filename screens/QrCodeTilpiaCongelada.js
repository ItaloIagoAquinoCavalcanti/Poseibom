import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QrCodeTilpiaCongelada = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qrcodetilpiacongelada}>
      <Pressable
        style={[styles.image30, styles.image30Position]}
        onPress={() => navigation.navigate("Check")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
      <View style={styles.informaesgerais}>
        <Text style={styles.qrCode}>QR CODE</Text>
        <Text style={[styles.r2499, styles.compraFlexBox]}>R$ 24,99</Text>
        <Text style={[styles.valor, styles.compraFlexBox]}>Valor</Text>
        <Text style={[styles.x1, styles.x1Typo]}>x 1</Text>
        <Text style={[styles.filDeTilpia, styles.x1Typo]}>
          Filé de Tilápia Co...
        </Text>
        <Image
          style={[styles.image6Icon, styles.image30Position]}
          contentFit="cover"
          source={require("../assets/image-61.png")}
        />
        <Text style={[styles.informaesDeCompra, styles.compraFlexBox]}>
          Informações de Compra
        </Text>
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("PixTilpiaCongelada")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar.png")}
        />
      </Pressable>
      <Text style={[styles.finalizarCompra, styles.compraFlexBox]}>
        Finalizar Compra
      </Text>
      <View style={[styles.barranotificaes, styles.barranotificaesLayout]}>
        <Text style={[styles.text, styles.textTypo]}>100%</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.chargingBatteryIcon, styles.barranotificaesLayout]}
          contentFit="cover"
          source={require("../assets/charging-battery.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>17:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image30Position: {
    left: 66,
    position: "absolute",
  },
  compraFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  x1Typo: {
    top: 226,
    textAlign: "left",
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "10.53%",
    top: "10.53%",
    height: "78.95%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image30: {
    top: 473,
    width: 228,
    height: 228,
  },
  qrCode: {
    top: 301,
    left: 101,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  r2499: {
    left: 193,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 255,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  valor: {
    left: 10,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 255,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  x1: {
    left: 250,
  },
  filDeTilpia: {
    left: 10,
  },
  image6Icon: {
    top: 51,
    borderRadius: Border.br_mid,
    width: 177,
    height: 160,
  },
  informaesDeCompra: {
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    left: 0,
    top: 0,
    textAlign: "left",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  informaesgerais: {
    top: 145,
    left: 25,
    width: 272,
    height: 335,
    position: "absolute",
  },
  botovoltar: {
    left: 16,
    top: 68,
    width: 43,
    height: 43,
    position: "absolute",
  },
  finalizarCompra: {
    top: 72,
    left: 102,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  text: {
    left: 301,
  },
  vectorIcon: {
    width: "5.23%",
    right: "20.35%",
    left: "74.42%",
  },
  vectorIcon1: {
    width: "4.36%",
    right: "14.24%",
    left: "81.4%",
  },
  chargingBatteryIcon: {
    left: 325,
    width: 19,
    top: 0,
  },
  text1: {
    left: 0,
  },
  barranotificaes: {
    top: 7,
    left: 11,
    width: 344,
  },
  qrcodetilpiacongelada: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default QrCodeTilpiaCongelada;
