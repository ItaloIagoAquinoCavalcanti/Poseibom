import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { signup } from "../firebase-helpers/auth/signup";
import { AuthContext } from "../context/AuthContext";

const TelaDeCadastro = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const { handleSignUp } = React.useContext(AuthContext)

  const handleNavigateToLoginScreen = () => {
    navigation.navigate("TelaDeLogin");
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (!password || !confirmPassword || !email || !numero || !nome) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    handleSignUp({ email, password, name: nome, number: numero })
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <LinearGradient
        style={styles.teladecadastro}
        locations={[0.25, 1]}
        colors={["#4e94e7", "rgba(74, 116, 165, 0.67)"]}
      >
        <Pressable style={styles.entrar} onPress={handleNavigateToLoginScreen}>
          <Text style={styles.entrar1}>Entrar</Text>
        </Pressable>
        <Text style={styles.jPossuoUma}>Já possuo uma conta</Text>
        <Pressable
          style={[styles.botologin, styles.espaoemailLayout]}
          onPress={handleRegister}
        >
          <View style={[styles.botologinChild, styles.botologinLayout]} />
          <View style={[styles.botologinItem, styles.botologinLayout]} />
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </Pressable>
        <View style={[styles.espaoconfirmao, styles.espaoemailLayout]}>
          <View style={[styles.espaoconfirmaoChild, styles.espaoemailLayout]} />
          <TextInput
            style={styles.confirmeASenha1}
            placeholder="Confirme a Senha"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            style={styles.mostrarsenhaIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} color="#FFF" size={25} />
          </TouchableOpacity>
        </View>
        <View style={[styles.espaosenha, styles.espaoemailLayout]}>
          <View style={[styles.espaoconfirmaoChild, styles.espaoemailLayout]} />
          <TextInput
            style={styles.confirmeASenha1}
            placeholder="Crie uma Senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.mostrarsenhaIcon1}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} color="#FFF" size={25} />
          </TouchableOpacity>
        </View>
        <View style={[styles.espaoemail, styles.espaoemailLayout]}>
          <View style={[styles.espaoconfirmaoChild, styles.espaoemailLayout]} />
          <TextInput
            style={styles.confirmeASenha}
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={[styles.espaoemail1, styles.espaoemailLayout]}>
          <View style={[styles.espaoconfirmaoChild, styles.espaoemailLayout]} />
          <TextInput
            style={styles.confirmeASenha}
            placeholder="Número"
            value={numero}
            onChangeText={(text) => setNumero(text)}
          />
        </View>
        <View style={[styles.espaoemail2, styles.espaoemailLayout]}>
          <View style={[styles.espaoconfirmaoChild, styles.espaoemailLayout]} />
          <TextInput
            style={styles.confirmeASenha}
            placeholder="Nome Completo"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo2.png")}
        />
      </LinearGradient>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  espaoemailLayout: {
    height: 61,
    width: 298,
    position: "absolute",
  },
  botologinLayout: {
    borderRadius: Border.br_lgi,
    position: "absolute",
  },
  hideIconLayout: {
    height: 27,
    width: 27,
    position: "absolute",
  },
  barranotificaesLayout: {
    height: 19,
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
  entrar1: {
    color: Color.lightskyblue_100,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xl_8,
  },
  entrar: {
    left: 163,
    top: 750,
    position: "absolute",
  },
  jPossuoUma: {
    top: 715,
    left: 85,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xl_8,
    position: "absolute",
  },
  mostrarsenhaIcon: {
    left: 260,
    top: 20,
    position: "absolute",
  },
  mostrarsenhaIcon1: {
    left: 260,
    top: 20,
    position: "absolute",
  },
  botologinItem: {
    backgroundColor: Color.navy,
    height: 52,
    left: 0,
    top: 0,
    width: 298,
    borderRadius: Border.br_lgi,
  },
  cadastrar: {
    top: 8,
    left: 88,
    fontSize: 28,
    fontFamily: FontFamily.redHatDisplayRegular,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  botologin: {
    top: 595,
    left: 49,
    height: 61,
  },
  espaoconfirmaoChild: {
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#0c3e78",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  confirmeASenha1: {
    top: 15,
    left: 22,
    fontSize: 23,
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
    width: '78%',
  },
  confirmeASenha: {
    top: 15,
    left: 22,
    fontSize: 23,
    color: Color.gray_700,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    position: "absolute",
    width: '85%',
  },
  hideIcon: {
    top: 19,
    left: 254,
  },
  espaoconfirmao: {
    top: 505,
    left: 50,
    height: 61,
  },
  hideIcon1: {
    top: 17,
    left: 250,
  },
  espaosenha: {
    top: 432,
    left: 50,
    height: 61,
  },
  espaoemail: {
    top: 359,
    left: 50,
    height: 61,
  },
  espaoemail1: {
    top: 286,
    left: 50,
    height: 61,
  },
  espaoemail2: {
    top: 213,
    left: 50,
    height: 61,
  },
  logoIcon: {
    top: 100,
    left: 57,
    width: 290,
    height: 48,
    position: "absolute",
  },
  teladecadastro: {
    flex: 1,
    width: "100%",
    height: 900,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default TelaDeCadastro;
