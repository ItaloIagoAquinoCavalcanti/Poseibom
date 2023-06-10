import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TelaTilpiaCongelada = () => {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);

  const addValue = (value) => {
    if (total + value >= 0) {
      setTotal(total + value);
    }
  };

  const valorProduto = 24.99;

  const calcularTotal = () => {
    return total * valorProduto;
  };

  return (
    <View style={styles.telatilpiacongelada}>
      <View style={[styles.quantidade, styles.quantidadePosition]}>
        <Pressable style={styles.botao} onPress={() => addValue(-1)}>
          <Text style={[styles.text, styles.textTypo1]}>-</Text>
        </Pressable>
        <Text style={[styles.text1, styles.text1Typo]}>{total}</Text>
        <Pressable style={styles.botao} onPress={() => addValue(1)}>
          <Text style={[styles.text2, styles.textPosition]}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.botoadicionar, styles.botoadicionarLayout]}
        onPress={() => navigation.navigate("CompraTilpiaCongelada")}
      >
        <View style={[styles.botoadicionarChild, styles.botoadicionarLayout]} />
        <Text style={[styles.adicionar, styles.r2499Typo]}>Adicionar</Text>
        <Text style={[styles.r2499, styles.r2499Typo]}>R$ {calcularTotal().toFixed(2)}</Text>
      </Pressable>
      <View style={[styles.especificaes, styles.quantidadePosition]}>
        <Text style={[styles.filDeTilpia, styles.text1Typo]}>
          Filé de Tilápia Congelada
        </Text>
        <Text style={[styles.especificaesDoPeixe, styles.text1Typo]}>
          {"Especificações do peixe....\n\nOBS: ...."}
        </Text>
      </View>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-62.png")}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  quantidadePosition: {
    left: 24,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  textPosition: {
    top: 1,
    letterSpacing: -2.3,
    fontSize: FontSize.size_14xl,
  },
  botoadicionarLayout: {
    height: 52,
    width: 207,
    position: "absolute",
  },
  r2499Typo: {
    color: Color.white,
    letterSpacing: -1.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
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
  text: {
    color: Color.gray_100,
    letterSpacing: -2.3,
    fontSize: FontSize.size_14xl,
    left: 5,
    top: 0,
  },
  text1: {
    left: 45,
    top: 1,
    letterSpacing: -2.3,
    fontSize: FontSize.size_14xl,
  },
  text2: {
    left: 90,
    color: Color.cornflowerblue_200,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  quantidade: {
    top: 785,
    width: 87,
    height: 45,
  },
  botoadicionarChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.cornflowerblue_200,
    left: 0,
    top: 0,
  },
  adicionar: {
    top: 14,
    left: 16,
  },
  r2499: {
    top: 15,
    left: 133,
  },
  botoadicionar: {
    top: 780,
    left: 180,
  },
  filDeTilpia: {
    letterSpacing: -2.3,
    fontSize: FontSize.size_14xl,
    left: 0,
    top: 0,
  },
  especificaesDoPeixe: {
    top: 140,
    fontSize: FontSize.size_xl,
    letterSpacing: -1.4,
    left: 0,
  },
  especificaes: {
    top: 294,
    width: 309,
    height: 142,
  },
  image6Icon: {
    top: 36,
    width: 420,
    height: 238,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botovoltar: {
    top: 68,
    width: 43,
    height: 43,
    left: 16,
    position: "absolute",
  },
  telatilpiacongelada: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaTilpiaCongelada;
