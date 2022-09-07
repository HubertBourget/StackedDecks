import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingLogo from "./LoadingLogo";

const Catalogue = () => {
    
    const [courseData, setCourseData] = useState([]);
    
    useEffect(() => {
        fetch(`/api/get-all-courses`)
            .then(res => res.json())
            .then(data => {
                setCourseData(data.result);
                console.log(courseData);
            })
    }, [])

    return ( 
        <div>
                {courseData ? 
                <CourseContainerDiv>
                    {courseData.map((item) => {
                        return (
                            <CourseCardDiv>
                                <CardImg src={require("../img/CardBorder.png")}/>
                                <CenterDiv>
                                    
                                    <Link to={`/study/course?courseId=${item._id}`}><h2 id={`${item._id}`}>{item.courseData.courseName} </h2></Link>
                                </CenterDiv>
                            </CourseCardDiv>
                        )
                    })}

                </CourseContainerDiv> 
                :
                <div>
                    <LoadingLogo/>
                </div>}
                
            </div>
    );
}

export default Catalogue;


const CourseContainerDiv = styled.div`
width: 100%;
height: 100%;
display: flexbox;
flex-wrap: wrap;
justify-content: center;
`;

const CourseCardDiv = styled.div`
    position:relative;
    width: 30vw;
    @media (max-width: 700px) {
        width: 45vw;
    }
    @media (max-width: 500px) {
        width: 60vw;
    }
`;

const CardImg = styled.img`
    width: 30vw;
    @media (max-width: 700px) {
        width: 45vw;
    }
    @media (max-width: 500px) {
        width: 60vw;
    }
`;

const CenterDiv = styled.div`
    position: absolute; 
    top:35%;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 30vw;
    @media (max-width: 700px) {
    top:20%;
    }
`;