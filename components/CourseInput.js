import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Image,
  TextInput,
} from "react-native";
import React from "react";

export default function CourseInput({ visible }) {
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
        <TextInput style={styles.inputStyle} placeholder="Add New Course" />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Add"
              color="rebeccapurple"
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" color="rebeccapurple" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageStyle: {
    height: 200,
    width: 200,
  },
  inputStyle: {},
  buttonContainer: {},
});
