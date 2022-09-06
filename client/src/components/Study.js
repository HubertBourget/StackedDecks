import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import styled from 'styled-components';
import Footer from './Footer';

const Study = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const courseId = query.courseId;
    const [courseData, setCourseData] = useState("");

    useEffect(() => { 
    fetch(`/api/get-course/${courseId}`)
    .then(res => res.json())
    .then(data => {
        setCourseData(data.result);
    })
    }, []);

    return ( 
        <>
        {courseData ? 
                <div>
                    {courseData.blocks.map((item) => {
                        console.log(item);
                        if(item.type === "paragraph"){
                            if(item.data.text.includes("https://www.youtube.com/watch?v=")){
                                return (<ContentDiv><YoutubeEmbed embedId={item.data.text.split("https://www.youtube.com/watch?v=")[1]} /></ContentDiv>)
                            }
                            return ( <ContentDiv><p>{item.data.text}</p></ContentDiv>)
                        }
                        else if(item.type === "header"){
                            return ( <ContentDiv><h2>{item.data.text}</h2></ContentDiv>)
                        }
                    })}
                </div> 
                :
                <div>
                    Loading...
                </div>}
        </>
    );
}

export default Study;

const ContentDiv = styled.div`
    margin-top: 15px;
`;