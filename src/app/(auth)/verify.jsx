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
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function VerifyScreen() {
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
              backgroundColor: "#F3F4F6",
              position: "relative",
            }}
          >
            {/* BACK BUTTON */}
            <TouchableOpacity
              onPress={() => router.push("/(auth)/register")}
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
                ❮
              </Text>
            </TouchableOpacity>

            {/* TEXT */}
            <Text
              style={{
                color: "#8B5CF6",
                fontSize: 14,
                marginTop: 18,
                marginBottom: 2,
              }}
            >
              Verify your account
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
              paddingBottom: 28,
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
                marginBottom: 10,
              }}
            >
              Verification
            </Text>

            {/* DESCRIPTION */}
            <Text
              style={{
                color: "white",
                fontSize: 14,
                marginBottom: 25,
                lineHeight: 22,
              }}
            >
              We sent a verification code to your email.
              Please enter the 6-digit code below.
            </Text>

            {/* CODE INPUT */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: 16,
              }}
            >
              Verification Code
            </Text>

            <TextInput
              placeholder="******"
              placeholderTextColor="#9333EA"
              keyboardType="numeric"
              maxLength={6}
              style={{
                backgroundColor: "#FFF2B2",
                borderRadius: 999,
                paddingHorizontal: 20,
                paddingVertical: 14,
                marginBottom: 20,
                fontSize: 20,
                letterSpacing: 8,
                textAlign: "center",
              }}
            />

            {/* VERIFY BUTTON */}
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 999,
                paddingVertical: 12,
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
                Verify
              </Text>
            </TouchableOpacity>

            {/* RESEND */}
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
                Didn’t receive the code?{" "}
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
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