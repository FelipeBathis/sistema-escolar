import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 25,
      }}
    >
        
      <Image 
        style={Estilo.homelogo} 
        source={require('../assets/images/logo.png')} />
    
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <View style={{ height: 'auto' }}>
    
      <Text style={[Estilo.h2, { color: "blue" }]}>Página Inicial do Colégio Fênix!</Text>
      
      <Text style={Estilo.p}></Text>
      <Text style={Estilo.p}>Seja Bem vindo!</Text>
      <Text style={Estilo.p}>O Colégio Fênix dá boas vidas à você e deseja uma navegação tranquila.
      <Text style={Estilo.p}> Nesse site você encontrará toda o suporte, auxílio e esclarecimento de dúvidas que precisar.</Text> 
      </Text>
      <Pressable style={Estilo.botaoGo1}>
        <Link href="./pages/boletim">
          <Text style={Estilo.textLink}> Boletim 
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo2}>
        <Link href="./pages/calendario">
          <Text style={Estilo.textLink}>
            Calendário Anual
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo3}>
        <Link href="./pages/eventos">
          <Text style={Estilo.textLink}>
            Fique por Dentro 
          </Text>
        </Link>
      </Pressable>

      <Pressable style={Estilo.botaoGo4}>
        <Link href="./pages/contato">
          <Text style={Estilo.textLink}>
            Fale Conosco
          </Text>
        </Link>
      </Pressable>

      <Text style={Estilo.h3}></Text>
      
      <Text style={Estilo.p}>Há 20 anos, um sonho se transformou em realidade. O Colégio Fênix nasceu com uma missão clara: proporcionar uma educação transformadora, capaz de despertar o potencial de cada aluno, assim como a lendária que renasce das cinzas.</Text>
      <Text style={Estilo.p}>No início, éramos apenas um pequeno grupo de educadores com um grande sonho, um espaço simples, mas cheio de esperança. Mas, como a Fênix, com o tempo e a dedicação, crescemos, evoluímos</Text>
      <Text style={Estilo.p}>Hoje, duas décadas depois, o Colégio Fênix se consolida como uma referência em ensino e inovação. Nossos alunos não estão apenas preparados para enfrentar os desafios acadêmicos, mas também são incentivados a desenvolver valores humanos, criatividade e espírito crítico. Ao longo dos anos, formamos não apenas estudantes, mas cidadãos preparados para transformar o mundo.
</Text>
      <Text style={Estilo.p}></Text>
      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Estilo = StyleSheet.create({
  botaoGo1:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},
botaoGo2:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},
botaoGo3:{
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto"
},

botaoGo4:{
  backgroundColor: "black",
  padding: 10,
  borderRadius: 20,
  marginTop: 20,
  width: 150,
  justifyContent: "center",
  alignItems: "center",
  elevation: 2,
  marginLeft: "auto",
  marginRight: "auto"
},
botaoBack:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 19,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
textLink:{
    color: "#fff", 
    textAlign: "center" 
},
areView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25
},
text:{
    color: "blue", 
    textAlign: "center" 
},
textToast:{
    color: "#FFF", 
    textAlign: "center" 
},
safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},
tinyLogo: {
width: 50,
height: 50
},
texthome:{
    color: "black", 
    textAlign: "justify"
},
titlehome:{
    color: "blue",
    textAlign: "center",
    marginTop: 5
},
homelogo: {
    width: 300,
    height: 100,
    justifyContent: "center", 
    alignItems: "center", 
    display: "flex", 
    alignSelf: "center",
    margin: "auto",
    marginBottom: 10
},
titlenoticias:{
    color: "red",
    textAlign: "center",
    marginTop: 5
},
bold: {
    fontWeight: 'bold',
},
calendario: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
subtitle:{
    color: "blue",
    textAlign: "center",
    marginTop: 5
},
titlecontato:{
    color: "green",
    textAlign: "center",
    marginTop: 5
},
colegiofoto: {
    width: 300,
    height: 150,
    marginTop: 7,
    marginBottom: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
},
boldcenter: {
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 9,
    fontSize: 14,           
    color: 'black',
    marginVertical: 5,
},
contLogo: {
    width: 25,
    height: 25,
    marginVertical: 6
},
h2: {
    fontSize: 21,           
    fontWeight: 'bold',     
    marginTop: 21,
    marginBottom: 15,
    textAlign: "center"    
},
h3: {
    fontSize: 16,           
    fontWeight: 'bold',     
    color: 'blue',
    marginTop: 25,
    marginBottom: 7,
    textAlign: "center"
},
p: {
    fontSize: 14,           
    color: 'black',
    marginVertical: 7,
    textAlign: "justify",     
},
pbold: {
    fontSize: 14,           
    color: 'black',
    marginVertical: 6,
    textAlign: "justify",
    fontWeight: 'bold',     
},
ul: {
    paddingLeft: 22,         
},
li: {
    flexDirection: 'row',    
    alignItems: 'flex-start',
    marginVertical: 4,       
},
bullet: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
    textAlign: 'center',         
},
liText: {
    fontSize: 14,
    color: 'black',
    flexShrink: 1,
    marginTop: 5,
    textAlign: "justify", 
}    
});