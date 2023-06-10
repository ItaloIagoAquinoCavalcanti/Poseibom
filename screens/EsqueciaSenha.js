import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";
import { resetPassword } from "../firebase-helpers/auth/resetPassword";

const EsqueciaSenha = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');

  async function handleSendEmail() {

    const success = await resetPassword(email);

    if (success) {
      navigation.navigate("TelaDeLogin")
    }
  }

  return (
    <LinearGradient
      style={styles.esqueciasenha}
      locations={[0.25, 1]}
      colors={["#4e94e7", "rgba(74, 116, 165, 0.67)"]}
    >
      <Text style={[styles.esteSiteContainer, styles.textinhoLayout]}>
        <Text
          style={styles.esteSite}
        >{`Este site é protegido pelo hCaptcha e está sujeito a sua `}</Text>
        <Text style={styles.enviarTypo}>Política de Privacidade</Text>
        <Text style={styles.esteSite}>{` e `}</Text>
        <Text style={styles.enviarTypo}>Termos de Uso</Text>
        <Text style={styles.esteSite}>.</Text>
      </Text>
      <Pressable
        style={styles.enviaresqueceusenha}
        onPress={handleSendEmail}
      >
        <View style={[styles.enviaresqueceusenhaChild, styles.childLayout]} />
        <Text style={[styles.enviar, styles.enviarTypo]}>ENVIAR</Text>
      </Pressable>
      <View style={[styles.esqueciasenhaChild, styles.childLayout]} />
      <TextInput style={styles.input} placeholder="" value={email} onChangeText={setEmail} />
      <Text style={[styles.eMailLogin, styles.mailFlexBox]}>
        E-mail / Login
      </Text>
      <View style={[styles.textinho, styles.textinhoLayout]}>
        <Text style={[styles.esqueceuASenha, styles.mailFlexBox]}>
          Esqueceu a senha?
        </Text>
        <View style={[styles.textinhoChild, styles.textinhoLayout]} />
        <Text style={[styles.informeSeuEMail, styles.textinhoLayout]}>
          Informe seu e-mail ou login e enviaremos instruções para você criar
          sua senha.
        </Text>
      </View>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textinhoLayout: {
    width: 279,
    position: "absolute",
  },
  input: {
    fontSize: 23,
    left: 55,
    top: 345,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
    width: '85%',
  },
  childLayout: {
    borderRadius: Border.br_7xs,
    height: 48,
    width: 282,
    position: "absolute",
  },
  enviarTypo: {
    fontFamily: FontFamily.redHatDisplayBold,
    fontWeight: "700",
  },
  mailFlexBox: {
    textAlign: "left",
    color: Color.white,
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
  esteSite: {
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  esteSiteContainer: {
    top: 560,
    textAlign: "left",
    color: Color.white,
    fontSize: 17,
    left: 40,
  },
  enviaresqueceusenhaChild: {
    backgroundColor: Color.navy,
    left: 0,
    top: 0,
  },
  enviar: {
    top: 13,
    left: 108,
    textAlign: "left",
    color: Color.white,
    fontSize: 17,
    position: "absolute",
  },
  enviaresqueceusenha: {
    top: 447,
    height: 48,
    width: 282,
    left: 46,
    position: "absolute",
  },
  esqueciasenhaChild: {
    top: 338,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    left: 47,
    borderRadius: Border.br_7xs,
  },
  eMailLogin: {
    top: 305,
    fontSize: 19,
    fontFamily: FontFamily.redHatDisplayRegular,
    left: 50,
    position: "absolute",
  },
  esqueceuASenha: {
    fontSize: 25,
    left: 0,
    top: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
  },
  textinhoChild: {
    top: 47,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.gray_800,
    height: 2,
    left: 0,
  },
  informeSeuEMail: {
    top: 63,
    left: 0,
    fontFamily: FontFamily.redHatDisplayRegular,
    textAlign: "left",
    color: Color.white,
    fontSize: 17,
  },
  textinho: {
    top: 148,
    height: 129,
    left: 50,
  },
  logoIcon: {
    top: 73,
    left: 90,
    width: 222,
    height: 37,
    position: "absolute",
  },
  text1: {
    left: 301,
  },
  esqueciasenha: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default EsqueciaSenha;
