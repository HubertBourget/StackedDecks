import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseManagementPannel = () => {

    const { user, isAuthenticated } = useAuth0();
    const [courseName, setCourseName] = useState('');
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch(`/api/get-courses/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCourseData(data.result)
            })
    }, [])

    const handleChange = event => {
        setCourseName(event.target.value);
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
                console.log(data);
            })
    }

    return ( 
        <>
        {isAuthenticated ? ( 
        <div>
        <input
        placeholder="Your Course Name"
        type="text"
        id="courseName"
        name="courseName"
        onChange={handleChange}
        value={courseName}
        />
        <button onClick={createNewCourse}>Create a New Course</button>
            <div>
                {courseData ? 
                <div>
                    {courseData.map((item) => {
                        return (<div id={`${item._id}`}>{item.courseData.courseName} <Link to={`/editor/course?courseId=${item._id}`}>click me</Link></div>) //<link to={`/editor/course?_id=${item._id}`}>
                    })}
                </div> 
                :
                <div>
                    You are not teaching any courses yet.
                </div>}
                
            </div>
        </div>
        )
        : 
        <div>You need to Authenticate to use this section of the App.</div>}
        </>
    );
}

export default CourseManagementPannel;