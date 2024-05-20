import { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";
type CourseGoal = {
  goals: CourseGoals[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList(props: CourseGoal) {
  if (props.goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet.Start adding some
      </InfoBox>
    );
    }
    let warningBox: ReactNode;
    if (props.goals.length>=4) {
      warningBox=  <InfoBox mode="warning" severity="high">
        You are collecting a lot of goals.Don't put too much.
      </InfoBox>
    }
    return (
        <>
            {warningBox}
    <ul>
      {props.goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDelete={props.onDelete}
          />
        </li>
      ))}
            </ul>
        </>
  );
}
