import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  Alert,
} from "react-native";
import { Button } from "galio-framework";

import { Instruction } from "./instruction";


function getFoodApi() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      setModalVisible(true);
      setTitle(responseJson.meals[0].strMeal);
      setCategoty(responseJson.meals[0].strCategory);
      setInstructions(responseJson.meals[0].setInstructions);
      setImage(responseJson.meals[0].strMealThumb);
      setYoutubeID(responseJson.meals[0].strYoutube.substring(32, 43));
      setIngredients([]);
      getIngredients(responseJson.meals[0]);
      setCurrentScreen(<Instruction instructions={responseJson.meals[0].setInstructions} />);
      setModalVisible(false);
      setHearts('hearto');
    })
    .catch((error) => {
        Alert.alert(error);
    });
}

export const FoodScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [Hearts, setHearts] = useState("hearto");
    
    const [title, setTitle] = useState("Title here...");
    const [category, setCategoty] = useState("Category here...");
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
    
    

    return (
        <View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F6F5'
    }
})
