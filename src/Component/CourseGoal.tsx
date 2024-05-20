interface CourseGoalProps{
    id: number;
    title: string;
    description: string;
    onDelete:(id:number)=>void
}
export default function CourseGoal(props:CourseGoalProps){
    return (
        <article>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <button onClick={()=>props.onDelete(props.id)}>Delete</button>
    </article>
)
}