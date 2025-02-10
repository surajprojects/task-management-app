import Task from "./Task";

export default function PendingTaskList() {
    const storedTasks = localStorage.getItem("allTasks");
    const allTasks: {
        id: string,
        taskName: string,
        taskCategory: string,
        taskDeadline: string,
        isCompleted: boolean,
    }[] = storedTasks ? JSON.parse(storedTasks) : [];
    const pendingTasks = allTasks.filter((task) => {
        if (task.isCompleted === false) {
            return task;
        }
    });
    return (
        <>
            {pendingTasks.length > 0 ? (
                pendingTasks.map((task) => (
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