import React from 'react';
import {connect} from "react-redux";
import {projectListRequest} from '../../redux/thunk'
import {setProjectId} from '../../redux/reducers/project-list-reducer'

import ProjectList from "./ProjectList";
import ProjectContainer from "./project-single/ProjectSingleContainer"

const ProjectListContainer = ({projectList, projectListRequest, isListShow, isUpload, ...props}) => {
    React.useEffect(() => {
        if (! projectList.length) {
            projectListRequest()
        }
    }, [projectList])


    if (isListShow)
    return (
        <ProjectList projectList={projectList} {...props} />
    )
    else return (
        <ProjectContainer />
    )
}

const mapStateToProps = (state) => (
    {
        isListShow: state.projectList.isListShow,
        projectList: state.projectList.items,
        isProjectListLoading: state.projectList.isLoading,
        showProjectList: state.projectList.isListShow
    }
)
export default connect(mapStateToProps, {projectListRequest, setProjectId})(ProjectListContainer)
