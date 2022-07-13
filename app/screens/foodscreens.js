import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from "react-native-vector-icons/AntDesign";

import { Instruction } from "./instruction";
import { Loading } from "./loadingscreen";
import { MealImage } from "./imagescreen";
import { YoutubeDisplayer } from "./youtubescreen";
import { Ingredients } from "./ingredients";

export const FoodScreen = () => {
  const playerRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(true);
  const [Hearts, setHearts] = useState("hearto");

  const [title, setTitle] = useState("Title here...");
  const [category, setCategory] = useState("Category here...");
  const [instructions, setInstructions] = useState(
    "Instruction here...click on Get new meal"
  );
  const [Video, setVideo] = useState(3);
  const [image, setImage] = useState(
    "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg"
  );

  const [ingredients, setIngredients] = useState([
    { strIngredient: "Ingredients here..." },
  ]);
  const [youtubeID, setYoutubeID] = useState("Youtube here...");
  const [currentScreen, setCurrentScreen] = useState(
    <Instruction instructions={instructions} />
  );

  //Display video
  const LoadVideo = () => {
    setCurrentScreen(
      <YoutubeDisplayer
        playerRef={playerRef}
        YoutubeID={youtubeID}
        playing={true}
      />
    );
    setVideo(4);
  };

  //Display Ingredients
  const LoadIngredients = () => {
    setCurrentScreen(<Ingredients ingredients={ingredients} />);
    setVideo(3);
  };

  //Display Instructions
  const LoadInstructions = () => {
    setCurrentScreen(<Instruction instructions={instructions} />);
    setVideo(3);
  };

  //Ingredients containing 2 information
  function getIngredients(data) {
    for (let index = 0; index < 20; index++) {
      if (data[`strIngredient${index}`]) {
        setIngredients((prevList) => {
          return [
            {
              strIngredient: data[`strIngredient${index}`],
              strMeasure: data[`strMeasure${index}`],
            },
            ...prevList,
          ];
        });
      }
    }
  }

  //Fetch random food of the day
  function getFoodApi() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setModalVisible(true);
        setTitle(responseJson.meals[0].strMeal);
        setCategory(responseJson.meals[0].strCategory);
        setInstructions(responseJson.meals[0].strInstructions);
        setImage(responseJson.meals[0].strMealThumb);
        setYoutubeID(responseJson.meals[0].strYoutube.substring(32, 43));
        setIngredients([]);
        getIngredients(responseJson.meals[0]);
        setCurrentScreen(
          <Instruction instructions={responseJson.meals[0].strInstructions} />
        );
        setModalVisible(false);
        setHearts("hearto");
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  useEffect(getFoodApi, []);

  return (
    <View style={styles.container}>
      <Loading modalVisible={modalVisible} />
      <Grid>
        <Row size={2}>
          <View style={{ width: "100%" }}>
            <MealImage img={image} />
          </View>
        </Row>
        <Row size={0.8}>
          <View style={styles.card}>
            <View style={styles.innercard}>
              <View style={{ width: "90%" }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>{category}</Text>
              </View>

              <View style={styles.heart}>
                <TouchableOpacity onPress={() => setHearts("heart")}>
                  <Icon name={Hearts} size={24} color="#E86D83FF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Row>

        <Row size={Video}>
          <View style={styles.wrapper}>
            <View style={styles.displayer}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => LoadInstructions()}
                  >
                    <Text style={styles.btnTxt}>Instructions</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => LoadIngredients()}
                  >
                    <Text style={styles.btnTxt}>Ingredients</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => LoadVideo()}
                  >
                    <Text style={styles.btnTxt}>Video</Text>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
            {currentScreen}
          </View>
        </Row>
        <Row size={0.4}>
          <View style={styles.front}>
            <TouchableOpacity
              style={styles.getMealBtn}
              onPress={() => getFoodApi()}
            >
              <Text style={styles.getMealTxt}>Get new meal</Text>
            </TouchableOpacity>
          </View>
        </Row>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F6F5",
  },
  card: {
    backgroundColor: "#F0F6F5", //#F0F6F5
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
    justifyContent: "center",
  },
  innercard: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 18,
  },
  category: {
    fontSize: 12,
    color: "#E86D83FF",
    fontWeight: "bold",
  },
  heart: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
  },

  //Video corner
  wrapper: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  displayer: {
    height: "10%",
    marginVertical: 30,
  },
  btnStyle: {
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
  },
  btnTxt: {
    color: "white",
    fontSize: 15,
  },

  //front design
  front: {
    backgroundColor: "#E86D83FF",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  getMealBtn: {
    alignContent: "center",
    alignItems: "center",
  },
  getMealTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    paddingHorizontal: 80,
  },
});
