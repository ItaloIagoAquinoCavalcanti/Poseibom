import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { listPurchases } from "../firebase-helpers/purchases/listPurchases";

const SCREEN = Dimensions.get('screen')

const TelaHistrico = () => {
  const navigation = useNavigation();
  const [compras, setCompras] = React.useState([]);

  const productImage = (id) => {
    if (Number(id) === 1) {
      return require("../assets/imgtilapiaviva.png");
    }
    if (Number(id) === 2) {
      return require("../assets/image-62.png");
    }
    if (Number(id) === 3) {
      return require("../assets/image-5.png");
    }
    return require("../assets/imgtilapiaviva.png");
  }

  React.useEffect(() => {
    async function fetchCompras() {
      const newStateCompras = await listPurchases()

      if (newStateCompras.length > 0) {
        setCompras(newStateCompras);
      }

    }

    if (compras.length === 0) {
      fetchCompras();
    }
  }, [])

  return (
    <View style={styles.telahistrico}>
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
      <Text style={styles.meusPedidos}>MEUS PEDIDOS</Text>



      {compras?.length === 0 && <>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Image
          style={styles.tudoVazioPorAqui}
          contentFit="cover"
          source={require("../assets/tudo-vazio-por-aqui.png")}
        />
        <Image
          style={styles.vocAindaNoComprouNenhum}
          contentFit="cover"
          source={require("../assets/voc-ainda-no-comprou-nenhum-produto-quando-comprar-algo-aparecer-aqui.png")}
        />

        <Image
          style={styles.image23Icon}
          contentFit="cover"
          source={require("../assets/image-23.png")}
        />
      </>
      }
      <View style={styles.content}>
        <FlatList
          data={compras}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => (
            <View key={item?.id} style={styles.card}>
              <Image
                source={productImage(item?.productId)}
                style={{ width: 100, height: 100, borderRadius: 10 }}
                contentFit="cover"
              />
              <View style={{ alignItems: 'flex-end', }}>
                <Text style={{ color: Color.gray_500, fontSize: 20 }}>
                  {item?.productName}
                </Text>
                <Text style={{ color: Color.gray_500, fontSize: 14 }}>
                  {item?.paymentMethod}
                </Text>
                <Text style={{ color: Color.gray_500, fontSize: 24 }}>
                  R$ {item?.amountPaid}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      {/* Bottom tab */}


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

      <Image
        style={[styles.histricoIcon, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/histrico1.png")}
      />

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
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 36,
    width: 36,
    bottom: 20,
    position: "absolute",
  },
  barranotificaesLayout: {
    height: 19,
    position: "absolute",
  },
  content: {
    position: 'absolute',
    top: 110, 
    width: '100%',
    padding: 20,
    height: SCREEN.height - 180
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 12,
    borderBottomColor: Color.gray_100,
    borderBottomWidth: 1
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
  icon: {
    height: "100%",
    width: "100%",
  },
  perfil: {
    left: 310,
  },
  histricoIcon: {
    left: 185,
  },
  home: {
    left: 54,
  },
  unionIcon: {
    top: 287,
    left: 98,
    width: 152,
    height: 113,
    position: "absolute",
  },
  tudoVazioPorAqui: {
    top: 423,
    left: 102,
    width: 148,
    height: 18,
    position: "absolute",
  },
  vocAindaNoComprouNenhum: {
    top: 451,
    left: 67,
    width: 226,
    height: 51,
    position: "absolute",
  },
  botovoltar: {
    left: 16,
    top: 68,
    width: 43,
    height: 43,
    position: "absolute",
  },
  meusPedidos: {
    top: 73,
    left: 119,
    fontSize: FontSize.size_lg,
    letterSpacing: -1.3,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_300,
    textAlign: "left",
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
  image23Icon: {
    top: 276,
    left: 118,
    width: 124,
    height: 124,
    position: "absolute",
  },
  telahistrico: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaHistrico;
