import { useState } from "react";
import Header from "./Component/Header";
import imageGoal from "./assets/goals.jpg";
import CourseGoalList from "./Component/CourseGoalList";
import NewGoal from "./Component/newGoal";
export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoal] = useState<CourseGoals[]>([]);
  const handleAdd = (goal:string,summary:string) => {
    setGoal((preGoal) => {
      const newGoal: CourseGoals = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...preGoal, newGoal];
    });
  };

  const handleDelete = (id: number) => {
    setGoal(preGoal=>preGoal.filter(goal=>goal.id!==id))
  }
  return (
    <main>
      <Header image={{ src: imageGoal, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAdd}/>
<CourseGoalList onDelete={handleDelete} goals={goals}/>
    </main>
  );
}
