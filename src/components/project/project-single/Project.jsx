import React from 'react';

import {makeStyles} from  '@material-ui/core'

import PropTypes from 'prop-types'

import APPHeader from "../../header/Header"
import Preloader from "../../Preloader";
import AppBreadcrumbs from '../breadcrumbs/AppBreadCrumbs'

import {ProjectListItem} from '../list-item/ProjectListItem'
import Divider from '@material-ui/core/Divider'
import List from "@material-ui/core/List";

import NotesCntrBlock from '../list-item/NotesCountBlock'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        padding: 20,
    }
}));


const Project = ({projectStruct, isStructLoading, switchProjectList, setProjectId}) => {
    const classes = useStyles();

    if (isStructLoading || projectStruct?.children === undefined)
        return (
            <>
                <APPHeader/>
                <Preloader labelText={'Загрузка структуры проекта'}/>
            </>
        )

    return (
        <>
            <APPHeader isArrowBack={true} headerText={projectStruct.title} onIconClick={switchProjectList}/>

            <AppBreadcrumbs breadcrumbs={projectStruct.breadcrumbs}
                            handleClick={setProjectId}
                            projectId={projectStruct.project_id}
            />
            <Divider/>
            <List className={classes.list}>{
                projectStruct.children.map((project) => {
                    return <div key={project.id}>
                        <ProjectListItem
                            text={project.title}
                            allowDelete={true}
                            hasDocument={project.hasDocument}
                            openHandler={setProjectId.bind(null, projectStruct.project_id, project.id)}
                        >
                            <NotesCntrBlock {...project} />
                        </ProjectListItem>
                        <Divider/>
                    </div>
                })
            }</List>
        </>
    );
}

Project.propTypes = {
    projectStruct: PropTypes.object,
    setProjectNode: PropTypes.func,
    goToProjectList: PropTypes.func,
}

export default Project
