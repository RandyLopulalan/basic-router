import React from "react";

const About = ({username}) => {

  return (
    <div>
      <h1>About</h1>
      <h5>{username}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem
        enim, quia expedita provident ea consequatur repudiandae et sunt facilis
        laudantium architecto omnis distinctio ipsum possimus sequi fuga beatae
        voluptatibus!
      </p>
    </div>
  );
};

export default About;
