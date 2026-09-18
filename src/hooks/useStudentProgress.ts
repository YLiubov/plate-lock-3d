import { useMemo, useState } from "react";
import type { ProgressState, RobotStatus } from "../types";

const initialState: ProgressState = {
  completed: ["variable", "constant", "component", "props"],
  activeTopic: "promises"
};

export function useStudentProgress() {
  const [progress, setProgress] = useState<ProgressState>(initialState);

  const robot = useMemo<RobotStatus>(() => {
    const totalTopics = 18;
    const completedTopics = progress.completed.length;
    return {
      name: "R-03 / STUDENT",
      role: "frontend learning unit",
      energy: Math.min(100, 64 + completedTopics * 4),
      streak: 4,
      completedTopics,
      totalTopics
    };
  }, [progress.completed.length]);

  const completeTopic = (topic: string) => {
    setProgress((current) => current.completed.includes(topic)
      ? current
      : { ...current, completed: [...current.completed, topic] });
  };

  return { progress, robot, completeTopic };
}

export default useStudentProgress;