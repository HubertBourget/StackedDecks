/* eslint-disable react-hooks/exhaustive-deps */
import { default as React, useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';

const EDITOR_HOLDER_ID = 'editorjs';

//The course editor, this is what the user interact with when building a course:
const Editor = () => {
    const ejInstance = useRef();
    const [editorData, setEditorData] = useState("");
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
        }, 
        });
    }

    const saveCourse = () => {
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
        <SaveButton onClick={saveCourse}>Save</SaveButton>
        </>
    );
}

export default Editor;

const SaveButton = styled.button`
    background-color: transparent;
    color: #8a3004;
    font-size: large;
    font-weight: bold;

    padding: 10px;
    border: 1px solid #8a3004;
    margin: 5px;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
        background-color: #8a3004;
        color:black;
    }
`;