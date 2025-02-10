import { useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AllTaskList from "./AllTaskList";
import PendingTaskList from "./PendingTaskList";
import CompletedTaskList from "./CompletedTaskList";

export default function TaskList() {
    const [btn, setBtn] = useState({
        btnAll: true,
        btnPending: false,
        btnCompleted: false,
        btnCategories: false,
    });

    const handleChangeAll = () => {
        setBtn({
            btnAll: true,
            btnPending: false,
            btnCompleted: false,
            btnCategories: false,
        });
    };
    const handleChangePending = () => {
        setBtn({
            btnAll: false,
            btnPending: true,
            btnCompleted: false,
            btnCategories: false,
        });
    };
    const handleChangeCompleted = () => {
        setBtn({
            btnAll: false,
            btnPending: false,
            btnCompleted: true,
            btnCategories: false,
        });
    };

    return (
        <>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button onClick={handleChangeAll}>All</Button>
                <Button onClick={handleChangePending}>Pending</Button>
                <Button onClick={handleChangeCompleted}>Completed</Button>
                <Button>Categories</Button>
            </ButtonGroup>
            <Box sx={{ marginTop: 5 }}>
                {btn.btnAll && <AllTaskList />}
                {btn.btnPending && <PendingTaskList />}
                {btn.btnCompleted && <CompletedTaskList />}
            </Box>
        </>
    );
};