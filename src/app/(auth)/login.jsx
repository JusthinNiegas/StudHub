import React, { useState } from "react";

import { router } from "expo-router";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const { width, height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // DEVICE DETECTION
  const isSmallDevice = width <= 320;
  const isTablet = width >= 768;

  // RESPONSIVE SIZES
  const containerWidth = isTablet
    ? width * 0.75
    : isSmallDevice
    ? width * 0.94
    : width * 0.88;

  const logoWidth = isTablet
    ? 420
    : isSmallDevice
    ? width * 0.9
    : width * 0.82;

  const illustrationWidth = isTablet
    ? 320
    : isSmallDevice
    ? width * 0.52
    : width * 0.5;

  const titleSize = isTablet
    ? 48
    : isSmallDevice
    ? 28
    : 34;

  const inputFontSize = isSmallDevice ? 14 : isTablet ? 18 : 16;

  const buttonFontSize = isSmallDevice ? 16 : isTablet ? 24 : 18;

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
          paddingVertical: isSmallDevice ? 0 : 20,
          minHeight: height,
        }}
      >
        {/* MAIN CONTAINER */}
        <View
          style={{
            width: containerWidth,
            maxWidth: 700,
            backgroundColor: "white",
            borderRadius: 35,
            overflow: "hidden",
            minHeight: isTablet
              ? height * 0.92
              : isSmallDevice
              ? height
              : null,
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
                top: isSmallDevice ? 14 : 20,
                left: isSmallDevice ? 14 : 20,
                zIndex: 10,
              }}
            >
              <Text
                style={{
                  color: "#8B5CF6",
                  fontSize: isTablet
                    ? 24
                    : isSmallDevice
                    ? 16
                    : 18,
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
                fontSize: isTablet
                  ? 24
                  : isSmallDevice
                  ? 12
                  : 14,
                marginTop: isSmallDevice ? 16 : 18,
                marginBottom: 2,
              }}
            >
              Welcome to
            </Text>

            {/* LOGO */}
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{
                width: logoWidth,
                height: isTablet
                  ? 140
                  : isSmallDevice
                  ? 120
                  : 180,
                marginBottom: isTablet ? -45 : -32,
                zIndex: 2,
              }}
              resizeMode="contain"
            />

            {/* ILLUSTRATION */}
            <Image
              source={require("../../../assets/images/illustration.png")}
              style={{
                width: illustrationWidth,
                height: isTablet
                  ? 210
                  : isSmallDevice
                  ? 120
                  : 145,
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
              paddingHorizontal: isTablet
                ? 40
                : isSmallDevice
                ? 18
                : 25,

              paddingTop: isTablet
                ? 40
                : isSmallDevice
                ? 22
                : 28,

              paddingBottom: isTablet
                ? 35
                : isSmallDevice
                ? 18
                : 22,

              borderTopLeftRadius: 38,
              borderTopRightRadius: 38,
              marginTop: -5,
              flex: 1,
            }}
          >
            {/* TITLE */}
            <Text
              style={{
                color: "white",
                fontSize: titleSize,
                fontWeight: "bold",
                marginBottom: isSmallDevice ? 16 : 20,
              }}
            >
              Sign In
            </Text>

            {/* EMAIL */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: inputFontSize,
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
                paddingVertical: isTablet
                  ? 18
                  : isSmallDevice
                  ? 12
                  : 14,

                marginBottom: 14,
                fontSize: inputFontSize,
              }}
            />

            {/* PASSWORD */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: inputFontSize,
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
                paddingVertical: isTablet
                  ? 18
                  : isSmallDevice
                  ? 12
                  : 14,

                marginBottom: 10,
                fontSize: inputFontSize,
              }}
            />

            {/* FORGOT PASSWORD */}
            <TouchableOpacity
              style={{
                marginBottom: isTablet ? 30 : 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: isTablet
                    ? 16
                    : isSmallDevice
                    ? 11
                    : 12,

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
                paddingVertical: isTablet
                  ? 16
                  : isSmallDevice
                  ? 9
                  : 11,

                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: buttonFontSize,
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
                flexWrap: "wrap",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: isTablet
                    ? 16
                    : isSmallDevice
                    ? 11
                    : 12,
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
                    fontSize: isTablet
                      ? 16
                      : isSmallDevice
                      ? 11
                      : 12,

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