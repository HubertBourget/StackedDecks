/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Timeline from '../tools/timeline/tool';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import _ from "lodash"; // cool kids know _ is low-dash ;D

const EDITOR_HOLDER_ID = 'editorjs';

    const Editor = () => {
    const ejInstance = useRef();
    const [editorData, setEditorData] = React.useState("");
    const location = useLocation();
    const query = queryString.parse(location.search);
    const courseId = query.courseId;

    const initTheEditor = (data) => {
        if (!ejInstance.current) {
            initEditor(data);
            }
            return () => {
            ejInstance.current.destroy();
            ejInstance.current = null;
            }
    }

    useEffect(() => { 
        fetch(`/api/get-course/${courseId}`)
        .then(res => res.json())
        .then(data => {
            setEditorData(data.result)
            console.log(data); //this line to be removed soon
            initTheEditor(data.result)
        })
        }, []);
        
    const initEditor = (data) => {
        const editor = new EditorJS({
        holder: EDITOR_HOLDER_ID,
        logLevel: "ERROR",
        data: data,
        onReady: () => {
            ejInstance.current = editor;
        },
        onChange: async () => {
            editor.save().then((outputData) => {
                setEditorData(outputData)
                }).catch((error) => {
                    console.log('Saving failed: ', error)
                });
        },
        autofocus: true,
        tools: { 
            header: Header, 
            timeline: Timeline,
        }, 
        });
    }

    const saveCourse = () => {
        console.log(editorData)
        fetch(`/api/patch-course/${courseId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            editorData
        }),
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return (
        <>
        <div id={EDITOR_HOLDER_ID}> </div>
        <button onClick={saveCourse}>Save</button>
        </>
    );
}

export default Editor;




//this was the DEFAULT_INITIA_DATA object:
// {
//     "time": new Date().getTime(),
//     "blocks": [
//     {
//         "type": "header",
//         "data": {
//         "text": "How is your course named?",
//         "level": 1
//         }
//     },
//     ]
// }




//premiere tentative fetch initial data
// const [courseData, setCourseData] = useState('');
// let query = useQuery();
// fetch(`/api/get-course/${query.get("_id")}`)
// .then(res => res.json())
// .then(data => {
//     setCourseData(data.result)
//     console.log(data);
// })
