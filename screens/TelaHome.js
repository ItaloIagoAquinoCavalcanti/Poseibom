import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { products } from "../data/products";

const TelaHome = () => {
  const navigation = useNavigation();

  const handleOpenProduct = (id) => {
    navigation.navigate('Produto', {
      product: products.find(prod => prod.id === id)
    })
  }

  return (
    <View style={styles.telahome}>
      <Pressable
        style={[styles.perfil, styles.perfilLayout]}
        onPress={() => navigation.navigate("TelaPerfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/perfil.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.histrico, styles.perfilLayout]}
        onPress={() => navigation.navigate("TelaHistrico")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/histrico.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeIcon, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/home1.png")}
      />



      <Pressable
        style={[styles.fildetilpiafresca, styles.tilpiavivaLayout]}
        onPress={() => handleOpenProduct(3)}
      >
        <Text style={[styles.porKg, styles.porTypo]}>Por Kg</Text>
        <Text style={[styles.r1899, styles.r1899Typo]}>R$ 19,00</Text>
        <Text style={[styles.filDeTilpia, styles.tilpiaClr]}>
          Filé de Tilápia Fresca
        </Text>
        <Image
          style={styles.imgtilpiafrescaIcon}
          contentFit="cover"
          source={require("../assets/imgtilpiafresca.png")}
        />
      </Pressable>
      <View style={[styles.telahomeChild, styles.telahomeLayout]} />
      <Pressable
        style={[styles.fildetilpiacongelada, styles.tilpiavivaLayout]}
        onPress={() => handleOpenProduct(2)}
      >
        <Text style={[styles.porKg, styles.porTypo]}>Por Kg</Text>
        <Text style={[styles.r1899, styles.r1899Typo]}>R$ 25,00</Text>
        <Text style={[styles.filDeTilpia, styles.tilpiaClr]}>
          Filé de Tilápia Congelada
        </Text>
        <Image
          style={styles.imgtilpiafrescaIcon}
          contentFit="cover"
          source={require("../assets/imgtilapiacongelada.png")}
        />
      </Pressable>
      <View style={[styles.telahomeItem, styles.telahomeLayout]} />
      <Pressable
        style={[styles.tilpiaviva, styles.tilpiavivaLayout]}
        onPress={() => handleOpenProduct(1)}
      >
        <Text style={[styles.tilpiaViva, styles.tilpiaClr]}>Tilápia Viva</Text>
        <Text style={[styles.porKg2, styles.porTypo]}>Por Kg</Text>
        <Text style={[styles.r1199, styles.r1899Typo]}>R$ 12,00</Text>
        <Image
          style={styles.imgtilpiafrescaIcon}
          contentFit="cover"
          source={require("../assets/imgtilapiaviva1.png")}
        />
      </Pressable>


      <View style={[styles.telahomeInner, styles.telahomeLayout]} />
      <Text style={[styles.produtos, styles.tilpiaClr]}>Produtos</Text>
      <Pressable
        style={styles.notificaes}
        onPress={() => navigation.navigate('TelaNotificaes')}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/notificaes.png")}
        />
      </Pressable>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  perfilLayout: {
    height: 36,
    width: 36,
    bottom: 20,
    position: "absolute",
  },
  tilpiavivaLayout: {
    height: 88,
    width: 295,
    left: 50,
    position: "absolute",
  },
  porTypo: {
    textAlign: "left",
    color: Color.gray_600,
    letterSpacing: -1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.redHatDisplayRegular,
    left: 0,
    position: "absolute",
  },
  r1899Typo: {
    color: Color.green,
    letterSpacing: -1.5,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    left: 0,
    position: "absolute",
  },
  tilpiaClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  telahomeLayout: {
    height: 2,
    width: 306,
    backgroundColor: Color.gainsboro_300,
    left: 50,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  perfil: {
    left: 310,
  },
  histrico: {
    left: 185,
  },
  homeIcon: {
    left: 54,
  },
  porKg: {
    top: 24,
  },
  r1899: {
    top: 54,
  },
  filDeTilpia: {
    fontSize: FontSize.size_base,
    letterSpacing: -1.1,
    top: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    color: Color.black,
    left: 0,
  },
  imgtilpiafrescaIcon: {
    top: 2,
    left: 185,
    borderRadius: Border.br_6xs,
    width: 124,
    height: 86,
    position: "absolute",
  },
  fildetilpiafresca: {
    top: 476,
  },
  telahomeChild: {
    top: 454,
  },
  fildetilpiacongelada: {
    top: 344,
  },
  telahomeItem: {
    top: 322,
  },
  tilpiaViva: {
    fontSize: FontSize.size_xl,
    letterSpacing: -1.4,
    top: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    color: Color.black,
    left: 0,
  },
  porKg2: {
    top: 29,
  },
  r1199: {
    top: 59,
  },
  tilpiaviva: {
    top: 212,
  },
  telahomeInner: {
    top: 190,
  },
  produtos: {
    top: 140,
    fontSize: 31,
    letterSpacing: -2.2,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.black,
    left: 50,
  },
  notificaes: {
    left: 355,
    top: 44,
    width: 24,
    height: 24,
    position: "absolute",
  },
  logoIcon: {
    top: 42,
    left: 180,
    width: 54,
    height: 54,
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
  text1: {
    left: 0,
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
  telahome: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaHome;
