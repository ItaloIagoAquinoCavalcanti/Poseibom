import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize } from "../GlobalStyles";

const TelaTrocaDeFoto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telatrocadefoto}>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={[styles.histricoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/histrico.png")}
      />
      <Image
        style={[styles.homeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Text style={[styles.cartesAdicionados, styles.textFlexBox]}>
        Cartões adicionados
      </Text>
      <View
        style={[styles.telatrocadefotoChild, styles.telatrocadefotoLayout]}
      />
      <Text style={[styles.text, styles.textClr]}>........</Text>
      <Text style={[styles.senha, styles.textFlexBox]}>Senha</Text>
      <View
        style={[styles.telatrocadefotoItem, styles.telatrocadefotoLayout]}
      />
      <Text style={[styles.beijaminpintogmailcom, styles.text1Typo]}>
        beijaminpinto@gmail.com
      </Text>
      <Text style={[styles.eMail, styles.textFlexBox]}>E-mail</Text>
      <View
        style={[styles.telatrocadefotoInner, styles.telatrocadefotoLayout]}
      />
      <Text style={[styles.text1, styles.text1Typo]}>+55 81 912345678</Text>
      <Text style={[styles.nmeroDeTelefone, styles.textFlexBox]}>
        Número de telefone
      </Text>
      <View style={[styles.rectangleView, styles.telatrocadefotoLayout]} />
      <Text style={[styles.beijaminPinto, styles.text1Typo]}>
        Beijamin Pinto
      </Text>
      <Text style={[styles.nome, styles.textFlexBox]}>Nome</Text>
      <View style={[styles.fotodeperfil, styles.image22IconLayout]}>
        <Image
          style={styles.image21Icon}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
        <Image
          style={[styles.image22Icon, styles.image22IconLayout]}
          contentFit="cover"
          source={require("../assets/image-22.png")}
        />
      </View>
      <Image
        style={styles.editarfotoIcon}
        contentFit="cover"
        source={require("../assets/editarfoto.png")}
      />
      <Text style={[styles.contaPoseibom, styles.textFlexBox]}>
        Conta Poseibom
      </Text>
      <View style={styles.escolheafotoPosition}>
        <View style={[styles.escolheafotoChild, styles.escolheafotoPosition]} />
        <View style={styles.escolheafotoItem} />
        <Text style={[styles.escolheAFoto, styles.text1Typo]}>
          ESCOLHE A FOTO
        </Text>
      </View>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("TelaPerfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar.png")}
        />
      </Pressable>
      <View style={[styles.barranotificaes, styles.barranotificaesLayout]}>
        <Text style={[styles.text2, styles.textTypo]}>100%</Text>
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
        <Text style={[styles.text3, styles.textTypo]}>17:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 730,
    height: 36,
    width: 36,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  telatrocadefotoLayout: {
    height: 2,
    width: 273,
    backgroundColor: Color.gainsboro_200,
    left: 37,
    position: "absolute",
  },
  textClr: {
    color: Color.gray_400,
    left: 37,
  },
  text1Typo: {
    letterSpacing: -1.2,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  image22IconLayout: {
    width: 202,
    position: "absolute",
  },
  escolheafotoPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  textTypo: {
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
  userIcon: {
    top: 731,
    left: 271,
    height: 36,
    width: 36,
    position: "absolute",
  },
  histricoIcon: {
    left: 162,
  },
  homeIcon: {
    left: 54,
  },
  cartesAdicionados: {
    top: 663,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 37,
  },
  telatrocadefotoChild: {
    top: 648,
  },
  text: {
    top: 609,
    textAlign: "left",
    position: "absolute",
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
  },
  senha: {
    top: 589,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 37,
  },
  telatrocadefotoItem: {
    top: 574,
  },
  beijaminpintogmailcom: {
    top: 541,
    color: Color.gray_400,
    left: 37,
  },
  eMail: {
    top: 511,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 37,
  },
  telatrocadefotoInner: {
    top: 496,
  },
  text1: {
    top: 463,
    color: Color.gray_400,
    left: 37,
  },
  nmeroDeTelefone: {
    top: 433,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 37,
  },
  rectangleView: {
    top: 418,
  },
  beijaminPinto: {
    top: 385,
    color: Color.gray_400,
    left: 37,
  },
  nome: {
    top: 355,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 37,
  },
  image21Icon: {
    top: 17,
    left: -7,
    width: 216,
    height: 216,
    position: "absolute",
  },
  image22Icon: {
    height: 202,
    left: 0,
    top: 0,
  },
  fotodeperfil: {
    top: 134,
    left: 79,
    height: 209,
  },
  editarfotoIcon: {
    top: 282,
    left: 204,
    width: 69,
    height: 69,
    position: "absolute",
  },
  contaPoseibom: {
    top: 71,
    left: 107,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.5,
    fontWeight: "600",
    color: Color.gray_600,
  },
  escolheafotoChild: {
    backgroundColor: "rgba(91, 89, 89, 0.73)",
  },
  escolheafotoItem: {
    top: 216,
    left: 51,
    width: 258,
    height: 382,
    backgroundColor: Color.gainsboro_200,
    position: "absolute",
  },
  escolheAFoto: {
    top: 393,
    left: 113,
    color: Color.black,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botovoltar: {
    left: 16,
    top: 68,
    width: 43,
    height: 43,
    position: "absolute",
  },
  telatrocadefoto: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default TelaTrocaDeFoto;
