import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.background}>
      < View>
        <Text style={styles.title}>PETSHOP CRYSTAL</Text>
      </View>
      <View>
        <Image source={require('./assets/imagens/PETSHOP.jpg')} style={styles.petShopImage}/>
      </View>
      <View style={styles.midArea}>
        <Image source={require('./assets/imagens/BANHO.jpg')} style={styles.bathImage}/>
        <Text style={styles.descriptionText}>Banho e Tosa em Crystal — Nós temos Banho e Tosa, Cromoterapia, Banho de Ozônio, Atendimento Veterinário, Tosa Spitz.</Text>
      </View>
      <View style={styles.bottomArea}>
        <Image source={require('./assets/imagens/shop.jpg')} style={styles.shopImage}/>
        <Text style={styles.descriptionText}>Também trabalhamos com uma grande variedade de brinquedos, casinhas, tapetes, coleiras e acessórios para pets.</Text>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },

  title: {
    marginTop: 40,
    fontWeight:'bold',
    fontSize:30,
	  color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 5,
  },

  petShopImage: {
    marginTop: 10,
    height: 200,
    borderRadius: 18,
    borderWidth: 5,
  },

  shopImage: {
    marginTop: 40,
    height: 200,
    width: 140,
    borderRadius: 18,
    borderWidth: 5,
  },
 
  midArea:{
    flexDirection: 'row',
    marginTop: -20,
  },

  bottomArea: {
    flexDirection: 'row',
    marginTop: -20,
  },

  bathImage:{
    marginTop:40,
    width: 140,
    height: 200,
    borderRadius: 18,
	  borderWidth:5,
  },

  descriptionText:{

    marginLeft: 20,
    marginTop: 70,
    width: 130,
  }

  
});