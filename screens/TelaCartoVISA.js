import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const TelaCartoVISA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telacartovisa}>
      <Pressable
        style={[styles.novocarto, styles.visaPosition]}
        onPress={() => navigation.navigate("TelaNovoCarto")}
      >
        <LinearGradient
          style={[styles.novocartoChild, styles.childPosition]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#6d6d6d",
            "rgba(127, 127, 127, 0.67)",
            "rgba(168, 166, 163, 0.83)",
            "rgba(96, 96, 96, 0.65)",
          ]}
        />
        <Text style={[styles.adicionarCarto, styles.textFlexBox]}>
          Adicionar cartão
        </Text>
        <Image
          style={[styles.novocartoItem, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>+</Text>
      </Pressable>
      <Pressable
        style={[styles.mastercard, styles.visaPosition]}
        onPress={() => navigation.navigate("TelaCartoMasterCard")}
      >
        <LinearGradient
          style={[styles.novocartoChild, styles.childPosition]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#ea7000",
            "rgba(255, 148, 50, 0.67)",
            "rgba(248, 177, 112, 0.83)",
            "rgba(248, 161, 112, 0.65)",
          ]}
        />
        <Image
          style={[styles.image29Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.nubank, styles.visaPosition]}
        onPress={() => navigation.navigate("TelaCartoNubank")}
      >
        <LinearGradient
          style={[styles.novocartoChild, styles.childPosition]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#7500ea",
            "rgba(153, 50, 255, 0.67)",
            "rgba(180, 112, 248, 0.83)",
            "rgba(188, 112, 248, 0.65)",
          ]}
        />
        <Image
          style={styles.image27Icon}
          contentFit="cover"
          source={require("../assets/image-27.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.hipercard, styles.visaPosition]}
        onPress={() => navigation.navigate("TelaCartoHiperCard")}
      >
        <LinearGradient
          style={[styles.novocartoChild, styles.childPosition]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#ea0000",
            "rgba(255, 50, 50, 0.67)",
            "rgba(248, 112, 112, 0.83)",
            "rgba(248, 112, 112, 0.65)",
          ]}
        />
        <Image
          style={[styles.image28Icon, styles.cancelLayout]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.visa, styles.visaPosition]}
        onPress={() => navigation.navigate("TelaCartes")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <LinearGradient
          style={[styles.visaChild, styles.childPosition]}
          locations={[0.05, 0.44, 0.71, 1]}
          colors={[
            "#f87099",
            "rgba(255, 50, 112, 0.67)",
            "rgba(248, 112, 153, 0.83)",
            "rgba(248, 112, 153, 0.65)",
          ]}
        />
        <Text style={[styles.text1, styles.text1Typo]}>00/00</Text>
        <Text style={[styles.alfredoSilva, styles.text1Typo]}>
          Alfredo Silva
        </Text>
        <Text style={[styles.text2, styles.text2Position]}>
          **** **** **** 0000
        </Text>
        <Image
          style={[styles.image24Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
        <Image
          style={styles.image25Icon}
          contentFit="cover"
          source={require("../assets/image-26.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.cancel, styles.cancelLayout]}
        onPress={() => navigation.navigate("TelaRemoverCarto")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/cancel.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.botovoltar, styles.text2Position]}
        onPress={() => navigation.navigate("TelaPerfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar3.png")}
        />
      </Pressable>
      <Text style={[styles.cartes, styles.textFlexBox]}>Cartões</Text>
      <View style={[styles.barranotificaes, styles.barranotificaesLayout]}>
        <Text style={[styles.text3, styles.textTypo]}>100%</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.chargingBatteryIcon, styles.barranotificaesLayout]}
          contentFit="cover"
          source={require("../assets/charging-battery.png")}
        />
        <Text style={[styles.text4, styles.textTypo]}>17:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visaPosition: {
    width: 282,
    left: 39,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: "transparent",
    borderRadius: Border.br_lgi,
    left: 0,
    top: 0,
    width: 282,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    height: 20,
    top: 18,
    position: "absolute",
  },
  cancelLayout: {
    height: 24,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.ubuntuLight,
    fontWeight: "300",
    color: Color.white,
    position: "absolute",
  },
  text2Position: {
    top: 68,
    position: "absolute",
  },
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
    textAlign: "left",
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
  novocartoChild: {
    height: 56,
  },
  adicionarCarto: {
    fontSize: FontSize.size_lg,
    letterSpacing: -1.3,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    left: 28,
    top: 16,
  },
  novocartoItem: {
    left: 242,
    width: 20,
  },
  text: {
    left: 246,
    fontSize: FontSize.size_xl,
    letterSpacing: -1.4,
    color: Color.lime,
    top: 15,
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    textAlign: "left",
  },
  novocarto: {
    top: 566,
    height: 56,
  },
  image29Icon: {
    width: 36,
    left: 28,
  },
  mastercard: {
    top: 498,
    height: 56,
  },
  image27Icon: {
    width: 41,
    height: 23,
    left: 25,
    top: 16,
    position: "absolute",
  },
  nubank: {
    top: 430,
    height: 56,
  },
  image28Icon: {
    width: 58,
    left: 25,
    top: 15,
  },
  hipercard: {
    top: 362,
    height: 56,
  },
  vectorIcon: {
    top: -1,
    left: -19,
    width: 318,
    height: 210,
    position: "absolute",
  },
  visaChild: {
    height: 154,
  },
  text1: {
    top: 104,
    left: 84,
    fontSize: FontSize.size_smi,
    letterSpacing: -0.9,
  },
  alfredoSilva: {
    top: 119,
    fontSize: FontSize.size_mini,
    letterSpacing: -1,
    left: 25,
  },
  text2: {
    fontSize: FontSize.size_4xl,
    letterSpacing: -1.6,
    fontFamily: FontFamily.ubuntuLight,
    fontWeight: "300",
    top: 68,
    left: 25,
    textAlign: "left",
    color: Color.white,
  },
  image24Icon: {
    width: 49,
    left: 25,
  },
  image25Icon: {
    top: 42,
    width: 26,
    height: 26,
    left: 28,
    position: "absolute",
  },
  visa: {
    top: 169,
    height: 169,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cancel: {
    left: 286,
    top: 178,
    width: 24,
  },
  botovoltar: {
    left: 16,
    width: 43,
    height: 43,
  },
  cartes: {
    top: 83,
    left: 144,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.5,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_600,
  },
  text3: {
    left: 301,
  },
  vectorIcon1: {
    width: "5.23%",
    right: "20.35%",
    left: "74.42%",
  },
  vectorIcon2: {
    width: "4.36%",
    right: "14.24%",
    left: "81.4%",
  },
  chargingBatteryIcon: {
    left: 325,
    width: 19,
    top: 0,
    height: 19,
  },
  text4: {
    left: 0,
    color: Color.black,
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
  },
  barranotificaes: {
    top: 7,
    left: 11,
    width: 344,
  },
  telacartovisa: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaCartoVISA;
