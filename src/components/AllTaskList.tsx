import Task from "./Task";

export default function AllTaskList() {
    const storedTasks = localStorage.getItem("allTasks");
    const allTasks: {
        id: string,
        taskName: string,
        taskCategory: string,
        taskDeadline: string,
        isCompleted: boolean,
    }[] = storedTasks ? JSON.parse(storedTasks) : [];
    return (
        <>
            {allTasks.length > 0 ? (
                allTasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        taskName={task.taskName}
                        category={task.taskCategory}
                        deadline={task.taskDeadline}
                        isDone={task.isCompleted}
                    />
                ))
            ) : (
                <p>No tasks available!!!</p>
            )}
        </>
    );
};