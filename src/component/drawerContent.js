import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const DrawerContent = ({navigation}) => (
    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 50  }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image
            source={require('../assets/icon-nav.png')}
            style={{width: 40, height: 40}}
            />
        </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Calificanos')}>
        <Text style={{ fontSize: 18, marginVertical: 10 }} >Calificanos</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Compartir')}>
       
       <Text  style={{ fontSize: 18, marginVertical: 10 }}>Compartir</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Contacto')}>
       
       <Text  style={{ fontSize: 18, marginVertical: 10 }}>Contactanos</Text>
       </TouchableOpacity>

    </View>
);

export {DrawerContent};

