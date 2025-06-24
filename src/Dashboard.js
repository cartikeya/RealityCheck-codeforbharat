import React from "react";
import PostTask from "./PostTask";
import TaskFeed from "./TaskFeed";

function Dashboard({ user }) {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName}!</h1>
      <PostTask user={user} />
      <TaskFeed />
    </div>
  );
}

export default Dashboard;
