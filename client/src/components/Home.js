import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <>
        <h1>Hello World!</h1>
        {isAuthenticated ?<Link to="/cmp">CMP</Link>
        :
        <div>
            You need to authenticate to use this part of the App.
        </div>
        }
        </>
    );
}

export default Home;