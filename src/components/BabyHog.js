import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {

  const [weight, setWeight] = useState(200);


  function handleChangeWeight(e) {
    if(e.target.name === '+') {
      setWeight(weight + 20);
    }
    else if(e.target.name ==='-' && weight > 20) {
      setWeight(weight - 20);
    }
  }

  function handleBabyImage (eyeColor) {
    if (eyeColor === "blue") {
     return BlueBaby
    }
    else if (eyeColor === "glowing") {
     return GlowingBaby;
    }
    else if (eyeColor === "sun")
    {
      return SunBaby;
    }
    else 
    {
      return normalBaby;
    }
}

  
  return (
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={handleBabyImage(eyeColor)}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;


// style={{ height: "200px" }}