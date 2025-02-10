import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

export default function TaskInputForm() {
    const [task, setTask] = useState({
        taskName: "",
        taskCategory: "",
        taskDeadline: "",
        isCompleted: false,
    });

    const handleChange = (evt: any) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setTask((currData) => {
            return {
                ...currData,
                [changedField]: newValue
            };
        });
    };

    const handleBtnClick = () => {
        const storedTasks = localStorage.getItem("allTasks");
        const allTasks: {
            id: string,
            taskName: string,
            taskCategory: string,
            taskDeadline: string,
            isCompleted: boolean,
        }[] = storedTasks ? JSON.parse(storedTasks) : [];

        if (!(task.taskName === "") && !(task.taskCategory === "") && !(task.taskDeadline === "")) {
            setTask({
                taskName: "",
                taskCategory: "",
                taskDeadline: "",
                isCompleted: false,
            })
            allTasks.push({
                id: uuidv4(),
                ...task
            });
        }
        localStorage.setItem("allTasks", JSON.stringify(allTasks));
    };

    return (
        <>
            <Box sx={{ width: "25rem", marginBottom: 5 }}>
                <TextField
                    type="text"
                    id="taskName"
                    label="Task Name"
                    name="taskName"
                    variant="standard"
                    value={task.taskName}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                    fullWidth
                />
                <FormControl variant="standard" sx={{ marginBottom: 2 }} fullWidth>
                    <InputLabel id="taskCategory">Category</InputLabel>
                    <Select
                        labelId="taskCategory"
                        id="taskCategory"
                        name="taskCategory"
                        label="Category"
                        value={task.taskCategory}
                        onChange={handleChange}
                    >
                        <MenuItem value={"work"}>Work</MenuItem>
                        <MenuItem value={"personal"}>Personal</MenuItem>
                        <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    type="date"
                    id="taskDeadline"
                    label="Deadline"
                    name="taskDeadline"
                    variant="standard"
                    value={task.taskDeadline}
                    onChange={handleChange}
                    sx={{ marginBottom: 2 }}
                    fullWidth
                />
                <Button type="button" onClick={handleBtnClick} variant="contained">Add Task</Button>
            </Box>
        </>
    );
};