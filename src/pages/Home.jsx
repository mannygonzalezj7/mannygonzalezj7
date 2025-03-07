import { Canvas } from "@react-three/fiber";
import { Macbook } from "../../public/assets/3D/Macbook";
import { ScrollControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <>
      <div className="home-container">
        {/* <SimpleSlider /> */}
        <div className="home-body">
          <div className="home-text">
            <h1>
              minimalistic. modern.
              <br />
              the manny way.
            </h1>
            <p>
              i am a third year Information Science major, with an emphasis on
              UI/UX design. i love to create: any forms of media, visuals,
              sounds, etc. i am from Madison, WI born and raised, and i went to
              Madison East High School. i love combat sports: i wrestled in high
              school for 3 years, and now i practice Mixed Martial Arts in my
              spare time. i have a passion for fashion and for art, with my
              personal brand called Memento Mori Clothing Co.
            </p>
          </div>
          <img
            src="/assets/img/manny.jpg"
            alt="a picture of Manny Gonzalez"
            id="manny-image"
          />
        </div>
        <div className="canvas-container">
          <Canvas camera={{ fov: 50, position: [0.05, 0.75, 0.1] }}>
            <directionalLight intensity={3} />
            <ScrollControls pages={3} damping={0.25}>
              <Macbook />
            </ScrollControls>
          </Canvas>
        </div>
        <div className="home-software">
          <h1>Software Development</h1>
          <button onClick={() => handleButtonClick("SoftwareDevelopment")}>
            Explore More
          </button>
        </div>
      </div>
    </>
  );
}
