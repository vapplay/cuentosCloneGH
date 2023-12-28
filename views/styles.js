import { StyleSheet, Dimensions } from "react-native";

const wHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#F7B9D7",
    height: wHeight,
  },
  containerimages: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  borderImg: {
    flex: 2,
  },
  imageLeft: {
    height: 150,
    width: 150,
    transform: [{ rotate: "-15deg" }],
    borderColor: "black",
    borderWidth: 0.5,
  },
  imageRight: {
    height: 150,
    width: 150,
    transform: [{ rotate: "15deg" }],
    borderColor: "black",
    borderWidth: 1,
  },

  imageCenterRight: {
    height: 150,
    width: 150,
    transform: [{ rotate: "3deg" }],
    borderColor: "black",
    borderWidth: 1,
  },
  textLeft: {
    fontSize: 20,
    textAlign: "center",
    transform: [{ rotate: "-15deg" }],
    color: "blue",
  },
  textRight: {
    fontSize: 20,
    textAlign: "center",
    transform: [{ rotate: "+15deg" }],
    color: "blue",
  },
  textCenterRight: {
    fontSize: 20,
    textAlign: "center",
    transform: [{ rotate: "3deg" }],
    color: "blue",
  },
  Title: {
    fontSize: 20,
    textAlign: "center",
    color: "blue",
    marginBottom: 37,
  },
  buttonShare: {
    position: "absolute",
    bottom: 160,
    right: 100,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aae4",
    alignSelf: "flex-end",
  },

  buttonPlay: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aae4",
    alignSelf: "flex-end",
  },

  buttonBack: {
    position: "absolute",
    bottom: 20,
    left: -320,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aae4",
    alignSelf: "flex-end",
  },

  buttonText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },

  buttonPause: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aae4",
    marginTop: 20, // Ajusta el margen superior según sea necesario
    alignSelf: "flex-start", // Alinea a la izquierda
  },
  buttonStop: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aae4",
    marginTop: 20, // Ajusta el margen superior según sea necesario
    alignSelf: "flex-start", // Alinea a la izquierda
  },
  controlsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export { styles };
