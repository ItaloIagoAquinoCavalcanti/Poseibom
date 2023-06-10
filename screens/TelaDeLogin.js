import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, Pressable, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { AuthContext } from "../context/AuthContext";

const TelaDeLogin = () => {
  const { handleSignIn } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    handleSignIn(email, senha);
  } 

  return (
    <LinearGradient
      style={styles.teladelogin}
      locations={[0.25, 1]}
      colors={["#4e94e7", "rgba(74, 116, 165, 0.67)"]}
    >
      <Pressable
        style={styles.cadastrar}
        onPress={() => navigation.navigate("TelaDeCadastro")}
      >
        <Text style={[styles.cadastrar1, styles.ouTypo]}>Cadastrar</Text>
      </Pressable>
      <Text style={[styles.noTenhoUma, styles.ouTypo]}>
        Não tenho uma conta
      </Text>
      <View style={[styles.teladeloginChild, styles.teladeloginLayout]} />
      <Text style={[styles.ou, styles.ouTypo]}>ou</Text>
      <View style={[styles.teladeloginItem, styles.teladeloginLayout]} />
      <Pressable
        style={[styles.esqueceuASenhaContainer, styles.entrarPosition]}
        onPress={() => navigation.navigate("EsqueciaSenha")}
      >
        <Text style={[styles.esqueceuASenha, styles.entrarFlexBox]}>
          Esqueceu a senha?
        </Text>
      </Pressable>
      <Pressable
        style={[styles.botoentrar, styles.senhaLayout]}
        onPress={handleLogin}
      >
        <View style={[styles.botoentrarChild, styles.botoentrarLayout]} />
        <View style={[styles.botoentrarItem, styles.botoentrarLayout]} />
        <Text style={[styles.entrar, styles.entrarFlexBox]}>ENTRAR</Text>
      </Pressable>
      <View style={[styles.senha, styles.senhaLayout]}>
        <View style={[styles.senhaChild, styles.senhaLayout]} />
        <TextInput
          style={styles.input1}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity
          style={styles.mostrarsenhaIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons name={showPassword ? "eye-off" : "eye"} color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
      <View style={[styles.email, styles.senhaLayout]}>
        <View style={[styles.senhaChild, styles.senhaLayout]} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Text style={[styles.olComeceCom, styles.senha1Typo]}>
        Olá, comece com seu login
      </Text>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo3.png")}
      />
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  ouTypo: {
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xl_8,
  },
  input: {
    fontSize: 23,
    left: 22,
    top: 15,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
    width: '85%',
  },
  input1: {
    fontSize: 23,
    left: 22,
    top: 15,
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
    width: '75%',
  },
  teladeloginLayout: {
    height: 4,
    width: 117,
    backgroundColor: Color.gray_800,
    borderRadius: Border.br_4xs,
    top: 608,
    position: "absolute",
  },
  entrarPosition: {
    left: 99,
    position: "absolute",
  },
  entrarFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  senhaLayout: {
    height: 61,
    width: 298,
    position: "absolute",
  },
  botoentrarLayout: {
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  senha1Typo: {
    fontSize: 23,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
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
  cadastrar1: {
    color: Color.lightskyblue_100,
  },
  cadastrar: {
    left: 147,
    top: 705,
    position: "absolute",
  },
  noTenhoUma: {
    top: 660,
    left: 87,
    color: Color.white,
    position: "absolute",
  },
  teladeloginChild: {
    left: 240,
  },
  ou: {
    top: 595,
    left: 185,
    color: Color.white,
    position: "absolute",
  },
  teladeloginItem: {
    left: 40,
  },
  esqueceuASenha: {
    fontSize: 14,
    fontFamily: FontFamily.redHatDisplayRegular,
    left: 35,
  },
  esqueceuASenhaContainer: {
    top: 540,
  },
  botoentrarItem: {
    backgroundColor: Color.navy,
    height: 52,
    left: 95,
    top: 0,
    width: 200,
    borderRadius: Border.br_lgi,
  },
  entrar: {
    top: 10,
    fontSize: 21,
    fontWeight: "700",
    fontFamily: FontFamily.redHatDisplayBold,
    left: 148,
    position: "absolute",
  },
  botoentrar: {
    top: 460,
    left: 2,
  },
  senhaChild: {
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#0c3e78",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  senha1: {
    left: 22,
    color: Color.gray_700,
    top: 15,
  },
  mostrarsenhaIcon: {
    left: 260,
    top: 20,
    position: "absolute",
  },
  senha: {
    top: 370,
    left: 50,
  },
  email: {
    top: 300,
    left: 50,
  },
  olComeceCom: {
    top: 210,
    left: 50,
    color: Color.white,
  },
  logoIcon: {
    top: 100,
    left: 57,
    width: 290,
    height: 48,
    position: "absolute",
  },
  teladelogin: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default TelaDeLogin;
