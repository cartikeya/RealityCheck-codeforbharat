// src/PostTask.js
import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function PostTask({ user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skillOffered, setSkillOffered] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting task..."); // add this

    try {
      await addDoc(collection(db, "tasks"), {
        title,
        description,
        skill_offered: skillOffered,
        deadline,
        created_by: user.uid,
        creator_name: user.displayName,
        status: "open",
        timestamp: serverTimestamp(),
      });

      setTitle("");
      setDescription("");
      setSkillOffered("");
      setDeadline("");
      alert("Task posted successfully!");
    } catch (err) {
      console.error("Error posting task:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Post a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border w-full p-2"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border w-full p-2"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          className="border w-full p-2"
          type="text"
          placeholder="Skill Offered in Return"
          value={skillOffered}
          onChange={(e) => setSkillOffered(e.target.value)}
          required
        />
        <input
          className="border w-full p-2"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Post Task
        </button>
      </form>
    </div>
  );
}

export default PostTask;
