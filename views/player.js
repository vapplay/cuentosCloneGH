import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { Image, View, Text, TouchableOpacity, Share } from "react-native";
import { Audio } from "expo-av";
import { isAvailableAsync } from "expo-sharing";

async function shareAsync() {
  await Share.share(
    {
      message: `Check out not-crossy-road by @baconbrix`,
      url: "https://crossyroad.netlify.com",
      title: "Not Crossy Road",
    },
    {
      dialogTitle: "Share Not Crossy Road",
      excludedActivityTypes: [
        "com.apple.UIKit.activity.AirDrop", // This speeds up showing the share sheet by a lot
        "com.apple.UIKit.activity.AddToReadingList", // This is just lame :)
      ],
    }
  );
}

const Player = ({ route }) => {
  const dataCuento = route.params?.dataCuento;
  const [sound, setSound] = useState();
  const [play, setPlay] = useState(false);
  const [canShare, setCanShare] = useState(true);

  useEffect(() => {
    isAvailableAsync()
      .then(setCanShare)
      .catch(() => {});
  }, []);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(dataCuento.song);
    setSound(sound);
    await sound.playAsync();
  }

  const playSong = async () => {
    await sound.playAsync();
  };

  const stopSong = async () => {
    await sound.pauseAsync();
  };

  useEffect(() => {
    if (sound) {
      if (!play) {
        console.log("PLAY SONG", play);
        playSong();
      } else {
        console.log("STOP SONG", play);
        stopSong();
      }
    }
  }, [play]);

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const Controls = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.buttonShare}
          onPress={() => {
            shareAsync();
          }}
        >
          <Text style={styles.buttonText}>Compartir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => setPlay(!play)}
        >
          <Text style={styles.buttonText}>{play ? "Play" : "Pause"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>atras</Text>
        </TouchableOpacity>

        {/* <Icon name="rowing" />

        <Icon name="sc-telegram" type="evilicon" color="#517fa4" /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{dataCuento.title}</Text>

      <Image source={dataCuento.detailImage} style={styles.image} />

      <Controls playSound={playSound} />
    </View>
  );
};

export default Player;
