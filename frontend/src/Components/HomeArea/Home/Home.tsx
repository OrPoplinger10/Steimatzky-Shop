import "./Home.css";
import imageSource from "../../../Assets/images/steimatzky.jpg";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <h2>steimatzky Shop</h2>

            <img src={imageSource} />


			
        </div>
    );
}

export default Home;
