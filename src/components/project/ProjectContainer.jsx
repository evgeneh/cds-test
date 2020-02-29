import React, {useState} from 'react';
import {API} from "../../api/axios";

import ProjectList from "./ProjectList";


const ProjectListContainer = () => {
    let [projectList, setProjectList] = useState(null)

    React.useEffect(() => {
        const fetchProject = async () => {
            let projectResponse = await API.getProject()
            if (projectResponse.data.success === true) {
                setProjectList(projectResponse.data.data)
            }
        }
        fetchProject()
    }, [])
    return (
        <ProjectList projectList={projectList} />
    );
}


export default ProjectListContainer;
