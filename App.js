import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState(["React Native", "C#"]);
  const startModal = () => setModalIsVisible(true);
  const endModal = () => setModalIsVisible(false);
  const addCourse = (courseTitle) => {
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          underlayColor="#fff"
          onPress={startModal}
        >
          <Text style={styles.loginText}>Add Course</Text>
        </TouchableOpacity>
        <CourseInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />

        <FlatList
          style={styles.coursesStyle}
          data={courses}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loginScreenButton: {
    marginVertical: 30,
    paddingVertical: 10,
    backgroundColor: "rebeccapurple",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "70%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
  },
  coursesStyle: {
    font: 160,
  },
});
