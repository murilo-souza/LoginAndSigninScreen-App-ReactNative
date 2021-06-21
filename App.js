
import React, {useState, useEffect} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Animated,} from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 200, y: 200}))

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 0,
        speed: 4,
        bounciness: 30,
      }),
      Animated.timing(opacity,{
        useNativeDriver: true,
        toValue: 1,
        duration: 400,
      })
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.img}>
        <Image style={{
          width: 200,
          height: 200
        }}
        source={require('./assets/azul.png')}/>
      </View>
      <Animated.View style={[
        styles.container,
        {
          opacity: opacity,
          transform:[
            {translateY: offset.y}
          ]
        }
        ]}>
        <TextInput style={styles.input} placeholder="E-mail" autoCorrect={false} onChangeText={() =>{}}/>
        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() =>{}}/>

        <TouchableOpacity style={styles.butSubmit}>
          <Text style={styles.textSubmit}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignin}>
          <Text style={styles.textSignin}>Criar Conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img:{
   flex:1,
   justifyContent:'center',
   marginTop: 140,
  },
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 100,
    paddingBottom:50,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  butSubmit:{
    backgroundColor: '#35AAff',
    width: '90%',
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSubmit:{
    color:'#fff',
    fontSize:18,
  },
  btnSignin:{
    marginTop: 15,
  },
  textSignin:{
    color: '#fff'
  }
});
