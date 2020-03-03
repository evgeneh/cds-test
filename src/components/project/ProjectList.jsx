import React from 'react';

import {makeStyles} from  '@material-ui/core'

import {IconButton} from '@material-ui/core'

import APPHeader from "../header/Header"
import Preloader from "../Preloader";

import {ProjectListItem} from './list-item/ProjectListItem'
import Divider from '@material-ui/core/Divider'

import List from "@material-ui/core/List";
import ProjectContainer from "./project-single/ProjectSingleContainer"

import NotesCntrBlock from './list-item/NotesCountBlock'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        padding: 20,
    }
}));


const ProjectList = ({projectList}) => {

    const classes = useStyles();

    let [isProjectListShow, setProjectListShow] = React.useState(true)

    //начальные id не заданы т.к. не выбран проект
    let [state, setState] = React.useState({id: null, structId: null})
    //установка id и id структуры происходит из списка проектов
    const handleIdStructureChange = (id, structId) =>{
        setProjectListShow(false)
        setState({...state, id, structId})
    }
    //хэндл для вызова из структуры
    const handleStructureChange = (id, structId) => {
        setState({...state, id, structId})
    }

    //возвращает пользователя к начальному списку проектов (вызов в шапке страницы)
    const goToProjectList = () => {
        setProjectListShow(true)
    }

    if (!projectList)
        return (<>
            <APPHeader/>
            <Preloader labelText={'Загрузка списка проектов'}/>
        </>)

    return (
        <div className={classes.root}>
            {
                (isProjectListShow) ?
                    <>
                        <APPHeader headerText={'Проекты'}/>

                        <List className={classes.list}>{
                            projectList.map((project) => {
                                return <div key={project.id}>
                                    <ProjectListItem
                                        text={project.title}
                                        allowDelete={false}
                                        openHandler={handleIdStructureChange.bind(null, project.id, project.root_structure_id)}
                                    >
                                        <NotesCntrBlock {...project} />
                                    </ProjectListItem>
                                    <Divider/>
                                </div>
                            })
                        }</List>
                    </>
                    :
                    <ProjectContainer project={state}
                                      setProjectNode={handleStructureChange}
                                      goToProjectList={goToProjectList} />
            }
        </div>
    );
}


export default ProjectList;
