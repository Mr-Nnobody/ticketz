// // import { useState } from "react";
// // import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// // export default function App() {
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [password, setPassword] = useState("");

// //   function phoneNumberHandler(phoneNumber) {
// //     setPhoneNumber(phoneNumber);
// //   }

// //   function passwordHandler(password) {
// //     setPassword(password);
// //   }

// //   function loginHandler() {
// //     console.log("Phone Number: " + phoneNumber);
// //     console.log("Password:" + password);
// //     alert("successful login");
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text>Welcome to Ticketz</Text>
// //       <Text
// //         style={{
// //           marginBottom: 20,
// //           textAlign: "center",
// //           width: "130%",
// //           borderBottomWidt h: 2,
// //         }}
// //       >
// //         Your Smart Ticketer!
// //       </Text>
// //       <View>
// //         <TextInput
// //           style={styles.textbox}
// //           placeholder="Phone Number"
// //           onChangeText={phoneNumberHandler}
// //         />
// //       </View>
// //       <View>
// //         <TextInput
// //           style={styles.textbox}
// //           placeholder="Password"
// //           onChangeText={passwordHandler}
// //         />
// //       </View>
// //       <Button title="Log in" onPress={loginHandler} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     padding: 50,
// //   },
// //   textbox: {
// //     marginBottom: 20,
// //     borderWidth: 2,
// //     borderColor: "grey",
// //     padding: 5,
// //     width: 300,
// //     borderRadius: 10,
// //   },
// // });

// import React, { useState } from "react";
// import { View, TextInput } from "react-native";
// import LoginScreen from "react-native-login-screen";

// const MyLoginScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <LoginScreen
//       logoImageStyle={{
//         marginBottom: 30,
//         width: 360,
//         height: 300,
//         resizeMode: "contains",
//       }}
//       signupTextStyle={{
//         backgroundColor: "green",
//         color: "white",
//         fontWeight: "bold",
//         width: "90%",
//         textAlign: "center",
//         borderWidth: 2,
//         borderRadius: 10,
//         borderColor: "white",
//         padding: 10,
//       }}
//       logoImageSource={require("./assets/bus.png")} // Replace with your logo image
//       onLoginPress={() => {
//         // Handle login button press
//       }}
//       onSignupPress={() => {
//         // Handle signup button press
//       }}
//       disableSocialButtons={true}
//       onEmailChange={() => {}}
//       onPasswordChange={setPassword}
//       enablePasswordValidation // Enable password validation
//       disableEmailInput={true}
//     />
//   );
// };

// export default MyLoginScreen;
// // // App.js
import React from "react";
import { View, Text } from "react-native"; // Import other necessary components
import Index from "./components/Index.js";
import AgencyLoginScreen from "./components/AgencyLoginScreen.js";

const App = () => {
  return <AgencyLoginScreen />;
  {
    /* Add your custom login screen here */
  }
};

export default App;
