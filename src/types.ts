export type TopicGroup = "javascript" | "service" | "react";

export type Topic = {
  title: string;
  detail: string;
  group: TopicGroup;
  level: "START" | "BUILD" | "SHIP";
};

export type RobotStatus = {
  name: string;
  role: string;
  energy: number;
  streak: number;
  completedTopics: number;
  totalTopics: number;
};

export type ProgressState = {
  completed: string[];
  activeTopic: string;
};