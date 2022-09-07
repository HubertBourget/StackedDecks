import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDivider from "./PageDivider";
import styled from "styled-components";

//This is where the user can create new courses and edit his current courses:
const CourseManagementPannel = () => {

    const { user, isAuthenticated } = useAuth0();
    const [courseName, setCourseName] = useState('');
    const [courseCategory, setCourseCategory] = useState('');
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch(`/api/get-courses/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCourseData(data.result)
            })
    }, [])

    const handleChangeName = event => {
        setCourseName(event.target.value);
    };
    
    const handleChangeCategory = event => {
        setCourseCategory(event.target.value);
    };

    const createNewCourse = () => {
        fetch("/api/post-course", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
                },
            body: JSON.stringify({
                "courseOwner": user.email,
                "courseName" : courseName,
                "courseCategory": courseCategory,
                "courseContent": 
                {
                    "time": new Date().getTime(),
                    "blocks": [
                    {
                        "type": "header",
                        "data": {
                        "text": "How is your course named?",
                        "level": 1
                        }
                    },
                    ]
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`/api/get-courses/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCourseData(data.result)
            })
            })
    }

    return ( 
        <>
        {isAuthenticated ? ( 
        <ContainerDiv>
            <PageDivider/>
            <InnerDiv>
                <CreateCourseCardDiv>
                    <CreateCardImg src={require("../img/CardBorder.png")}/>
                    <CreateCenterDiv>
                    <StyledInput
                    placeholder="Your Course Name"
                    type="text"
                    id="courseName"
                    name="courseName"
                    onChange={handleChangeName}
                    value={courseName}
                    />
                    <StyledInput
                    placeholder="Course Category (optional)"
                    type="text"
                    id="courseCategory"
                    name="courseCategory"
                    onChange={handleChangeCategory}
                    value={courseCategory}
                    />
                    </CreateCenterDiv>
                </CreateCourseCardDiv>
                <CreateCourseButton onClick={createNewCourse}>Create a New Course</CreateCourseButton>
                <DarkCards src={require("../img/DarkCards.png")}></DarkCards>
            </InnerDiv>
            <PageDivider/>
            <div>
                {courseData ? 
                <div>
                    <CoursesListH2>My list of courses:</CoursesListH2>
                    <CourseContainerDiv>
                    {courseData.map((item) => {
                        return (
                            <CourseCardDiv>
                                <CardImg src={require("../img/CardBorder.png")}/>
                                <CenterDiv>
                                    
                                    <Link to={`/editor/course?courseId=${item._id}`}><h2 id={`${item._id}`}>{item.courseData.courseName} </h2></Link>
                                </CenterDiv>
                            </CourseCardDiv>
                        )
                    })}
                    </CourseContainerDiv>
                </div> 
                :
                <div>
                    You are not teaching any courses yet.
                </div>}
                
            </div>
        </ContainerDiv>
        )
        : 
        <div>You need to Authenticate to use this section of the App.</div>}
        </>
    );
}

export default CourseManagementPannel;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledInput = styled.input`
    margin-top: 15px;
    margin-left: 15px;
    width: 90%;
`;

const DarkCards = styled.img`
    height: 200px;
    width: 300px;
    border-radius: 40px;
    @media (max-width: 700px) {
    display: none;
    }
`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const CreateCourseCardDiv = styled.div`
    position:relative;
    width: 30vw;
    height: 200px;
    @media (max-width: 700px) {
        width: 300px;
    }
`;

const CreateCardImg = styled.img`
    width: 30vw;
    height: 200px;
    @media (max-width: 700px) {
        width: 300px;
    }
`;

const CreateCenterDiv = styled.div`
    position: absolute; 
    display: flex;
    flex-direction: column;
    top:3%;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 30vw;
    @media (max-width: 700px) {
    top:20%;
    }
`;

const CreateCourseButton = styled.button`
    background-color: transparent;
    color: #8a3004;
    font-size: large;
    font-weight: bold;
    width: 150px;
    padding: 10px;
    border: 1px solid #8a3004;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: #8a3004;
        color:black;
    }
`;

const CoursesListH2 = styled.h2`
    margin-bottom: 15px;
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

const CourseContainerDiv = styled.div`
width: 100%;
height: 100%;
display: flexbox;
flex-wrap: wrap;
justify-content: center;
`;