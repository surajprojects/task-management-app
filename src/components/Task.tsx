import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

export default function Task({
    id = "#",
    isDone = false,
    taskName = "Task Name",
    category = "Work",
    deadline = "9-Feb-2025",
}) {
    const [isCompleted, setIsCompleted] = useState(isDone);
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editTask, setEditTask] = useState(taskName);

    const handleEdit = () => {
        setToggleEdit(!toggleEdit);
    };

    const handleCancel = () => {
        setEditTask(taskName);
        handleEdit();
    };

    const handleEditSubmit = () => {
        const storedTasks = localStorage.getItem("allTasks");
        const allTasks: {
            id: string,
            taskName: string,
            taskCategory: string,
            taskDeadline: string,
            isCompleted: boolean,
        }[] = storedTasks ? JSON.parse(storedTasks) : [];
        const newTasks = allTasks.map((task) => {
            if (task.id === id) {
                task.taskName = editTask;
                return task;
            }
            else {
                return task;
            }
        });
        localStorage.setItem("allTasks", JSON.stringify(newTasks));
        handleEdit();
    };

    const handleDelete = () => {
        const storedTasks = localStorage.getItem("allTasks");
        const allTasks: {
            id: string,
            taskName: string,
            taskCategory: string,
            taskDeadline: string,
            isCompleted: boolean,
        }[] = storedTasks ? JSON.parse(storedTasks) : [];
        const newTasks = allTasks.filter((task) => {
            if (task.id !== id) {
                return task;
            }
        });
        localStorage.setItem("allTasks", JSON.stringify(newTasks));
    };

    const handleCheck = () => {
        setIsCompleted(!isCompleted);
        const storedTasks = localStorage.getItem("allTasks");
        const allTasks: {
            id: string,
            taskName: string,
            taskCategory: string,
            taskDeadline: string,
            isCompleted: boolean,
        }[] = storedTasks ? JSON.parse(storedTasks) : [];
        const newTasks = allTasks.map((task) => {
            if (task.id === id) {
                task.isCompleted = !isCompleted;
                return task;
            }
            else {
                return task;
            }
        });
        localStorage.setItem("allTasks", JSON.stringify(newTasks));
    };

    return (
        <>
            <Card sx={{ m: 3, display: "flex" }}>
                <CardActions>
                    <Checkbox checked={isCompleted} onChange={handleCheck} />
                </CardActions>
                <CardContent sx={{ display: "flex" }}>
                    {toggleEdit ?
                        <TextField
                            type="text"
                            id="taskName"
                            label="Task Name"
                            name="taskName"
                            variant="standard"
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                        />
                        :
                        <Typography>
                            {taskName}
                        </Typography>
                    }
                    <Chip label={category} color="secondary" sx={{ marginX: 2, cursor: "pointer" }} />
                    <Typography>
                        {deadline}
                    </Typography>
                </CardContent>
                <CardActions>
                    {toggleEdit ?
                        <>
                            <Tooltip title="Done" onClick={handleEditSubmit}>
                                <IconButton>
                                    <DoneOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Cancel" onClick={handleCancel}>
                                <IconButton>
                                    <CancelOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </>
                        :
                        <>
                            <Tooltip title="Edit" onClick={handleEdit}>
                                <IconButton>
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" onClick={handleDelete}>
                                <IconButton>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </>
                    }
                </CardActions>
            </Card >
        </>
    );
};