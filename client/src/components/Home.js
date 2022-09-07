import {Link} from "react-router-dom";
import styled from "styled-components";
import "./Home.scss";
import { useAuth0 } from "@auth0/auth0-react";
import PageDivider from "./PageDivider";

const Home = () => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <>
        {isAuthenticated ?
        <div>
            <Notification><Link to="/cmp">Jump into the Course Management Pannel</Link></Notification>
            <section>
                <SleightOfHandDiv>
                    <SleightOfHandDivLeft>
                        <SleightOfHandInnerDiv><h2>You have a skill to share?</h2></SleightOfHandInnerDiv> 
                        <OrElseImg src={require("../img/orElse.png")}></OrElseImg>
                        <SleightOfHandInnerDiv><h2>There is something you've always wanted to learn?</h2></SleightOfHandInnerDiv>
                    </SleightOfHandDivLeft>
                    <SleightOfHandGif src={require("../img/sleightOfHand.gif")}></SleightOfHandGif>
                </SleightOfHandDiv>
            </section>
            <section>
            <PageDivider/>
                <SectionContainerDiv>
                    <SectionContainerSubDiv>
                        <GrayDiv>
                            <GrayDivH2>Take a look at the courses !</GrayDivH2>
                            <GrayDivH4>Join our student community and start learning new skills now.</GrayDivH4>
                            <GrayDivH4>Or create an Account and start sharing your courses immediately.</GrayDivH4>
                        </GrayDiv>
                        <ButtonDiv>
                            <Link to="/catalog"><CatalogButton>Browse Catalog</CatalogButton></Link>
                        </ButtonDiv>
                    </SectionContainerSubDiv>
                    
                    <CardsImg src={require("../img/cards.png")}></CardsImg>
                </SectionContainerDiv>
            <PageDivider/>
            </section>
            <section>
                <div class="inner">
                    <ul class="activity">
                    <li>
                        <a href="/discover/category?courseCategory=Yoga">Yoga</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Music">Music</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Calligraphy">Calligraphy</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Programming">Programming</a>
                    </li>
                    </ul>
                </div>
            </section>
        </div>
        :
        <div>
            <Notification>If you desire to create courses with this App, you need to create an account or to authenticate.</Notification>
            <section>
                <SleightOfHandDiv>
                    <SleightOfHandDivLeft>
                        <SleightOfHandInnerDiv><h2>You have a skill to share?</h2></SleightOfHandInnerDiv> 
                        <OrElseImg src={require("../img/orElse.png")}></OrElseImg>
                        <SleightOfHandInnerDiv><h2>There is something you've always wanted to learn?</h2></SleightOfHandInnerDiv>
                    </SleightOfHandDivLeft>
                    <OverlayDiv>
                        <SleightOfHandInnerDiv><h2>You have a skill to share?</h2></SleightOfHandInnerDiv>
                        <OrElseImg src={require("../img/orElse.png")}></OrElseImg>
                        <SleightOfHandInnerDiv><h2>There is something you've always wanted to learn?</h2></SleightOfHandInnerDiv>
                    </OverlayDiv>
                    <SleightOfHandGif src={require("../img/sleightOfHand.gif")}></SleightOfHandGif>
                </SleightOfHandDiv>
            </section>
            <section>
            <PageDivider/>
                <SectionContainerDiv>
                    <SectionContainerSubDiv>
                        <GrayDiv>
                            <GrayDivH2>Take a look at the courses !</GrayDivH2>
                            <GrayDivH4>Join our student community and start learning new skills now.</GrayDivH4>
                            <GrayDivH4>Or create an Account and start sharing your courses immediately.</GrayDivH4>
                        </GrayDiv>
                        <ButtonDiv>
                            <Link to="/catalog"><CatalogButton>Browse Catalog</CatalogButton></Link>
                        </ButtonDiv>
                    </SectionContainerSubDiv>
                    
                    <CardsImg src={require("../img/cards.png")}></CardsImg>
                </SectionContainerDiv>
            <PageDivider/>
            </section>
            <section>
                <div class="inner">
                    <ul class="activity">
                    <li>
                        <a href="/discover/category?courseCategory=Yoga">Yoga</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Music">Music</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Calligraphy">Calligraphy</a>
                    </li>
                    <li>
                        <a href="/discover/category?courseCategory=Programming">Programming</a>
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
    @media (max-width: 650px) {
        border: none;
    }

`;

const SleightOfHandGif = styled.img`
    margin-top: 24px;
    height: 500px;
    width: 500px;
    border-radius: 400px;
    margin-right: 5%;
    border: 5px solid #8a3004;
    border-style: inset;
`;

const SleightOfHandDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const SleightOfHandDivLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    @media (max-width: 645px) {
        display: none;
    }
`;
const OverlayDiv = styled.div`
    display: none;
    @media (max-width: 645px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        position: absolute;
        top: 0x;
        left:0;
    }
`;

const SleightOfHandInnerDiv = styled.div`
    margin: 12px;
    width: 50%;
    display: flex;
`;

const OrElseImg = styled.img`
    width: 90px;
    height: 90px;
`;

const SectionContainerDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const GrayDiv = styled.div`
    background-image: linear-gradient(to bottom right, #d4b693, #040f10);
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    width: 30vw;
    height: 32vh;
    @media (max-width: 650px) {
    width: 200px;
    }
`;

const GrayDivH2 = styled.h2`
    margin-top: 30px;
    margin-bottom: 30px;
    color:black;
`;

const GrayDivH4 = styled.h4`
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 8px;
    color:black;
`;

const CardsImg = styled.img`
    border-radius: 50px;
    width: 55vw;
    height: 65vh;
`;

const ButtonDiv = styled.div`
    margin-top: 50px;
`;
const SectionContainerSubDiv = styled.div`
    height: 100%;
`;
const CatalogButton = styled.button`
    background-color: transparent;
    color: #8a3004;
    font-size: large;
    font-weight: bold;

    padding: 10px;
    border: 1px solid #8a3004;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: #8a3004;
        color:black;
    }
`;