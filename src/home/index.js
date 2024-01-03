import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { styles } from './styles';
import { ImageBackground } from "react-native";


function HomeScreen({ navigation }) {


    return (
        <ImageBackground
            source={require('../assets/fondo-home.png')}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Text style= {styles.Title} >
            
                            <Text >
                                Selecciona tu mágico cuento para el día de hoy.
                            </Text>
                       
                    </Text>


                    <View style={styles.containerimages}>
                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={styles.borderImg}>
                                <Image
                                    style={styles.imageLeft}
                                    source={require('../assets/imagen1.png')}
                                />
                                <Text
                                    style={styles.textLeft}>
                                    Frida
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={styles.borderImg}>
                                <Image
                                    style={styles.imageRight}
                                    source={require('../assets/imagen2.png')}
                                />
                                <Text
                                    style={styles.textRight}>
                                    Joanne R
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerimages}>
                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={styles.borderImg}>
                                <Image
                                    style={styles.imageRight}
                                    source={require('../assets/imagen3.png')}
                                />
                                <Text
                                    style={styles.textRight}>
                                    Marie
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={styles.borderImg}>
                                <Image
                                    style={styles.imageLeft}
                                    source={require('../assets/imagen4.png')}
                                />
                                <Text
                                    style={styles.textLeft}>
                                    Serena
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerimages}>
                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={styles.borderImg}>
                                <Image
                                    style={styles.imageCenterRight}
                                    source={require('../assets/imagen6.png')}
                                />
                                <Text
                                    style={styles.textCenterRight}>
                                    ! Dedicado a tu {"\n"}
                                    extraordinaria hija!
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default HomeScreen;