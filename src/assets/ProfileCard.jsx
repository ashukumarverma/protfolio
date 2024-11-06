const ProfileCard = () => {
  return (
    <div className="bg-gray-400 p-2 text-2xl w-72 rounded-md">
      <div className="w-60 h-60 border-solid border-2 rounded-md
       profileImage">Profile Image</div>
      <p className="content-center text-red-900 font-extrabold text-2xl m-auto">Hi there! I am</p>
      <p>Ashutosh Kumar</p>
      <p>a MERN stack developer</p>
    </div>
  );
};

export default ProfileCard;
