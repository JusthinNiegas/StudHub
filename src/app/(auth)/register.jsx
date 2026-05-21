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
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen() {
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
            }}
          >
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
              Sign Up
            </Text>

            {/* NAME */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: 16,
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
                paddingVertical: 14,
                marginBottom: 14,
                fontSize: 16,
              }}
            />

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
              placeholder="hello@reallygreatsite.com"
              placeholderTextColor="#9333EA"
              style={{
                backgroundColor: "#FFD6F5",
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
              secureTextEntry
              placeholder="******"
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

            {/* CONFIRM PASSWORD */}
            <Text
              style={{
                color: "white",
                marginBottom: 8,
                fontSize: 16,
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
                paddingVertical: 14,
                marginBottom: 18,
                fontSize: 16,
              }}
            />

            {/* BOTTOM SECTION */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* LEFT TEXT */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 11,
                  }}
                >
                  Already have an account?{" "}
                </Text>

                {/* ONLY SIGN IN IS TOUCHABLE */}
                <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 11,
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
                  paddingHorizontal: 22,
                  paddingVertical: 7,
                }}
                onPress={() => router.push("/(auth)/verify")}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
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