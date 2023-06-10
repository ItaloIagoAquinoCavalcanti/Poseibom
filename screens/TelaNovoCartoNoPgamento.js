import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TelaNovoCartoNoPgamento = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telanovocartonopgamento}>
      <Pressable
        style={styles.avanar}
        onPress={() => navigation.navigate("CartoTilpiaViva")}
      >
        <View style={styles.avanarChild} />
        <Text style={styles.avanar1}>avançar</Text>
      </Pressable>
      <View style={[styles.apelido, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>
          por exemplo, conta conjunta ou cartão corporat.
        </Text>
      </View>
      <Text style={[styles.apelidoOpcional, styles.pas1Typo]}>
        Apelido (opcional)
      </Text>
      <View style={[styles.pas, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Text style={[styles.brasil, styles.brasilTypo]}>Brasil</Text>
        <Image
          style={[styles.image36Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-36.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Text style={[styles.pas1, styles.pas1Typo]}>País</Text>
      <View style={[styles.cvv, styles.cvvLayout]}>
        <View style={[styles.cvvChild, styles.cvvLayout]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>123</Text>
        <Image
          style={[styles.helpIcon, styles.helpIconPosition]}
          contentFit="cover"
          source={require("../assets/help.png")}
        />
      </View>
      <Text style={[styles.cvv1, styles.cvv1Typo]}>CVV</Text>
      <View style={[styles.datadevenc, styles.cvvLayout]}>
        <View style={[styles.cvvChild, styles.cvvLayout]} />
        <Text style={[styles.porExemploConta, styles.brasilTypo]}>MM/AA</Text>
        <Image
          style={[styles.helpIcon, styles.helpIconPosition]}
          contentFit="cover"
          source={require("../assets/help.png")}
        />
      </View>
      <Text style={[styles.dataDeVenc, styles.cvv1Typo]}>Data de venc.</Text>
      <View style={[styles.nmerodocarto, styles.apelidoLayout]}>
        <View style={[styles.apelidoChild, styles.childPosition]} />
        <Image
          style={[styles.debitCardIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/debit-card.png")}
        />
      </View>
      <Text style={[styles.nmeroDoCarto, styles.pas1Typo]}>
        Número do cartão
      </Text>
      <Pressable
        style={styles.botovoltar}
        onPress={() => navigation.navigate("CartoTilpiaViva")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botovoltar2.png")}
        />
      </Pressable>
      <Text style={styles.novoCarto}>Novo Cartão</Text>
      <View style={[styles.barranotificaes, styles.helpIconPosition]}>
        <Text style={[styles.text1, styles.textTypo]}>100%</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.chargingBatteryIcon}
          contentFit="cover"
          source={require("../assets/charging-battery.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>17:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  apelidoLayout: {
    height: 34,
    width: 285,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  brasilTypo: {
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1,
    fontSize: FontSize.size_sm,
    top: 9,
    textAlign: "left",
    position: "absolute",
  },
  pas1Typo: {
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  iconLayout: {
    width: 26,
    position: "absolute",
  },
  cvvLayout: {
    width: 134,
    height: 34,
    position: "absolute",
  },
  helpIconPosition: {
    top: 7,
    position: "absolute",
  },
  cvv1Typo: {
    top: 218,
    color: Color.black,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
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
  vectorIconPosition: {
    bottom: "10.53%",
    top: "10.53%",
    height: "78.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  avanarChild: {
    backgroundColor: Color.cornflowerblue_100,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
    height: 47,
    width: 285,
    position: "absolute",
  },
  avanar1: {
    left: 106,
    fontSize: 24,
    letterSpacing: -1.7,
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.white,
    textAlign: "left",
    top: 8,
    position: "absolute",
  },
  avanar: {
    top: 619,
    left: 38,
    height: 47,
    width: 285,
    position: "absolute",
  },
  apelidoChild: {
    height: 34,
    width: 285,
    position: "absolute",
  },
  porExemploConta: {
    color: Color.darkgray,
    left: 11,
  },
  apelido: {
    top: 436,
    left: 35,
  },
  apelidoOpcional: {
    top: 404,
    left: 35,
    textAlign: "left",
  },
  brasil: {
    left: 53,
    color: Color.gray_500,
  },
  image36Icon: {
    height: 19,
    left: 11,
    top: 8,
  },
  vectorIcon: {
    height: "26.47%",
    width: "4.91%",
    top: "38.24%",
    right: "5.61%",
    bottom: "35.29%",
    left: "89.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pas: {
    top: 343,
    left: 35,
  },
  pas1: {
    top: 311,
    left: 35,
    textAlign: "left",
  },
  cvvChild: {
    backgroundColor: Color.gainsboro_100,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  helpIcon: {
    left: 104,
    width: 20,
    height: 20,
  },
  cvv: {
    left: 186,
    top: 250,
    width: 134,
  },
  cvv1: {
    left: 186,
  },
  datadevenc: {
    top: 250,
    width: 134,
    left: 35,
  },
  dataDeVenc: {
    left: 35,
  },
  debitCardIcon: {
    top: 4,
    left: 8,
    height: 26,
  },
  nmerodocarto: {
    top: 161,
    left: 35,
  },
  nmeroDoCarto: {
    top: 129,
    left: 37,
    textAlign: "center",
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
  novoCarto: {
    top: 71,
    left: 124,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.5,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_600,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
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
    height: 19,
    top: 0,
    position: "absolute",
  },
  text2: {
    left: 0,
    fontFamily: FontFamily.gravityRegular,
    letterSpacing: -0.8,
    fontSize: FontSize.size_2xs,
    top: 6,
  },
  barranotificaes: {
    width: 344,
    height: 19,
    left: 11,
  },
  telanovocartonopgamento: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaNovoCartoNoPgamento;
