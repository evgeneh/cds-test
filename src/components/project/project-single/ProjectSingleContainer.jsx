import React from 'react';

import Project from "./Project";
import {connect} from "react-redux";

import {projectStructRequest} from '../../../redux/thunk'
import {switchProjectList, setProjectId} from '../../../redux/reducers/project-list-reducer'

//загрузка структуры проекта
const ProjectContainer = ({projectId, structId, projectStructRequest, ...props}) => {

    React.useEffect(() => {
        projectStructRequest(projectId, structId)

    }, [projectId, structId])

    return (
        <Project {...props} />
    );
}

const mapStateToProps = (state) => (
    {
        projectId: state.projectList.currentProjectId,
        structId: state.projectList.currentStructureId,
        isStructLoading: state.project.isLoading,
        projectStruct: state.project.projectStruct,
    }
)

export default connect(mapStateToProps, {projectStructRequest, switchProjectList, setProjectId})(ProjectContainer)

