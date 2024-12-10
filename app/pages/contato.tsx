import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App(){
    return(
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
    
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View style={{ height: "auto" }}>
    
        <Text style={[styles.h2, { color: "blue" }]}>Fale Conosco!</Text>

        <Text style={styles.p}>Ficou com dúvidas ou quer agendar uma visita? Entre em contato conosco pelos canais de atendimento.</Text>

        <Text style={styles.pbold}>Colégio Fênix</Text>
            
        <Text style={styles.p}>R. José Félix de Oliveira, 267 - Vila Santo Antônio, Cotia - SP, 06708-415</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={styles.contLogo}
                source={require('../../assets/images/phonelogo.png')}
            />
            <Text style={styles.p}> +55 11 4169-9508</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={styles.contLogo}
                source={require('../../assets/images/whatsapplogo.png')}
            />
            <Text>  +55 11 95852-3148</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={styles.contLogo}
                source={require('../../assets/images/email.png')}
            />
            <Text style={styles.p}> atendimento@fenixcolegio.com.br</Text>
        </View>
        
        <Text style={styles.pbold}>SIGA-NOS E CURTA NOSSAS PÁGINAS</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={styles.contLogo}
                source={require('../../assets/images/instagramlogo.png')}
            />
            <Text>  @fenixcolegio</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
                style={styles.contLogo}
                source={require('../../assets/images/facebooklogo.png')}
            />
            <Text style={styles.p}>  @fenixcolegio</Text>
        </View>
                        
            <Pressable style={styles.botaoBack}>
                <Link href="/">
                <Text style={styles.textLink} >Voltar ao Início</Text>
                </Link>
            </Pressable>
            
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    botaoGo1:{
        backgroundColor: "red",
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        marginLeft: "auto",
        marginRight: "auto",
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
        marginRight: "auto",
    },
    botaoGo3:{
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
    botaoBack:{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
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
        margin: 25,
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
        alignItems: "center",
    },
    tinyLogo: {
    width: 50,
    height: 50,
    },
    texthome:{
        color: "black", 
        textAlign: "justify"
    },
    titlehome:{
        color: "blue",
        textAlign: "center",
        marginTop: 5,
    },
    homelogo: {
        width: 300,
        height: 100,
        justifyContent: "center", 
        alignItems: "center", 
        display: "flex", 
        alignSelf: "center",
        margin: "auto",
        marginBottom: 10,
    },
    titlenoticias:{
        color: "red",
        textAlign: "center",
        marginTop: 5,
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
        marginTop: 5,
    },
    titlecontato:{
        color: "green",
        textAlign: "center",
        marginTop: 5,
    },
    colegiofoto: {
        width: 300,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto"
    },
    boldcenter: {
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 5,
    },
    contLogo: {
        width: 25,
        height: 25,
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
        textAlign: "center",
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