import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase";
import { getProfile } from "../firebase-helpers/profile/getProfile";
import { AuthContext } from "../context/AuthContext";

const TelaPerfil = () => {
  const [profile, setProfile] = React.useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  })
  const navigation = useNavigation();
  const { handleSignOut } = React.useContext(AuthContext);

  React.useEffect(() => {
    const subscriber = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user?.uid) {
        const fetchedProfile = await getProfile(user.uid);
        if (fetchedProfile) {
          setProfile({
            name: fetchedProfile?.name,
            phoneNumber: fetchedProfile?.number,
            email: fetchedProfile?.email,
            password: "******",
          });
        }
      }
    })
    return () => subscriber()
  }, [])

  return (
    <View style={styles.telaperfil}>
      <Image
        style={styles.perfilIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Pressable
        style={[styles.histrico, styles.homePosition]}
        onPress={() => navigation.navigate("TelaHistrico")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/histrico.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("TelaHome")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>



      <View style={styles.informaesusurio}>
        <View style={styles.rowData}>
          <Text style={styles.nomeTypo}>Nome</Text>
          <Text style={styles.textValue}>{profile?.name}</Text>
        </View>
        <View style={styles.rowData}>
          <Text style={styles.nomeTypo}>Número de telefone</Text>
          <Text style={styles.textValue}>{profile?.phoneNumber}</Text>
        </View>
        <View style={styles.rowData}>
          <Text style={styles.nomeTypo}>E-mail</Text>
          <Text style={styles.textValue}>{profile?.email}</Text>
        </View>
        <View style={styles.rowData}>
          <Text style={styles.nomeTypo}>Senha</Text>
          <Text style={styles.textValue}>{profile?.password}</Text>
        </View>
        <View>
          <Pressable
            style={styles.sair}
            onPress={handleSignOut}
          >
            <Text style={styles.nomeTypo}>Sair</Text>
          </Pressable>
        </View>
      </View>
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
      <Text style={styles.contaPoseibom}>Conta Poseibom</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    top: 795,
    height: 36,
    width: 36,
    position: "absolute",
  },
  childLayout: {
    height: 2,
    backgroundColor: Color.gainsboro_200,
    width: 273,
    position: "absolute",
  },
  nomeTypo: {
    color: Color.black,
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  textValue: {
    letterSpacing: -1.2,
    fontSize: FontSize.size_mid,
    color: Color.gray_400,
    left: 15,
    marginBottom: 6,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
  },
  image22IconLayout: {
    width: 202,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.gravityRegular,
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
  perfilIcon: {
    top: 795,
    left: 310,
    height: 36,
    width: 36,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
    left: 22,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  histrico: {
    left: 162,
  },
  home: {
    left: 54,
  },
  telaperfilChild: {
    top: 670,
    left: 37,
  },
  cartesAdicionados1: {
    textAlign: "left",
  },
  cartesAdicionados: {
    width: '100%',
    alignItems: "center",
    marginVertical: 20
  },
  sair: {
    width: '100%',
    alignItems: "center",
  },
  informaesusurioChild: {
    top: 255,
    left: 0,
  },
  text: {
    top: 221,
    color: Color.gray_400,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.redHatDisplayRegular,
    letterSpacing: -1.4,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  senha: {
    top: 201,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  informaesusurioItem: {
    top: 192,
    left: 0,
  },
  alfredosilvagmailcom: {
    top: 164,
  },
  eMail: {
    top: 134,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  informaesusurioInner: {
    top: 125,
    left: 0,
  },
  text1: {
    top: 97,
  },
  nmeroDeTelefone: {
    top: 67,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    top: 58,
    left: 0,
  },
  alfredoSilva: {
    top: 30,
  },
  nome: {
    top: 0,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  informaesusurio: {
    top: 350,
    height: 256,
    width: '80%',
    left: '10%',
    position: "absolute",
    marginBottom: 10,
  },
  image22Icon: {
    height: 202,
    top: 0,
    left: 30,
  },
  fotodeperfil: {
    top: 116,
    left: 79,
    height: 209,
  },
  editarfoto: {
    left: 240,
    top: 264,
    width: 69,
    height: 69,
    position: "absolute",
  },
  botovoltar: {
    left: 16,
    top: 60,
    width: 43,
    height: 43,
    position: "absolute",
  },
  contaPoseibom: {
    top: 65,
    left: 135,
    fontSize: FontSize.size_3xl,
    letterSpacing: -1.5,
    fontWeight: "600",
    fontFamily: FontFamily.redHatDisplaySemibold,
    color: Color.gray_600,
    textAlign: "left",
    position: "absolute",
  },

  telaperfil: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
  rowData: {
    borderBottomWidth: 2,
    borderBottomColor: Color.gainsboro_200,
    marginBottom: 20,
  }
});

export default TelaPerfil;
