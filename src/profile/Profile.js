import PropTypes from "prop-types";
const Profile = (props) => {
  let { fullName, bio, profession, handleName } = props;
  return (
    <div>
      <p>{fullName}</p>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleName(fullName)}>Click me!</button>
    </div>
  );
};
Profile.deafaultProps = {
  fullName: "Omar Sharif Zaki",
  bio: "I`m developer",
  profession: "Front-End developer",
  handleName: () => alert("No name found"),
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};
export default Profile;
