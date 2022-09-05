import {Link} from "react-router-dom";
import styled from "styled-components";
import "./Home.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <>
        {isAuthenticated ?<Notification><Link to="/cmp">Jump into the Course Management Pannel</Link></Notification>
        :
        <div>
            <Notification>If you desire to create courses with this App, you need to create an account or to authenticate.</Notification>
            <section>
                <SleightOfHandDiv>
                    <SleightOfHandInnerDiv><h2>You have a skill to share?</h2> 
                    <OrElseImg src={require("../img/orElse.png")}></OrElseImg>
                    <h2>There is something you've always wanted to learn?</h2></SleightOfHandInnerDiv>
                    <SleightOfHandGif src={require("../img/sleightOfHand.gif")}></SleightOfHandGif>
                </SleightOfHandDiv>
            </section>
            <section>
                <div class="inner">
                    <ul class="activity">
                    <li>
                        <a href="#">Yoga</a>
                    </li>
                    <li>
                        <a href="#">Baking</a>
                    </li>
                    <li>
                        <a href="#">Calligraphy</a>
                    </li>
                    <li>
                        <a href="#">Programming</a>
                    </li>
                    </ul>
                </div>
            </section>
        </div>
        }
        </>
    );
}

export default Home;

const Notification = styled.div`
    display:inline;
    padding: 5px 10px 5px 10px;
    border: 1px solid #8a3004;
`;

const SleightOfHandGif = styled.img`
margin-top: 24px;
height: 500px;
width: 500px;
border-radius: 400px;
margin-right: 5%;
`;

const SleightOfHandDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const SleightOfHandInnerDiv = styled.div`
color: white;
`;

const OrElseImg = styled.img`
width: 90px;
height: 90px;
`;