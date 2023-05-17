import Stopwatch from "../../functional/stopwatch/Stopwatch";
// import Time from "../../functional/time/Time";

const Home = () => {
  return (
    <div>
      <div>{/* <Time /> */}</div>
      <div>
        <h3>Welcome to Learning Discipliner Abdulhameed.</h3>
        <Stopwatch />
      </div>
      <div>
        <div>
          <h3>Goals</h3>
          <ul>
            <li>Goal one</li>
            <li>Goal two</li>
            <li>Goal three</li>
          </ul>
        </div>
        <div>
          <h3>Tasks</h3>
          <ul>
            <li>Task one</li>
            <li>Task two</li>
            <li>Task three</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
