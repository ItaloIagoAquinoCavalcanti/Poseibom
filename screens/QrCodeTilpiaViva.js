import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const QrCodeTilpiaViva = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qrcodetilpiaviva}>
      <Pressable
        style={styles.image30}
        onPress={() => navigation.navigate("Check")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
      <Text style={styles.qrCode}>QR CODE</Text>
      <Text style={[styles.r1199, styles.compraFlexBox]}>R$ 11,99</Text>
      <Text style={[styles.valor, styles.compraFlexBox]}>Valor</Text>
      <Text style={[styles.x1, styles.x1Typo]}>x 1</Text>
      <Text style={[styles.tilpiaViva, styles.x1Typo]}>Tilápia Viva</Text>
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-91.png")}
      />
      <Text style={[styles.informaesDeCompra, styles.compraFlexBox]}>
        Informações de Compra
      </Text>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("PixTilpiaViva")}
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
  compraFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  x1Typo: {
    top: 371,
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
    left: 66,
    top: 473,
    width: 228,
    height: 228,
    position: "absolute",
  },
  qrCode: {
    top: 446,
    left: 126,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  r1199: {
    left: 218,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  valor: {
    left: 35,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  x1: {
    left: 275,
  },
  tilpiaViva: {
    left: 35,
  },
  image9Icon: {
    top: 196,
    left: 91,
    borderRadius: Border.br_mid,
    width: 177,
    height: 160,
    position: "absolute",
  },
  informaesDeCompra: {
    top: 145,
    left: 25,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    textAlign: "left",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
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
    top: 0,
    left: 325,
    width: 19,
  },
  text1: {
    left: 0,
  },
  barranotificaes: {
    top: 7,
    left: 11,
    width: 344,
  },
  qrcodetilpiaviva: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default QrCodeTilpiaViva;
