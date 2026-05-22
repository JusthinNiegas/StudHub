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

export default function RegisterScreen() {
  const { width, height } = useWindowDimensions();

  // RESPONSIVE SIZES
  const containerWidth =
    width < 360
      ? width * 0.94
      : width < 768
      ? width * 0.88
      : 430;

  const logoWidth =
    width < 360
      ? width * 0.9
      : width < 768
      ? width * 0.82
      : 390;

  const illustrationWidth =
    width < 360
      ? width * 0.52
      : width < 768
      ? width * 0.5
      : 220;

  const titleSize =
    width < 360
      ? 28
      : width < 768
      ? 34
      : 38;

  const inputFontSize =
    width < 360
      ? 14
      : 16;

  const buttonFontSize =
    width < 360
      ? 14
      : 15;

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
          paddingVertical: width < 360 ? 12 : 20,
          minHeight: height,
        }}
      >
        {/* MAIN CONTAINER */}
        <View
          style={{
            width: containerWidth,
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
            }}
          >
            {/* WELCOME TEXT */}
            <Text
              style={{
                color: "#8B5CF6",
                fontSize: width < 360 ? 12 : 14,
                marginTop: width < 360 ? 16 : 18,
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
                height: width < 360 ? 120 : 180,
                marginBottom: width < 360 ? -20 : -32,
                zIndex: 2,
              }}
              resizeMode="contain"
            />

            {/* ILLUSTRATION */}
            <Image
              source={require("../../../assets/images/illustration.png")}
              style={{
                width: illustrationWidth,
                height: width < 360 ? 120 : 145,
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
              paddingHorizontal: width < 360 ? 18 : 25,
              paddingTop: width < 360 ? 22 : 28,
              paddingBottom: width < 360 ? 18 : 22,
              borderTopLeftRadius: 38,
              borderTopRightRadius: 38,
              marginTop: -5,
            }}
          >
            {/* TITLE */}
            <Text
              style={{
                color: "white",
                fontSize: titleSize,
                fontWeight: "bold",
                marginBottom: width < 360 ? 16 : 20,
              }}
            >
              Sign Up
            </Text>

            {/* NAME */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: inputFontSize,
              }}
            >
              Name
            </Text>

            <TextInput
              placeholder="Olivia Wilson"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFF2B2",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: width < 360 ? 12 : 14,
                marginBottom: 14,
                fontSize: inputFontSize,
              }}
            />

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
              placeholder="hello@reallygreatsite.com"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFD6F5",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: width < 360 ? 12 : 14,
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
              secureTextEntry
              placeholder="******"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFF2B2",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: width < 360 ? 12 : 14,
                marginBottom: 14,
                fontSize: inputFontSize,
              }}
            />

            {/* CONFIRM PASSWORD */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: inputFontSize,
              }}
            >
              Confirm password
            </Text>

            <TextInput
              secureTextEntry
              placeholder="******"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFD6F5",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: width < 360 ? 12 : 14,
                marginBottom: 18,
                fontSize: inputFontSize,
              }}
            />

            {/* BOTTOM SECTION */}
            <View
              style={{
                flexDirection: width < 360 ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: width < 360 ? 14 : 0,
              }}
            >
              {/* LEFT TEXT */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent:
                    width < 360 ? "center" : "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: width < 360 ? 10 : 11,
                  }}
                >
                  Already have an account?{" "}
                </Text>

                {/* ONLY SIGN IN IS TOUCHABLE */}
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/login")}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: width < 360 ? 10 : 11,
                      fontWeight: "bold",
                    }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>

              {/* NEXT BUTTON */}
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 999,
                  paddingHorizontal: width < 360 ? 18 : 22,
                  paddingVertical: width < 360 ? 6 : 7,
                  width: width < 360 ? "100%" : "auto",
                  alignItems: "center",
                }}
                onPress={() => router.push("/(auth)/verify")}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: buttonFontSize,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}