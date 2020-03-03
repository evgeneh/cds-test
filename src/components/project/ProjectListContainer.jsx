import React from 'react';
import {connect} from "react-redux";
import {projectListRequest} from '../../redux/thunk'

import ProjectList from "./ProjectList";

const ProjectListContainer = ({projectList, projectListRequest}) => {
    React.useEffect(() => {
        projectListRequest()
    }, [projectList.items])

    return (
        <ProjectList projectList={projectList}/>
    );
}

const mapStateToProps = (state) => (
    {
        projectList: state.projectList.items
    }
)
export default connect(mapStateToProps, {projectListRequest})(ProjectListContainer)
