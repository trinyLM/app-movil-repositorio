import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function About() {
  return (
    <>
      <ScrollView>
      <View style={{ backgroundColor: "#FFCC00", flex: 1, padding: 18 }}></View>
        <View style={styles.containerTI}>
          <Text style={styles.titulo}>ACERCA DE...</Text>
        </View>
        <View style={styles.containerSub}>
          <Text styles={styles.subTitle}>

          Bienvenido al repositorio institucional del tecnológico Superior de
            Zongolica con sede en Nogales Veracruz.
            
          </Text>
        </View>
        <View style={styles.containerImg}>
          <Image
            style={styles.img}
            source={require('../../assets/ITSZ/LOGO.png')}></Image>
        </View>
        <View style={styles.acerca}>
          <Text>
            El Instituto Tecnológico Superior de Zongolica ahora cuenta con una
            aplicación móvil en la cual los estudiantes podrán consultarla
            información de tesis y proyectos de residencias profesionales,
            elaboradas por alumnos del instituto ITSZ. DERECHOS DE AUTOR: IVÁN
            MAYAHUA MAYAHUA I.S.C.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  titulo: {
    color: '#000',
    fontSize: 45,
    marginTop: 50,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    resizeMode: 'contain',
    marginLeft: 80,
    marginRight: 70,
    marginBottom: 50,
    marginTop: 85,
    alignContent: 'center',
  },
  subTitle: {
    color: '#fff',
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 80,
    fontFamily: '',
  },
  containerSub: {
    marginLeft: 70,
    marginRight: 70,
  },
  acerca: {
    marginLeft: 80,
    marginRight: 70,
  },
  containerTI: {
    marginLeft: 10,
    marginRight: 10,
  },
});
