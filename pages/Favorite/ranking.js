import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Ranking = () => {
    return (
    <ScrollView>
      <View style={styles.container}>
        
          <View style={styles.cardtop}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="crown" size={35} color="#DB9600" />
            </View>
            <Text style={styles.title}>Top 1</Text>
            <Image  source={require('./img/ranking/1.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Hometown Cha-Cha-Cha</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="crown" size={24} color="#C0C0C0" />
            </View>
            <Text style={styles.title}>Top 2</Text>
            <Image  source={require('./img/ranking/2.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Intensivão do Amor</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="crown" size={24} color="#CD7F32" />
            </View>
            <Text style={styles.title}>Top 3</Text>
            <Image  source={require('./img/ranking/3.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Apostando Alto</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="heart" size={24} color="#F8A8B5" />
            </View>          
            <Text style={styles.title}>Top 4</Text>
            <Image  source={require('./img/ranking/4.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Pretendente Sur.</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name="heart" size={24} color="#F8A8B5" />
            </View>          
            <Text style={styles.title}>Top 5</Text>
            <Image  source={require('./img/ranking/5.png')} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>O Mito de Sisifo</Text>
            </View>
          </View>     
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardtop: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '95%',
    height: 320,

    shadowOffset: {
      width: 0,
      height: 2
    },
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '45%',
    height: 300,
    marginTop: 20,

    shadowOffset: {
      width: 0,
      height: 2
    },
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default Ranking;