import { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoal = {
    goals: CourseGoals[],
    onDelete:(id:number)=>void
}

export default function CourseGoalList(props:CourseGoal) {
    return (
<ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} description={goal.description} onDelete={props.onDelete}/>
          </li>
        ))}
      </ul>
    )
}