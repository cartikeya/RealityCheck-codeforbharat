// src/Dashboard.js
import React from "react";

function Dashboard({ user }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.displayName}!</h1>
      <p className="mt-2 text-gray-600">
        Start exploring SkillSwap features here.
      </p>
    </div>
  );
}

export default Dashboard;
