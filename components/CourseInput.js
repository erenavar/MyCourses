import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible, onAddCourse, onCancel }) {
  const [enteredCourseText, setEnteredCourseText] = useState("");

  const addCourseHandler = () => {
    onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  };

  const courseInputHandler = (value) => {
    return setEnteredCourseText(value);
  };
  return (
    <Modal
      animationType="slide"
      //transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/ea.png")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Add New Course"
          value={enteredCourseText}
          onChangeText={courseInputHandler}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle1}
            underlayColor="#fff"
            onPress={addCourseHandler}
            value="courseInputHandler"
          >
            <Text style={styles.textStyle}>Add Course</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle2} onPress={onCancel}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", marginTop: 60 },
  imageStyle: {
    height: 150,
    width: 150,
  },
  inputStyle: {
    marginBottom: 40,
    borderWidth: 1,
    width: "70%",
    padding: 10,
    borderRadius: "10px",
    borderColor: "#a8065f",
  },
  buttonContainer: {
    width: "70%",
  },
  buttonStyle1: {
    backgroundColor: "rebeccapurple",
    height: 35,
    borderRadius: "12px",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle2: {
    backgroundColor: "rebeccapurple",
    height: 35,
    borderRadius: "12px",
    marginBottom: 15,
    backgroundColor: "#E67B7B",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
  },
});
