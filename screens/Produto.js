import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

export const Produto = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const params = route.params;
    const product = params?.product;

    const [total, setTotal] = useState(0);

    const addValue = (value) => {
        if (total + value >= 0) {
            setTotal(total + value);
        }
    };

    const calcularTotal = () => {
        return total * product?.price;
    };

    const handleAdicionar = () => {
        navigation.navigate("FinalizarCompra", {
            quantidade: total,
            valorProduto: product?.price,
            product
        })
    }

    const productImage = () => {
        if (product.id === 1) {
            return require("../assets/imgtilapiaviva.png");
        }
        if (product.id === 2) {
            return require("../assets/image-62.png");
        }
        if (product.id === 3) {
            return require("../assets/image-52.png");
        }

        return require("../assets/imgtilapiaviva.png");
    }


    return (
        <View style={styles.telatilpiafresca}>
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

            <Image
                style={styles.image5Icon}
                contentFit="cover"
                source={productImage()}
            />


            <View style={[styles.especificaes, styles.quantidadePosition]}>
                <Text style={[styles.filDeTilpia, styles.text1Typo]}>
                    {product?.name}
                </Text>
                <Text style={[styles.filDeTilpia, styles.text1Typo, {top: 100, letterSpacing: -1.3}]}>
                    R$ {product?.price}
                </Text>
                <Text
                    style={[styles.especificaesDoPeixe, styles.text1Typo]}
                >{`Especificações do peixe.... \n OBS: ....`}</Text>
            </View>



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
                style={[
                    styles.botoadicionar,
                    styles.botoadicionarLayout,
                    { backgroundColor: !total ? Color.lightskyblue_100 : Color.cornflowerblue_200 }
                ]}
                onPress={handleAdicionar}
                disabled={!total}
            >
                <View style={[styles.botoadicionarChild, styles.botoadicionarLayout]} />
                <Text style={[styles.adicionar, styles.r1899Typo]}>Adicionar</Text>
                <Text style={[styles.r1899, styles.r1899Typo]}>R$ {calcularTotal().toFixed(2)}</Text>
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
        fontSize: FontSize.size_14xl,
    },
    botoadicionarLayout: {
        height: 52,
        width: 207,
        position: "absolute",
    },
    r1899Typo: {
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
        left: 0,
    },
    text1: {
        left: 40,
        letterSpacing: -2.3,
        fontSize: FontSize.size_14xl,
    },
    text2: {
        left: 95,
        color: Color.cornflowerblue_200,
        textAlign: "left",
        fontFamily: FontFamily.redHatDisplayRegular,
        position: "absolute",
    },
    quantidade: {
        bottom: 20,
        width: 87,
        height: 45,
    },
    botoadicionarChild: {
        borderRadius: Border.br_6xs,
        left: 0,
        top: 0,
    },
    adicionar: {
        top: 12,
        left: 16,
    },
    r1899: {
        top: 12,
        left: 140,
    },
    botoadicionar: {
        bottom: 20,
        left: 180,
    },
    filDeTilpia: {
        letterSpacing: -2.3,
        fontSize: 28,
        left: 0,
        top: 10,
    },
    especificaesDoPeixe: {
        top: 180,
        fontSize: FontSize.size_xl,
        letterSpacing: -1.4,
        left: 0,
    },
    especificaes: {
        top: 294,
        width: 252,
        height: 142,
    },
    image5Icon: {
        top: 30,
        width: 420,
        height: 250,
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
        zIndex: 99
    },
    telatilpiafresca: {
        backgroundColor: Color.white,
        flex: 1,
        overflow: "hidden",
    },
});
