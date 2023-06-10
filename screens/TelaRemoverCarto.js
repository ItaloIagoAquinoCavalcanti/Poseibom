import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TelaRemoverCarto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaremovercarto}>
      <Image
        style={styles.botovoltarIcon}
        contentFit="cover"
        source={require("../assets/botovoltar.png")}
      />
      <Text style={styles.cartes}>Cartões</Text>
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
      <View style={[styles.novocarto, styles.novocartoLayout]}>
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#6d6d6d",
            "rgba(127, 127, 127, 0.67)",
            "rgba(168, 166, 163, 0.83)",
            "rgba(96, 96, 96, 0.65)",
          ]}
        />
        <Text style={[styles.adicionarCarto, styles.text2Typo]}>
          Adicionar cartão
        </Text>
        <Image
          style={[styles.novocartoItem, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Text style={[styles.text2, styles.text2Typo]}>+</Text>
      </View>
      <View style={[styles.mastercard, styles.novocartoLayout]}>
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#ea7000",
            "rgba(255, 148, 50, 0.67)",
            "rgba(248, 177, 112, 0.83)",
            "rgba(248, 161, 112, 0.65)",
          ]}
        />
        <Image
          style={[styles.image29Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-29.png")}
        />
      </View>
      <View style={[styles.nubank, styles.novocartoLayout]}>
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#7500ea",
            "rgba(153, 50, 255, 0.67)",
            "rgba(180, 112, 248, 0.83)",
            "rgba(188, 112, 248, 0.65)",
          ]}
        />
        <Image
          style={[styles.image27Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-27.png")}
        />
      </View>
      <View style={[styles.hipercard, styles.novocartoLayout]}>
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#ea0000",
            "rgba(255, 50, 50, 0.67)",
            "rgba(248, 112, 112, 0.83)",
            "rgba(248, 112, 112, 0.65)",
          ]}
        />
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.65, 0.85, 1]}
          colors={[
            "#ea0000",
            "rgba(255, 50, 50, 0.67)",
            "rgba(248, 112, 112, 0.83)",
            "rgba(248, 112, 112, 0.65)",
          ]}
        />
        <Image
          style={[styles.image28Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-28.png")}
        />
      </View>
      <View style={[styles.visa, styles.novocartoLayout]}>
        <LinearGradient
          style={[styles.novocartoChild, styles.novocartoLayout]}
          locations={[0.05, 0.44, 0.71, 1]}
          colors={[
            "#f87099",
            "rgba(255, 50, 112, 0.67)",
            "rgba(248, 112, 153, 0.83)",
            "rgba(248, 112, 153, 0.65)",
          ]}
        />
        <Image
          style={[styles.image24Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-24.png")}
        />
      </View>
      <View style={styles.telaremovercartoChild} />
      <Pressable
        style={[styles.cancelar, styles.cancelarLayout]}
        onPress={() => navigation.navigate("TelaCartoVISA")}
      >
        <View style={[styles.cancelarChild, styles.childPosition]} />
        <Text style={[styles.cancelar1, styles.removerTypo]}>Cancelar</Text>
      </Pressable>
      <View style={[styles.remover, styles.cancelarLayout]}>
        <View style={styles.removerChild} />
        <Text style={[styles.remover1, styles.removerTypo]}>Remover</Text>
      </View>
      <View style={[styles.mensagemaviso, styles.mensagemavisoLayout]}>
        <View style={[styles.mensagemavisoChild, styles.mensagemavisoLayout]} />
        <Text style={[styles.desejaRemoverO, styles.removerTypo]}>
          Deseja remover o seu cartão da sua carteira?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
    color: Color.black,
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
  novocartoLayout: {
    height: 56,
    width: 282,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    top: 18,
  },
  iconPosition: {
    left: 25,
    position: "absolute",
  },
  cancelarLayout: {
    height: 51,
    width: 135,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  removerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: -2,
    fontSize: FontSize.size_10xl,
    position: "absolute",
  },
  mensagemavisoLayout: {
    height: 119,
    width: 285,
    position: "absolute",
  },
  botovoltarIcon: {
    top: 68,
    left: 16,
    width: 43,
    height: 43,
    position: "absolute",
  },
  cartes: {
    top: 83,
    left: 144,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.5,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_600,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 301,
    color: Color.black,
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
    color: Color.black,
  },
  barranotificaes: {
    top: 7,
    left: 11,
    width: 344,
  },
  novocartoChild: {
    borderRadius: Border.br_lgi,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  adicionarCarto: {
    fontSize: FontSize.size_lg,
    letterSpacing: -1.3,
    color: Color.white,
    left: 28,
    top: 16,
  },
  novocartoItem: {
    left: 242,
    width: 20,
    position: "absolute",
  },
  text2: {
    left: 246,
    fontSize: FontSize.size_xl,
    letterSpacing: -1.4,
    color: Color.lime,
    top: 15,
  },
  novocarto: {
    top: 441,
    left: 39,
    width: 282,
  },
  image29Icon: {
    width: 36,
    left: 28,
    position: "absolute",
  },
  mastercard: {
    top: 373,
    left: 39,
    width: 282,
  },
  image27Icon: {
    width: 41,
    height: 23,
    top: 16,
  },
  nubank: {
    top: 305,
    left: 39,
    width: 282,
  },
  image28Icon: {
    width: 58,
    height: 24,
    top: 15,
  },
  hipercard: {
    top: 237,
    left: 39,
    width: 282,
  },
  image24Icon: {
    width: 49,
    height: 20,
    top: 18,
  },
  visa: {
    top: 169,
    left: 39,
    width: 282,
  },
  telaremovercartoChild: {
    backgroundColor: "rgba(0, 0, 0, 0.64)",
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  cancelarChild: {
    height: 51,
    width: 135,
    position: "absolute",
  },
  cancelar1: {
    left: 18,
    top: 9,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: -2,
    fontSize: FontSize.size_10xl,
    color: Color.black,
  },
  cancelar: {
    left: 37,
    top: 410,
    width: 135,
  },
  removerChild: {
    backgroundColor: "#fc5c5c",
    borderRadius: Border.br_xl,
    height: 51,
    width: 135,
    left: 0,
    top: 0,
    position: "absolute",
  },
  remover1: {
    left: 15,
    top: 9,
    fontFamily: FontFamily.ubuntuRegular,
    letterSpacing: -2,
    fontSize: FontSize.size_10xl,
    color: Color.white,
  },
  remover: {
    left: 186,
    top: 410,
    width: 135,
  },
  mensagemavisoChild: {
    backgroundColor: Color.gainsboro_200,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  desejaRemoverO: {
    top: 10,
    left: 24,
    width: 236,
    color: Color.black,
  },
  mensagemaviso: {
    top: 283,
    left: 37,
  },
  telaremovercarto: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default TelaRemoverCarto;
