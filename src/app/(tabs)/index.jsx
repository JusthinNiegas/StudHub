import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  const [activeNav, setActiveNav] = useState("Home");

  const tasksData = [
    {
      id: 1,
      title: "Submit IT project proposal",
      time: "5:00 PM",
      category: "School",
      icon: "🎓",
      priority: "#EF4444",
      categoryColor: "#7C3AED",
    },
    {
      id: 2,
      title: "Send weekly status report",
      time: "6:00 PM",
      category: "Work",
      icon: "💼",
      priority: "#EF4444",
      categoryColor: "#3B82F6",
    },
    {
      id: 3,
      title: "Read Chapter 7 – Data Structures",
      time: "9:00 PM",
      category: "School",
      icon: "📖",
      priority: "#F59E0B",
      categoryColor: "#7C3AED",
    },
    {
      id: 4,
      title: "30-min walk or stretch",
      time: "7:00 AM",
      category: "Health",
      icon: "🏃",
      priority: "#10B981",
      categoryColor: "#14B8A6",
    },
  ];

  const [completedTasks, setCompletedTasks] = useState([4]);

  const toggleTask = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(
        completedTasks.filter((taskId) => taskId !== id)
      );
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const quickActions = [
    {
      icon: "✅",
      label: "Add Task",
      colors: ["#6C63FF", "#8B7FFF"],
    },
    {
      icon: "📅",
      label: "Calendar",
      colors: ["#3B82F6", "#60A5FA"],
    },
    {
      icon: "✨",
      label: "AI Chat",
      colors: ["#7C3AED", "#A78BFA"],
    },
    {
      icon: "💰",
      label: "Budget",
      colors: ["#F59E0B", "#FCD34D"],
    },
    {
      icon: "📝",
      label: "Notes",
      colors: ["#14B8A6", "#5EEAD4"],
    },
    {
      icon: "🔔",
      label: "Reminders",
      colors: ["#F43F5E", "#FB7185"],
    },
  ];

  const navItems = [
    { icon: "🏠", label: "Home" },
    { icon: "✅", label: "Task" },
    { icon: "📅", label: "Calendar" },
    { icon: "💰", label: "Budget" },
    { icon: "✨", label: "AI" },
    { icon: "👤", label: "Profile" },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E0DFFF",
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 430,
          width: "100%",
          alignSelf: "center",
          backgroundColor: "#F5F4FF",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          {/* HEADER */}
          <LinearGradient
            colors={[
              "#4F46E5",
              "#6C63FF",
              "#8B7FFF",
              "#60A5FA",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              paddingTop: 60,
              paddingHorizontal: 20,
              paddingBottom: 24,
              borderBottomLeftRadius: 28,
              borderBottomRightRadius: 28,
            }}
          >
            {/* HEADER TOP */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: isTablet ? 32 : 24,
                    fontWeight: "800",
                    color: "white",
                  }}
                >
                  Hi James 👋
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.72)",
                    marginTop: 3,
                    fontWeight: "500",
                  }}
                >
                  Ready to conquer today?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* NOTIF */}
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 99,
                    backgroundColor:
                      "rgba(255,255,255,0.18)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 18 }}>🔔</Text>

                  <View
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 99,
                      backgroundColor: "#F43F5E",
                      position: "absolute",
                      top: 7,
                      right: 7,
                    }}
                  />
                </TouchableOpacity>

                {/* AVATAR */}
                <View
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 99,
                    backgroundColor: "#A78BFA",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                    }}
                  >
                    JJ
                  </Text>
                </View>
              </View>
            </View>

            {/* OVERVIEW CARD */}
            <View
              style={{
                backgroundColor:
                  "rgba(255,255,255,0.16)",
                borderRadius: 22,
                padding: 16,
                borderWidth: 1,
                borderColor:
                  "rgba(255,255,255,0.22)",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Monday, May 25
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color:
                        "rgba(255,255,255,0.68)",
                      marginTop: 4,
                    }}
                  >
                    Next: IT Proposal • 5:00 PM
                  </Text>
                </View>

                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 99,
                    backgroundColor:
                      "rgba(255,255,255,0.18)",
                    borderWidth: 3,
                    borderColor:
                      "rgba(255,255,255,0.55)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 13,
                    }}
                  >
                    72%
                  </Text>

                  <Text
                    style={{
                      fontSize: 9,
                      color:
                        "rgba(255,255,255,0.65)",
                    }}
                  >
                    Done
                  </Text>
                </View>
              </View>

              {/* PROGRESS */}
              <View
                style={{
                  height: 6,
                  backgroundColor:
                    "rgba(255,255,255,0.2)",
                  borderRadius: 99,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "72%",
                    backgroundColor:
                      "rgba(255,255,255,0.9)",
                    borderRadius: 99,
                  }}
                />
              </View>
            </View>
          </LinearGradient>

          {/* BODY */}
          <View
            style={{
              paddingHorizontal: 16,
              paddingTop: 20,
            }}
          >
            {/* QUICK ACTIONS */}
            <View style={{ marginBottom: 24 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  marginBottom: 12,
                  color: "#1E1B4B",
                }}
              >
                Quick Actions
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                {quickActions.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      width: "30%",
                      alignItems: "center",
                    }}
                  >
                    <LinearGradient
                      colors={item.colors}
                      style={{
                        width: "100%",
                        aspectRatio: 1,
                        borderRadius: 16,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={{ fontSize: 22 }}>
                        {item.icon}
                      </Text>
                    </LinearGradient>

                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: "700",
                        color: "#1E1B4B",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* TASKS */}
            <View style={{ marginBottom: 24 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#1E1B4B",
                  }}
                >
                  Today's Tasks
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: "#6366F1",
                  }}
                >
                  See all →
                </Text>
              </View>

              {tasksData.map((task) => {
                const isDone =
                  completedTasks.includes(task.id);

                return (
                  <TouchableOpacity
                    key={task.id}
                    onPress={() => toggleTask(task.id)}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 16,
                      padding: 14,
                      marginBottom: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 7,
                        borderWidth: 2,
                        borderColor: isDone
                          ? "#14B8A6"
                          : "#E5E7EB",
                        backgroundColor: isDone
                          ? "#14B8A6"
                          : "white",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 12,
                      }}
                    >
                      {isDone && (
                        <Text
                          style={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "800",
                          }}
                        >
                          ✓
                        </Text>
                      )}
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          marginBottom: 6,
                          color: isDone
                            ? "#9CA3AF"
                            : "#1E1B4B",
                          textDecorationLine: isDone
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {task.icon} {task.title}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <View
                          style={{
                            backgroundColor:
                              task.categoryColor + "22",
                            borderRadius: 99,
                            paddingHorizontal: 9,
                            paddingVertical: 2,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: "700",
                              color: task.categoryColor,
                            }}
                          >
                            {task.category}
                          </Text>
                        </View>

                        <Text
                          style={{
                            fontSize: 11,
                            color: "#9CA3AF",
                          }}
                        >
                          ⏰ {task.time}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: 99,
                        backgroundColor: task.priority,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* FINANCE */}
            <View style={{ marginBottom: 24 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#1E1B4B",
                  }}
                >
                  Budget Overview
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#6366F1",
                    }}
                  >
                    Details →
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 28,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowRadius: 12,
                  elevation: 3,
                }}
              >
                {/* TOP ROW */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 18,
                  }}
                >
                  <LinearGradient
                    colors={["#F59E0B", "#FCD34D"]}
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 14,
                    }}
                  >
                    <Text style={{ fontSize: 24 }}>💰</Text>
                  </LinearGradient>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: "#9CA3AF",
                        marginBottom: 3,
                      }}
                    >
                      REMAINING ALLOWANCE
                    </Text>

                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "800",
                        color: "#1E1B4B",
                      }}
                    >
                      ₱1,240.00
                    </Text>
                  </View>

                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: "#9CA3AF",
                        marginBottom: 3,
                      }}
                    >
                      WEEKLY SPENT
                    </Text>

                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "800",
                        color: "#F43F5E",
                      }}
                    >
                      ₱834.00
                    </Text>
                  </View>
                </View>

                {/* SAVINGS */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#1E1B4B",
                    }}
                  >
                    Savings Goal
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "800",
                      color: "#14B8A6",
                    }}
                  >
                    ₱480 / ₱2,000
                  </Text>
                </View>

                {/* PROGRESS BAR */}
                <View
                  style={{
                    height: 8,
                    backgroundColor: "#E9EAFE",
                    borderRadius: 99,
                    overflow: "hidden",
                    marginBottom: 6,
                  }}
                >
                  <LinearGradient
                    colors={["#14B8A6", "#5EEAD4"]}
                    style={{
                      width: "24%",
                      height: "100%",
                      borderRadius: 99,
                    }}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 11,
                    color: "#9CA3AF",
                    fontWeight: "600",
                    marginBottom: 18,
                  }}
                >
                  24% of monthly goal
                </Text>

                {/* CATEGORY CARDS */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {[
                    {
                      icon: "🍚",
                      value: "₱285",
                      label: "Food",
                      color: "#F59E0B",
                    },
                    {
                      icon: "🚌",
                      value: "₱80",
                      label: "Transpo",
                      color: "#3B82F6",
                    },
                    {
                      icon: "📡",
                      value: "₱99",
                      label: "Internet",
                      color: "#7C3AED",
                    },
                    {
                      icon: "📚",
                      value: "₱350",
                      label: "School",
                      color: "#14B8A6",
                    },
                  ].map((item, index) => (
                    <View
                      key={index}
                      style={{
                        width: "23%",
                        backgroundColor: "#F5F4FF",
                        borderRadius: 16,
                        paddingVertical: 14,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          marginBottom: 6,
                        }}
                      >
                        {item.icon}
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "800",
                          color: item.color,
                        }}
                      >
                        {item.value}
                      </Text>

                      <Text
                        style={{
                          fontSize: 11,
                          color: "#9CA3AF",
                          marginTop: 3,
                          fontWeight: "500",
                        }}
                      >
                        {item.label}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* AI CARD */}
            <View style={{ marginBottom: 24 }}>
              <LinearGradient
                colors={["#4F46E5", "#6C63FF", "#8B7FFF"]}
                style={{
                  borderRadius: 24,
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "800",
                    marginBottom: 10,
                  }}
                >
                  StudHub AI
                </Text>

                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    marginBottom: 18,
                  }}
                >
                  How can I help you today?
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor:
                      "rgba(255,255,255,0.12)",
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    borderRadius: 999,
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Ask me anything...
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* BURNOUT TIP */}
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 16,
                padding: 14,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  marginRight: 12,
                }}
              >
                💡
              </Text>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "700",
                    color: "#1E1B4B",
                    marginBottom: 3,
                  }}
                >
                  Burnout Tip of the Day
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: "#9CA3AF",
                    lineHeight: 18,
                    fontWeight: "500",
                  }}
                >
                  Take a 5-min break every 90 minutes.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <View
          style={{
            position: "absolute",
            bottom: 18,
            left: 12,
            right: 12,
            backgroundColor: "rgba(255,255,255,0.95)",
            borderRadius: 32,
            paddingHorizontal: 8,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          {navItems.map((item, index) => {
            const active = activeNav === item.label;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveNav(item.label)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {active ? (
                  <LinearGradient
                    colors={["#111827", "#1F2937"]}
                    style={{
                      paddingVertical: 10,
                      width: 54,
                      borderRadius: 18,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        marginBottom: 2,
                      }}
                    >
                      {item.icon}
                    </Text>

                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        fontWeight: "700",
                      }}
                    >
                      {item.label}
                    </Text>
                  </LinearGradient>
                ) : (
                  <>
                    <Text
                      style={{
                        fontSize: 18,
                        marginBottom: 2,
                      }}
                    >
                      {item.icon}
                    </Text>

                    <Text
                      style={{
                        color: "#6B7280",
                        fontSize: 10,
                        fontWeight: "600",
                      }}
                    >
                      {item.label}
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}