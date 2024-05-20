import { FormEvent, useRef } from "react";
interface NewGoalProp{
onAddGoal:(goal:string,summary:string)=> void
}
export default function NewGoal(props:NewGoalProp) {
    const goal = useRef<HTMLInputElement>(null)
    const summary=useRef<HTMLInputElement>(null)

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        e.currentTarget.reset()
        props.onAddGoal(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}