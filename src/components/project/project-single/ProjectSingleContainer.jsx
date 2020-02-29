import React, {useState} from 'react';
import {API} from "../../../api/axios"

import Project from "./Project";


const ProjectContainer = ({project, setProjectNode}) => {

    //структура проекта
    let [projectStruct, setProjectStruct] = useState(null)


    React.useEffect(() => {
        const fetchProject = async () => {
            let response = await API.getProject(project.id, project.structId)
            if (response.data.success === true) {
                setProjectStruct(response.data.data)
            }
            else
                console.log(response.data)
        }
        console.log(project.id + " "+project.structId)
        fetchProject()

    }, [project])
    return (
        <Project projectStruct={projectStruct} setProjectNode={setProjectNode} />
    );
}


export default ProjectContainer;
