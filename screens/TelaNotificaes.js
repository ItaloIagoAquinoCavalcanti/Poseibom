import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const TelaNotificaes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telanotificaes}>
      <Pressable
        style={[styles.perfil, styles.homeLayout]}
        onPress={() => navigation.navigate("TelaPerfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/perfil.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.histrico, styles.homeLayout]}
        onPress={() => navigation.navigate("TelaHistrico")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/histrico.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.home, styles.homeLayout]}
        onPress={() => navigation.navigate("TelaHome")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <View style={styles.mensagemvazio}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Text style={[styles.tudoVazioPor, styles.tudoVazioPorFlexBox]}>
          Tudo vazio por aqui!
        </Text>
        <Text style={styles.vocAindaNo}>{`Você ainda não tem notificações,
quando receber alguma, ela aparecerá
aqui`}</Text>
        <Image
          style={styles.image24Icon}
          contentFit="cover"
          source={require("../assets/image-241.png")}
        />
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("TelaHome")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar.png")}
        />
      </Pressable>
      <Text style={[styles.minhasNotificaes, styles.tudoVazioPorFlexBox]}>
        MINHAS NOTIFICAÇÕES
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
  homeLayout: {
    height: 36,
    width: 36,
    top: 730,
    position: "absolute",
  },
  tudoVazioPorFlexBox: {
    textAlign: "left",
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
  perfil: {
    left: 270,
  },
  histrico: {
    left: 162,
  },
  home: {
    left: 54,
  },
  unionIcon: {
    width: 152,
    height: 113,
  },
  tudoVazioPor: {
    top: 141,
    left: 23,
    fontSize: FontSize.size_xl,
    letterSpacing: -1.4,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  vocAindaNo: {
    top: 171,
    fontSize: FontSize.size_sm,
    letterSpacing: -1,
    color: "#646363",
    textAlign: "center",
    left: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  image24Icon: {
    left: 35,
    width: 131,
    height: 131,
    top: 0,
    position: "absolute",
  },
  mensagemvazio: {
    top: 276,
    left: 79,
    width: 202,
    height: 228,
    position: "absolute",
  },
  botovoltar: {
    left: 16,
    top: 68,
    width: 43,
    height: 43,
    position: "absolute",
  },
  minhasNotificaes: {
    top: 74,
    left: 86,
    fontSize: FontSize.size_lg,
    letterSpacing: -1.3,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_300,
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
  telanotificaes: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaNotificaes;
