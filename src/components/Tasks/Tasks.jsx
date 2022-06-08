import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import axios from "axios"

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [data,setData] = useState([])

  useEffect(()=>{
    getData()
  },[])


  async function getData(){
    let result = axios.get("http://localhost:8080/data")
    console.log(result)
  }


  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
