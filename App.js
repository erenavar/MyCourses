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
  const [courses, setCourses] = useState([]);
  const startModal = () => setModalIsVisible(true);
  const endModal = () => setModalIsVisible(false);
  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
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
        <View style={{ width: "70%" }}>
          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <View style={styles.flatList}>
                <Text style={styles.flatItem}>{item.text}</Text>
              </View>
            )}
          />
        </View>
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
  flatList: {
    backgroundColor: "pink",
    borderRadius: "10px",
    marginBottom: 10,
  },
  flatItem: {
    padding: 5,
    alignSelf: "center",
  },
});
