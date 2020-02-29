import React, {useState} from 'react';
import {API} from "../../../api/axios"

import Project from "./Project";


const ProjectContainer = ({project, ...props}) => {

    //структура проекта
    let [projectStruct, setProjectStruct] = useState(null)


    React.useEffect(() => {
        const fetchProject = async () => {
            let response = await API.getProject(project.id, project.structId)
            if (response.data.success === true) {
                console.log(response.data.data.breadcrumbs)
                setProjectStruct(response.data.data)
            }
            else
                console.log(response.data)
        }
        fetchProject()

    }, [project])

    return (
        <Project projectStruct={projectStruct} {...props} />
    );
}


export default ProjectContainer;
