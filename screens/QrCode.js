import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

export const QrCode = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const product = params.product;
  const amount = params.amount;
  const totalPayment = params.totalPayment;


  const productImage = () => {
    if (product?.id === 1) {
      return require("../assets/imgtilapiaviva.png");
    }
    if (product?.id === 2) {
      return require("../assets/image-62.png");
    }
    if (product?.id === 3) {
      return require("../assets/image-5.png");
    }

    return require("../assets/imgtilapiaviva.png");
  }

  return (
    <View style={styles.qrcodetilpiafresca}>

      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar.png")}
        />
      </Pressable>

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
        <Text style={[styles.r1899, styles.compraFlexBox]}>R$ {totalPayment}</Text>
        <Text style={[styles.valor, styles.compraFlexBox]}>Valor</Text>
        <Text style={[styles.x1, styles.x1Typo]}>x {amount}</Text>
        <Text style={[styles.filDeTilpia, styles.x1Typo]}>
          {product?.name}
        </Text>
        <Image
          style={[styles.image5Icon, styles.image30Position]}
          contentFit="cover"
          source={productImage()}
        />
        <Text style={[styles.informaesDeCompra, styles.compraFlexBox]}>
          Informações de Compra
        </Text>
        <Text style={[styles.finalizarCompra, styles.compraFlexBox]}>
          Finalizar Compra
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  image30Position: {
    left: 90,
    position: "absolute",
  },
  compraFlexBox: {
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  x1Typo: {
    top: 330,
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
    top: 580,
    width: 228,
    height: 228,
  },
  qrCode: {
    top: 450,
    left: 120,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  r1899: {
    left: 193,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 380,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  valor: {
    left: 10,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    top: 380,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  x1: {
    left: 250,
  },
  filDeTilpia: {
    left: 10,
  },
  image5Icon: {
    top: 150,
    borderRadius: Border.br_mid,
    width: 177,
    height: 160,
  },
  informaesDeCompra: {
    top: 73,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    left: 0,
    textAlign: "left",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  finalizarCompra: {
    left: 77,
    top: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    letterSpacing: -1.8,
    fontSize: FontSize.size_7xl,
  },
  informaesgerais: {
    top: 72,
    left: 25,
    width: 272,
    height: 408,
    position: "absolute",
  },
  botovoltar: {
    left: 16,
    top: 68,
    width: 43,
    height: 43,
    position: "absolute",
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
  qrcodetilpiafresca: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});
