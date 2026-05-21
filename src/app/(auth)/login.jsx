import { router } from "expo-router";
import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "test@gmail.com" &&
      password === "123456"
    ) {
      router.replace("/(tabs)");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "#EAEAEA",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        {/* MOBILE CONTAINER */}
        <View
          style={{
            width: 340,
            backgroundColor: "white",
            borderRadius: 35,
            overflow: "hidden",
          }}
        >
          {/* TOP SECTION */}
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              position: "relative",
            }}
          >
            {/* BACK BUTTON */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 10,
              }}
            >
              <Text
                style={{
                  color: "#8B5CF6",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Back
              </Text>
            </TouchableOpacity>

            {/* WELCOME TEXT */}
            <Text
              style={{
                color: "#8B5CF6",
                fontSize: 14,
                marginTop: 18,
                marginBottom: 2,
              }}
            >
              Welcome to
            </Text>

            {/* LOGO */}
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{
                width: 410,
                height: 180,
                marginBottom: -32,
                zIndex: 2,
              }}
              resizeMode="contain"
            />

            {/* ILLUSTRATION */}
            <Image
              source={require("../../../assets/images/illustration.png")}
              style={{
                width: 220,
                height: 145,
                marginTop: -10,
              }}
              resizeMode="contain"
            />
          </View>

          {/* FORM SECTION */}
          <LinearGradient
            colors={["#1D4ED8", "#C084FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              paddingHorizontal: 25,
              paddingTop: 28,
              paddingBottom: 22,
              borderTopLeftRadius: 38,
              borderTopRightRadius: 38,
              marginTop: -5,
            }}
          >
            {/* TITLE */}
            <Text
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Sign In
            </Text>

            {/* EMAIL */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: 16,
              }}
            >
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="test@gmail.com"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFF2B2",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: 14,
                marginBottom: 14,
                fontSize: 16,
              }}
            />

            {/* PASSWORD */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: 16,
              }}
            >
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="123456"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFD6F5",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: 14,
                marginBottom: 10,
                fontSize: 16,
              }}
            />

            {/* FORGOT PASSWORD */}
            <TouchableOpacity
              style={{
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 999,
                paddingVertical: 10,
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>

            {/* SIGN UP */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                }}
              >
                Don’t have an account?{" "}
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/(auth)/register")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}