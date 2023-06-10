import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'

const PlayView = () => {
  return (
    <View>
      <ScrollView>
      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/1.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 1</Text>
          <Text style={styles.duration}>69min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/2.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 2</Text>
          <Text style={styles.duration}>62min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/3.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 3</Text>
          <Text style={styles.duration}>64min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/4.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 4</Text>
          <Text style={styles.duration}>66min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/5.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 5</Text>
          <Text style={styles.duration}>67min</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/6.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 6</Text>
          <Text style={styles.duration}>69min</Text>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/7.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 7</Text>
          <Text style={styles.duration}>70min</Text>
        </View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/8.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 8</Text>
          <Text style={styles.duration}>72min</Text>
        </View>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.video} onPress={() => {}}>
        <Image source={require('./img/Play/9.png')} style={styles.thumbnail} />
        <View style={styles.details}>
          <Text style={styles.title}>Episódio 9</Text>
          <Text style={styles.duration}>72min</Text>
        </View>
      </TouchableOpacity> 
      </ScrollView>  
    </View>
  );
}


const styles = {
  container: {
    backgroundColor: '#fff',
    flex:1,
  },
  video: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 5,
  },
  thumbnail: {
    width: '35%',
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  details: {
    padding: 10,
    width: '65%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channel: {
    color: '#999',
    fontSize: 14,
    marginTop: 5,
  },
  viewCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  views: {
    color: '#999',
    fontSize: 14,
  },
  duration: {
    color: '#999',
    fontSize: 14,
    marginLeft: 10,
  },
}

export default PlayView
