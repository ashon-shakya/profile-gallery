import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewer from "./ProfileViewer";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    bio: "Web Developer and Coffee Lover.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    details:
      "John specializes in front-end development and has 5 years of experience in React and JavaScript.",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "UI/UX Designer with a passion for minimalism.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    details:
      "Jane loves creating clean, user-friendly designs and has worked with top design agencies.",
  },
  {
    id: 3,
    name: "Michael Brown",
    bio: "Full-stack Developer and Blockchain Enthusiast.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    details:
      "Michael has expertise in building decentralized applications and full-stack web apps.",
  },
  {
    id: 4,
    name: "Emily White",
    bio: "Digital Marketer and Content Creator.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    details:
      "Emily helps brands grow their online presence through strategic marketing and content.",
  },
];

const ProfileGallery = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "16px",
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onViewProfile={openProfile}
          />
        ))}
      </div>
      {selectedProfile && (
        <ProfileViewer profile={selectedProfile} onClose={closeProfile} />
      )}
    </div>
  );
};

export default ProfileGallery;
