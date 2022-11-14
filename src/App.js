import "./App.css";
import Profile from "./profile/Profile";
import profilePicture from "./299307594_142085175233459_4813057762078205252_n.jpg";

function App() {
  const handleClick = (e) => {
    alert(e);
  };
  return (
    <div className="App">
      <Profile
        fullName={"Omar Sharif"}
        bio={"i`m here"}
        profession={"Developer"}
        handleName={handleClick}
      >
        {profilePicture}
      </Profile>
    </div>
  );
}

export default App;
