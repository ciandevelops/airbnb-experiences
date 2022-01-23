import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Athlete from "./images/katie-zaferes.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={Athlete}
        rating="5.0"
        reviewCount="(6)"
        country="USA"
        title="Life Lessons With Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
