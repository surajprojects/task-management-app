import "./App.css";
import Navbar from "./components/Navbar";
import TaskInputForm from "./components/TaskInputForm";
import Box from "@mui/material/Box";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ paddingTop: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TaskInputForm />
        <TaskList />
      </Box>
    </>
  )
};

export default App;