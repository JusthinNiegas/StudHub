import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function TaskScreen() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  const [activeFilter, setActiveFilter] =
    useState("All");

  const filters = [
    "All",
    "Pending",
    "Completed",
    "Overdue",
    "Due",
  ];

  const taskData = [
    {
      title: "Submit IT project proposal",
      subtitle:
        "Complete all sections and attach diagram",
      category: "School",
      due: "Today",
      progress: 65,
      priority: "HIGH",
      priorityColor: "#FF5B6E",
      progressColor: "#7C3AED",
      completed: false,
      subtasks: [
        {
          text: "Write introduction",
          done: true,
        },
        {
          text: "System architecture diagram",
          done: true,
        },
        {
          text: "Budget estimation",
          done: false,
        },
      ],
    },

    {
      title: "Send weekly status report",
      subtitle:
        "Include blockers and wins from this week",
      category: "Work",
      due: "6:00 PM",
      priority: "HIGH",
      priorityColor: "#FF5B6E",
      completed: false,
    },

    {
      title: "Reply to client email — Q3 scope",
      category: "Work",
      due: "Today · 8:00 PM",
      priority: "MEDIUM",
      priorityColor: "#F6B93B",
      completed: false,
    },

    {
      title: "Update Jira tickets for sprint review",
      category: "Work",
      due: "Overdue",
      priority: "LOW",
      priorityColor: "#34D399",
      completed: false,
    },

    {
      title: "Read Chapter 7 – Data Structures",
      subtitle: "Focus on BST and heap sections",
      category: "School",
      due: "Tomorrow · 9:00 PM",
      progress: 30,
      progressColor: "#7C3AED",
      priority: "MEDIUM",
      priorityColor: "#F6B93B",
      completed: false,
      subtasks: [
        {
          text: "BST traversal notes",
          done: true,
        },
        {
          text: "Heap sort examples",
          done: false,
        },
        {
          text: "Chapter quiz",
          done: false,
        },
      ],
    },

    {
      title: "30-min walk or stretch",
      subtitle:
        "Take a break, reset your mind 🙏",
      category: "Personal",
      due: "Today · 7:00 AM",
      progress: 100,
      progressColor: "#059669",
      priority: "LOW",
      priorityColor: "#34D399",
      completed: true,
    },
  ];

  const completedTasks = taskData.filter((t) => t.completed);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D9D4F3",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          maxWidth: isTablet ? 680 : 430,
          alignSelf: "center",
          backgroundColor: "#F5F4FF",
          borderRadius: isTablet ? 28 : 0,
          overflow: "hidden",
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
              "#5B4CF4",
              "#7B6CF6",
              "#6FA6FF",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              paddingTop: 58,
              paddingHorizontal: 24,
              paddingBottom: 30,
              borderBottomLeftRadius: 34,
              borderBottomRightRadius: 34,
              overflow: "hidden",
            }}
          >
            {/* BACKGROUND CIRCLE */}
            <View
              style={{
                position: "absolute",
                top: -80,
                right: -40,
                width: 220,
                height: 220,
                borderRadius: 999,
                backgroundColor:
                  "rgba(255,255,255,0.08)",
              }}
            />

            {/* TOP */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 28,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 14,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "700",
                  }}
                >
                  ←
                </Text>
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: "700",
                    fontSize: 14,
                    marginBottom: 2,
                  }}
                >
                  STUDHUB
                </Text>

                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: isTablet ? 42 : 26,
                  }}
                >
                  My Tasks ✅
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  🔍
                </Text>
              </TouchableOpacity>
            </View>

            {/* STATS */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              {[
                {
                  number: "10",
                  label: "TOTAL\nTASKS",
                  sub: "This week",
                },

                {
                  number: "3",
                  label: "COMPLETED",
                  sub: "Today",
                },

                {
                  number: "1",
                  label: "OVERDUE",
                  sub: "Needs action",
                },
              ].map((item, index) => (
                <View
                  key={index}
                  style={{
                    width: "23%",
                    backgroundColor:
                      "rgba(255,255,255,0.12)",
                    borderRadius: 22,
                    padding: 16,
                    borderWidth: 1,
                    borderColor:
                      "rgba(255,255,255,0.12)",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "800",
                      color:
                        index === 2
                          ? "#FFB4B4"
                          : "white",
                    }}
                  >
                    {item.number}
                  </Text>

                  <Text
                    style={{
                      color:
                        "rgba(255,255,255,0.8)",
                      fontSize: 11,
                      fontWeight: "700",
                      marginTop: 6,
                    }}
                  >
                    {item.label}
                  </Text>

                  <Text
                    style={{
                      color:
                        "rgba(255,255,255,0.65)",
                      fontSize: 11,
                      marginTop: 3,
                    }}
                  >
                    {item.sub}
                  </Text>
                </View>
              ))}

              {/* CIRCLE */}
              <View
                style={{
                  width: "23%",
                  backgroundColor:
                    "rgba(255,255,255,0.12)",
                  borderRadius: 22,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor:
                    "rgba(255,255,255,0.12)",
                }}
              >
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 999,
                    borderWidth: 6,
                    borderColor:
                      "rgba(255,255,255,0.25)",
                    borderTopColor: "#C084FC",
                    transform: [
                      {
                        rotate: "35deg",
                      },
                    ],
                    marginBottom: 10,
                  }}
                />

                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: 24,
                  }}
                >
                  30%
                </Text>

                <Text
                  style={{
                    color:
                      "rgba(255,255,255,0.75)",
                    fontWeight: "700",
                    fontSize: 11,
                  }}
                >
                  DONE
                </Text>
              </View>
            </View>

            {/* CATEGORIES */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {[
                "All",
                "School",
                "Work",
                "Personal",
              ].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    marginRight: 28,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: 16,
                      }}
                    >
                      {item}
                    </Text>

                    <View
                      style={{
                        marginLeft: 8,
                        backgroundColor:
                          "rgba(255,255,255,0.22)",
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        borderRadius: 999,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 11,
                          fontWeight: "700",
                        }}
                      >
                        {index === 0
                          ? 10
                          : index === 1
                          ? 4
                          : index === 2
                          ? 3
                          : 3}
                      </Text>
                    </View>
                  </View>

                  {index === 0 && (
                    <View
                      style={{
                        height: 4,
                        backgroundColor: "white",
                        borderRadius: 999,
                        marginTop: 14,
                      }}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </LinearGradient>

          {/* FILTERS */}
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 18,
              marginTop: 18,
              marginBottom: 16,
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {filters.map((filter, index) => {
                const active =
                  activeFilter === filter;

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      setActiveFilter(filter)
                    }
                    style={{
                      backgroundColor: active
                        ? "#6C63FF"
                        : "#F1F1F4",

                      paddingHorizontal: 18,
                      paddingVertical: 12,
                      borderRadius: 999,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: active
                          ? "white"
                          : "#6B7280",
                        fontWeight: "700",
                      }}
                    >
                      {filter}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* TODAY */}
          <View
            style={{
              paddingHorizontal: 18,
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "800",
                fontSize: 15,
                marginBottom: 14,
              }}
            >
              🗓 TODAY
            </Text>

            {taskData.map((task, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: 28,
                  padding: 18,
                  marginBottom: 18,
                  shadowColor: "#000",
                  shadowOpacity: 0.03,
                  shadowRadius: 10,
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  {/* CHECK */}
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 9,
                      borderWidth: 2,
                      borderColor: task.completed
                        ? "#0F9D8A"
                        : "#D1D5DB",
                      backgroundColor: task.completed
                        ? "#0F9D8A"
                        : "white",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 14,
                      marginTop: 2,
                    }}
                  >
                    {task.completed && (
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "800",
                        }}
                      >
                        ✓
                      </Text>
                    )}
                  </View>

                  <View style={{ flex: 1 }}>
                    {/* TITLE */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "800",
                          color: "#20214F",
                          textDecorationLine:
                            task.completed
                              ? "line-through"
                              : "none",
                          opacity: task.completed
                            ? 0.5
                            : 1,
                        }}
                      >
                        {task.title}
                      </Text>

                      <View
                        style={{
                          backgroundColor:
                            task.priorityColor +
                            "25",
                          paddingHorizontal: 12,
                          paddingVertical: 5,
                          borderRadius: 999,
                          marginLeft: 10,
                        }}
                      >
                        <Text
                          style={{
                            color:
                              task.priorityColor,
                            fontSize: 12,
                            fontWeight: "800",
                          }}
                        >
                          {task.priority}
                        </Text>
                      </View>
                    </View>

                    {/* SUBTITLE */}
                    {task.subtitle && (
                      <Text
                        style={{
                          color: "#6B7280",
                          marginTop: 6,
                          fontSize: 14,
                          lineHeight: 20,
                        }}
                      >
                        {task.subtitle}
                      </Text>
                    )}

                    {/* TAGS */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:
                            "#EEF2FF",
                          borderRadius: 999,
                          paddingHorizontal: 12,
                          paddingVertical: 5,
                          marginRight: 10,
                          marginBottom: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#4F46E5",
                            fontWeight: "700",
                            fontSize: 12,
                          }}
                        >
                          🎓 {task.category}
                        </Text>
                      </View>

                      <Text
                        style={{
                          color:
                            task.due === "Overdue"
                              ? "#FF4D67"
                              : "#6B7280",
                          fontWeight: "700",
                        }}
                      >
                        ⏰ {task.due}
                      </Text>
                    </View>

                    {/* PROGRESS */}
                    {task.progress !== undefined && (
                      <>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent:
                              "space-between",
                            marginTop: 18,
                            marginBottom: 8,
                          }}
                        >
                          <Text
                            style={{
                              color: "#6B7280",
                              fontWeight: "700",
                            }}
                          >
                            Progress
                          </Text>

                          <Text
                            style={{
                              color: "#6366F1",
                              fontWeight: "800",
                            }}
                          >
                            {task.progress}%
                          </Text>
                        </View>

                        <View
                          style={{
                            height: 5,
                            backgroundColor:
                              "#E5E7EB",
                            borderRadius: 999,
                            overflow: "hidden",
                            marginBottom: 14,
                          }}
                        >
                          <View
                            style={{
                              width: `${task.progress}%`,
                              height: "100%",
                              backgroundColor:
                                task.progressColor,
                            }}
                          />
                        </View>
                      </>
                    )}

                    {/* SUBTASKS */}
                    {task.subtasks?.map(
                      (subtask, i) => (
                        <View
                          key={i}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 8,
                          }}
                        >
                          <View
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: 7,
                              borderWidth: 1.5,
                              borderColor:
                                subtask.done
                                  ? "#0F9D8A"
                                  : "#D1D5DB",
                              backgroundColor:
                                subtask.done
                                  ? "#0F9D8A"
                                  : "white",
                              justifyContent:
                                "center",
                              alignItems:
                                "center",
                              marginRight: 10,
                            }}
                          >
                            {subtask.done && (
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 10,
                                }}
                              >
                                ✓
                              </Text>
                            )}
                          </View>

                          <Text
                            style={{
                              color:
                                subtask.done
                                  ? "#9CA3AF"
                                  : "#20214F",
                              textDecorationLine:
                                subtask.done
                                  ? "line-through"
                                  : "none",
                              fontSize: 14,
                            }}
                          >
                            {subtask.text}
                          </Text>
                        </View>
                      )
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
          {/* Completed Tasks */ }
          <View
            style={{
              paddingHorizontal: 18,
              marginTop: 40,
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "800",
                fontSize: 15,
                marginBottom: 14,
              }}
            >
              ✅ COMPLETED
            </Text>

            {completedTasks.map((task, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: 28,
                  padding: 18,
                  marginBottom: 18,
                  shadowColor: "#000",
                  shadowOpacity: 0.03,
                  shadowRadius: 10,
                  elevation: 2,
                  opacity: 0.8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  {/* CHECK */}
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 9,
                      borderWidth: 2,
                      borderColor: "#0F9D8A",
                      backgroundColor: "#0F9D8A",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 14,
                      marginTop: 2,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "800",
                      }}
                    >
                      ✓
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    {/* TITLE */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Text
                        style={{
                          flex: 1,
                          fontSize: 16,
                          fontWeight: "800",
                          color: "#20214F",
                          textDecorationLine:
                            "line-through",
                          opacity: 0.5,
                        }}
                      >
                        {task.title}
                      </Text>
                      <View
                        style={{
                          backgroundColor:
                            task.priorityColor +
                            "25",
                          paddingHorizontal: 12,
                          paddingVertical: 5,
                          borderRadius: 999,
                          marginLeft: 10,
                        }}
                      >
                        <Text
                          style={{
                            color:
                              task.priorityColor,
                            fontSize: 12,
                            fontWeight: "800",
                          }}
                        >
                          {task.priority}
                        </Text>
                      </View>
                    </View>
                    {/* SUBTITLE */}
                    {task.subtitle && (
                      <Text
                        style={{
                          color: "#6B7280",
                          marginTop: 6,
                          fontSize: 14,
                          lineHeight: 20,
                        }}
                      >
                        {task.subtitle}
                      </Text>
                    )}
                    {/* TAGS */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor:
                            "#EEF2FF",
                          borderRadius: 999,
                          paddingHorizontal: 12,
                          paddingVertical: 5,
                          marginRight: 10,
                          marginBottom: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#4F46E5",
                            fontWeight: "700",
                            fontSize: 12,
                          }}
                        >
                          🎓 {task.category}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: "#6B7280",
                          fontWeight: "700",
                        }}
                      >
                        ⏰ {task.due}
                      </Text>
                    </View>
                  {/* PROGRESS */}
                  {task.progress !== undefined && (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent:
                            "space-between",
                          marginTop: 18,
                          marginBottom: 8,
                        }}
                      >
                        <Text
                          style={{
                            color: "#6B7280",
                            fontWeight: "700",
                          }}
                        >
                          Progress
                        </Text>
                        <Text
                          style={{
                            color: "#6366F1",
                            fontWeight: "800",
                          }}
                        >
                          {task.progress}%
                        </Text>
                      </View>
                      <View
                        style={{
                          height: 5,
                          backgroundColor:
                            "#E5E7EB",
                          borderRadius: 999,
                          overflow: "hidden",
                          marginBottom: 14,
                        }}
                      >
                        <View
                          style={{
                            width: `${task.progress}%`,
                            height: "100%",
                            backgroundColor:
                              "#059669",
                          }}
                        />
                      </View>
                    </>
                  )}
                  {/* SUBTASKS */}
                  {task.subtasks?.map(
                    (subtask, i) => (
                      <View
                        key={i}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginBottom: 8,
                        }}
                      >
                        <View
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 7,
                            borderWidth: 1.5,
                            borderColor: "#0F9D8A",
                            backgroundColor: "#0F9D8A",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 10,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 10,
                            }}
                          >
                            ✓
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "#9CA3AF",
                            textDecorationLine:
                              "line-through",
                            fontSize: 14,
                          }}
                        >
                          {subtask.text}
                        </Text>
                      </View>
                    )
                  )}
                  </View>
                </View>
              </View>
            ))}
          </View>


        </ScrollView>

        {/* FLOATING BUTTON */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 100,
            right: 24,
            width: 72,
            height: 72,
            borderRadius: 999,
            backgroundColor: "#7C63FF",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#7C63FF",
            shadowOpacity: 0.45,
            shadowRadius: 18,
            elevation: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 34,
              fontWeight: "300",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}