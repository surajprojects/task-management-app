import Task from "./Task";

export default function CompletedTaskList() {
    const storedTasks = localStorage.getItem("allTasks");
    const allTasks: {
        id: string,
        taskName: string,
        taskCategory: string,
        taskDeadline: string,
        isCompleted: boolean,
    }[] = storedTasks ? JSON.parse(storedTasks) : [];
    const completedTasks = allTasks.filter((task) => {
        if (task.isCompleted === true) {
            return task;
        }
    });
    return (
        <>
            {completedTasks.length > 0 ? (
                completedTasks.map((task) => (
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