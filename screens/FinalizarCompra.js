import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { createPurchase } from "../firebase-helpers/purchases/createPurchase";

export const FinalizarCompra = () => {
  const [selectedMethod, setSelectedMethod] = React.useState('');
  const navigation = useNavigation();
  const route = useRoute()
  const params = route.params

  const quantidade = params.quantidade;
  const valorProduto = params.valorProduto;
  const valorTotal = (valorProduto * quantidade).toFixed(2);

  const product = params.product;

  async function handleComprar() {
    createPurchase({
      product,
      amount: quantidade,
      paymentMethod: selectedMethod,
      totalPayment: valorTotal
    }
    )
    navigation.navigate("QrCode", {
      product,
      amount: quantidade,
      totalPayment: valorTotal
    })
  }

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/botovoltar.png")}
          />
        </Pressable>

        <Text style={[styles.title]}>
          Finalizar Compra
        </Text>
      </View>

      <Text style={styles.subtitle}>Produto</Text>


      <View style={styles.cardProduct}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoText}>
            {product?.name}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.cardInfoText}>x {quantidade}</Text>
            <Text style={styles.cardInfoText}>R$ {valorProduto}</Text>
          </View>
        </View>

        <Image
          style={styles.productImage}
          contentFit="cover"
          source={productImage()}
        />
      </View>

      <Text style={styles.subtitle}>
        Metódo de Pagamento
      </Text>

      <View style={styles.methods}>
        <Pressable style={[styles.method, selectedMethod === 'pix' ? styles.selected : {}]} onPress={() => setSelectedMethod('pix')}>
          <Image
            style={{ width: 20, height: 20 }}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
          <Text style={styles.paymentMethodText}>Pix</Text>
        </Pressable>

      </View>


      <View style={styles.footer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.totalText, { textAlign: "left", }]}>Total:</Text>
          <Text style={[styles.totalText, { textAlign: "right", }]}>R$ {valorTotal}</Text>
        </View>
        <Pressable
          disabled={!selectedMethod}
          style={[styles.buyButton, { backgroundColor: selectedMethod ? Color.cornflowerblue_200 : Color.lightskyblue_100 }]}
          onPress={handleComprar}
        >
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </Pressable>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    gap: 10
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    color: Color.black,
  },
  botaoVoltar: {
    width: 42,
    height: 42,
  },
  subtitle: {
    marginTop: 20,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.redHatDisplaySemibold,
    fontWeight: "600",
    color: Color.black,
  },
  cardProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    gap: 8
  },
  cardInfo: {
    flexGrow: 1,
  },
  cardInfoText: {
    fontFamily: FontFamily.redHatDisplayRegular,
    color: Color.black,
    fontSize: FontSize.size_3xl,
  },
  productImage: {
    borderRadius: 18,
    width: 95,
    height: 95,
  },
  methods: {
    width: '100%',
  },
  paymentMethodText: {
    fontFamily: FontFamily.redHatDisplaySemibold,
    fontWeight: "600",
    fontSize: 16,
    color: Color.black,
  },
  method: {
    width: '100%',
    marginVertical: 6,
    flexDirection: 'row',
    gap: 6,
    padding: 12,
    paddingLeft: 20,
    borderRadius: 12
  },
  selected: {
    backgroundColor: '#00000020'
  },
  totalText: {
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_4xl,
    width: '50%'
  },
  buyButton: {
    width: '100%',
    backgroundColor: Color.lightskyblue_200,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buyButtonText: {
    fontFamily: FontFamily.redHatDisplayExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_4xl,
    color: Color.white,
    textAlign: 'center'
  },
  footer: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 20,
    gap: 10
  }
});

