import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, Pressable } from 'react-native';
import { Link } from "expo-router";

interface Evento {
  titulo: string;
  data: string;
  local: string;
  descricao: string;
}


const eventos: Evento[] = [
  {
    titulo: "Feira de Ciências",
    data: "15 de Janeiro de 2025",
    local: "Ginásio Poliesportivo",
    descricao: "Alunos de todas as séries apresentarão seus projetos científicos. Haverá exposições interativas e demonstrações ao vivo."
  },
  {
    titulo: "Dia da Família",
    data: "22 de Fevereiro de 2025",
    local: "Campo de Futebol",
    descricao: "Um dia dedicado à integração entre alunos, familiares e funcionários da escola. Atividades recreativas, jogos e um grande piquenique."
  },
  {
    titulo: "Semana da Arte",
    data: "10 a 14 de Março de 2025",
    local: "Sala de Artes",
    descricao: "Exposições de arte feitas pelos alunos, oficinas de pintura, escultura e apresentações de teatro."
  },
  {
    titulo: "Campeonato de Esportes",
    data: "5 de Abril de 2025",
    local: "Ginásio Poliesportivo",
    descricao: "Competições esportivas entre as turmas. Modalidades incluem futebol, vôlei, basquete e atletismo."
  },
  {
    titulo: "Festival de Música",
    data: "25 de Maio de 2025",
    local: "Auditório Principal",
    descricao: "Apresentações musicais dos alunos, incluindo bandas, corais e solos instrumentais. Haverá também participações especiais de professores."
  },
  {
    titulo: "Concurso de Redação",
    data: "10 de Junho de 2025",
    local: "Biblioteca",
    descricao: "Alunos irão apresentar suas redações sobre temas diversos. Os melhores textos serão premiados e publicados no jornal da escola."
  },
  {
    titulo: "Festa Junina",
    data: "24 de Junho de 2025",
    local: "Pátio da Escola",
    descricao: "Tradicional celebração com danças típicas, barracas de comidas e brincadeiras para toda a comunidade escolar."
  }
];

const App = () => {
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
    style={styles.homelogo} 
    source={require('../../assets/images/logo.png')} />
<Text style={[styles.h2, { color: "red" }]}>Fique por Dentro!</Text>
  <View style={styles.container}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.titulo}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.date}>{item.data}</Text>
            <Text style={styles.location}>{item.local}</Text>
            <Text style={styles.description}>{item.descricao}</Text>
          </View>
        )}
      />
      <Pressable style={styles.botaoBack}>
                <Link style={styles.textLink} href="/">
                    <Text>Voltar ao Início</Text>
                </Link>
            </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  event: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)', // Isto pode não funcionar no React Native, considere usar outra solução para sombras.
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#777',
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
h2: {
    fontSize: 21,           
    fontWeight: 'bold',     
    marginTop: 21,
    marginBottom: 15,
    textAlign: "center"    
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

});

export default App;
