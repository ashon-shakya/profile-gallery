import React from "react";

const ProfileViewer = ({ profile, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          textAlign: "center",
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
        <h2 style={{ fontSize: "20px", margin: "0 0 12px" }}>{profile.name}</h2>
        <p style={{ fontSize: "16px", color: "#555" }}>{profile.details}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: "16px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileViewer;
