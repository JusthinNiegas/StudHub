import { router } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function VerifyScreen() {
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
      ? 16
      : 18;

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
              position: "relative",
            }}
          >
            {/* BACK BUTTON */}
            <TouchableOpacity
              onPress={() => router.push("/(auth)/register")}
              style={{
                position: "absolute",
                top: width < 360 ? 14 : 20,
                left: width < 360 ? 14 : 20,
                zIndex: 10,
              }}
            >
              <Text
                style={{
                  color: "#8B5CF6",
                  fontSize: width < 360 ? 16 : 18,
                  fontWeight: "bold",
                }}
              >
                ❮
              </Text>
            </TouchableOpacity>

            {/* HEADER TEXT */}
            <Text
              style={{
                color: "#8B5CF6",
                fontSize: width < 360 ? 12 : 14,
                marginTop: width < 360 ? 16 : 18,
                marginBottom: 2,
              }}
            >
              Verify your account
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
              paddingBottom: width < 360 ? 18 : 28,
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
                marginBottom: 10,
              }}
            >
              Verification
            </Text>

            {/* DESCRIPTION */}
            <Text
              style={{
                color: "white",
                fontSize: width < 360 ? 12 : 14,
                marginBottom: 25,
                lineHeight: width < 360 ? 20 : 22,
              }}
            >
              We sent a verification code to your email.
              Please enter the 6-digit code below.
            </Text>

            {/* CODE INPUT LABEL */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: inputFontSize,
              }}
            >
              Verification Code
            </Text>

            {/* CODE INPUT */}
            <TextInput
              placeholder="******"
              placeholderTextColor="#9333EA"
              keyboardType="numeric"
              maxLength={6}
              style={{
                backgroundColor: "#FFF2B2",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: width < 360 ? 12 : 14,
                marginBottom: 20,
                fontSize: width < 360 ? 18 : 20,
                letterSpacing: width < 360 ? 5 : 8,
                textAlign: "center",
              }}
            />

            {/* VERIFY BUTTON */}
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 999,
                paddingVertical: width < 360 ? 10 : 12,
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
                Verify
              </Text>
            </TouchableOpacity>

            {/* RESEND */}
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
                  fontSize: width < 360 ? 11 : 12,
                }}
              >
                Didn’t receive the code?{" "}
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: width < 360 ? 11 : 12,
                    fontWeight: "bold",
                  }}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}