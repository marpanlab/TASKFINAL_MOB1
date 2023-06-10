import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={require('./img/1.png')} style={styles.image} />
        <View style={styles.cardBody}>
          <Text style={styles.name}>Hometown Cha-Cha-Cha</Text>
          <Text style={styles.title}>Lançamento:</Text>
          <Text style={styles.subtitle}>2021</Text>
          <Text style={styles.title}>Sinopse:</Text>
          <Text style={styles.subtitle}>Em Hometown Cha-Cha-Cha, Yoon Hye-jin, uma inteligente e bela dentista morando na cidade grande, perde o emprego depois de acusar o principal médico da clínica de alongar os tratamentos dos pacientes para lucrar mais. Ela, então, viaja para um vilarejo a beira-mar onde conhece o jovem Hong Du-sik. Ele tem uma boa reputação na comunidade, pois toma conta dos mais velhos e não recusa nenhum trabalho. Os destinos deles acabam se cruzando diversas vezes e os dois acabam se apaixonando.</Text>
          <Text style={styles.title}>Elenco:</Text>
          <Text style={styles.subtitle}>Seon-ho Kim, Min-jung Gong, Min-a Shin</Text>
        </View>
        
        
        <View style={styles.cardFooter}>
          <View style={styles.fav}>
            <Ionicons name="ios-heart-circle-sharp" size={24} color="red"/>
            <Text style={styles.bottomtext}>Favoritar</Text>
          </View>
          <View style={styles.add}>
            <Ionicons name="add-circle" size={24} color="#4630EB" />
            <Text style={styles.bottomtext}>Adicionar ao meu Feed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '95%',
    height: '95%',
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
    name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  }, 
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15,
    textAlign: 'justify',
  },  
    subtitle: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'justify',
  },  
  cardFooter: {
    padding: 10,
    flexDirection: 'row',
    borderTopWidth:2,
    borderTopColor:'#F8A8B5',
    justifyContent: 'space-between',
  },
  fav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  add: {
    fontSize: 16,
    color:'white',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
});

export default DetailsScreen