import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';


const ChatGlobal = () => {
  const [newMsg, setNewMsg] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>

          <View style={styles.ruler}>
            <Image source={require('./img/1.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tincidunt nisi. Integer facilisis mauris in rhoncus placerat.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:50</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/2.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Ut lacinia sit amet dolor quis porttitor. Vestibulum ultrices est metus, nec auctor enim ultrices a.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:50</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/3.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Proin non lacus nisi.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={[styles.ruler, styles.itemOut]}>
            <View style={[styles.item, styles.itemOut]}>
                <View style={styles.balloon}>
                  <Text>In sagittis egestas libero, in placerat velit imperdiet eget.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainerOut}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/4.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Vivamus erat augue, condimentum non pharetra nec, cursus at lorem. </Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/5.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>In nec ullamcorper arcu.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/6.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Praesent elementum vel lorem at feugiat.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={[styles.ruler, styles.itemOut]}>
            <View style={[styles.item, styles.itemOut]}>
                <View style={styles.balloon}>
                  <Text>In sagittis egestas libero, in placerat velit imperdiet eget.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainerOut}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/7.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>In tincidunt, neque ac molestie sagittis, mi dolor molestie odio, condimentum fringilla massa nibh vel eros. Integer aliquet lectus ut bibendum lobortis.</Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/8.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Mauris at lectus libero. </Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/9.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Maecenas et mollis turpis. </Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>

          <View style={styles.ruler}>
            <Image source={require('./img/10.png')} style={styles.dateImage}/>
              <View style={[styles.item, styles.itemIn]}>
                <View style={styles.balloon}>
                  <Text>Ut maximus orci urna, in elementum velit ultrices pellentesque. </Text>
                </View>
              </View>  
          </View>
          <View style={styles.dateContainer}>
              <Text style={styles.time}>9:51</Text>
          </View>                                                                      

      </ScrollView>

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Converse com todos"
              underlineColorAndroid="transparent"
              onChangeText={(msg) => setNewMsg({ msg })}
            />
          </View>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={{ uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png' }}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
ruler: {
  flexDirection: 'row',
  alignItems: 'center',
  maxWidth: 320,
  
},
dateContainer: {
  marginTop: -50,
  marginRight: 100
},
dateContainerOut: {
  marginTop: -50,
  marginRight: 20
},
dateImage: {
  width: 40,
  height: 40,
  marginRight: 5,
  borderRadius: 300,
  marginLeft: 10
  
},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#F8A8B5',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: '#F8E5DF',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
  },
  itemOut: {
    alignSelf: 'flex-end',
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: '#808080',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8E5DF',
    borderRadius: 300,
    padding: 5,

  },
})

export default ChatGlobal;
