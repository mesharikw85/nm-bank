import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-orange-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <form>
        <div className="text-5xl  text-white">image</div>
        <div className="text-5xl  text-white">name</div>
        <div className="text-5xl  text-white">balance</div>
      </form>
    </div>
  );
};

export default UserProfile;
