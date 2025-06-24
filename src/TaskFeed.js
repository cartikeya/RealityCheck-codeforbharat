// src/TaskFeed.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function TaskFeed() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const taskList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(taskList);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Open Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Be the first to post one!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p className="text-gray-700 mt-1">{task.description}</p>
              <p className="mt-2">
                <strong>Skill Offered:</strong> {task.skill_offered}
              </p>
              <p>
                <strong>Deadline:</strong> {task.deadline}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Posted by: {task.creator_name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskFeed;