import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <div>
                    {courseData.map((item) => {
                        return (<div id={`${item._id}`}>{item.courseData.courseName} <Link to={`/study/course?courseId=${item._id}`}>click me</Link></div>) //<link to={`/editor/course?_id=${item._id}`}>
                    })}

                </div> 
                :
                <div>
                    No courses are accessible yet.
                </div>}
                
            </div>
    );
}

export default Catalogue;