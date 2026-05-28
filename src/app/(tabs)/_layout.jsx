import { Tabs } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 18,
          left: 14,
          right: 14,

          height: 78,

          backgroundColor: "#F8F8FA",

          borderRadius: 32,

          paddingHorizontal: 10,
          paddingTop: 10,

          borderTopWidth: 0,

          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 18,
          elevation: 10,
        },

        tabBarShowLabel: false,
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="🏠"
              label="Home"
            />
          ),
        }}
      />

      {/* TASKS */}
      <Tabs.Screen
        name="task"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="✅"
              label="Task"
            />
          ),
        }}
      />

      {/* CALENDAR */}
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="📅"
              label="Calendar"
            />
          ),
        }}
      />

      {/* FINANCE */}
      <Tabs.Screen
        name="finance"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="💰"
              label="Budget"
            />
          ),
        }}
      />

      {/* AI */}
      <Tabs.Screen
        name="ai"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="✨"
              label="AI"
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              icon="👤"
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}

function CustomTabButton(props) {
  const { accessibilityState, onPress } = props;

  const focused = accessibilityState?.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: focused ? 44 : 40,
          height: focused ? 44 : 40,

          borderRadius: 14,

          backgroundColor: focused
            ? "#111114"
            : "transparent",

          justifyContent: "center",
          alignItems: "center",

          transform: [
            {
              scale: focused ? 1 : 0.95,
            },
          ],
        }}
      >
        <Text
          style={{
            fontSize: focused ? 15 : 14,
          }}
        >
          {props.icon}
        </Text>

        <Text
        numberOfLines={1}
          style={{
            fontSize: 7,
            fontWeight: "700",

            color: focused
              ? "#FFFFFF"
              : "#6B7280",
            marginTop: 1,
          }}
        >
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}