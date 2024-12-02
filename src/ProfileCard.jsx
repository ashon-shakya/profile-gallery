import React from "react";

const ProfileCard = ({ profile, onViewProfile }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={profile.image}
        alt={`${profile.name}'s profile`}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ fontSize: "18px", margin: "0 0 8px" }}>{profile.name}</h2>
      <p style={{ fontSize: "14px", color: "#555" }}>{profile.bio}</p>
      <button
        onClick={() => onViewProfile(profile)}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
