import React from 'react';

import {makeStyles} from  '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from "@material-ui/core/List";

import APPHeader from "../header/Header"
import Preloader from "../Preloader";

import {ProjectListItem} from './list-item/ProjectListItem'
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
    })
);


const ProjectList = ({projectList, setProjectId, isProjectListLoading}) => {

    const classes = useStyles();
    //хэндл для вызова из структуры
    const handleStructureChange = (id, structId) => {
        setProjectId(id, structId)
    }

    if (isProjectListLoading)
        return <>
            <APPHeader/>
            <Preloader labelText={'Загрузка списка проектов'}/>
        </>

    return (
        <div className={classes.root}>
            <APPHeader headerText={'Проекты'}/>

            <List className={classes.list}>
                {
                    projectList.map((project) => {
                        return <div key={project.id}>
                            <ProjectListItem
                                text={project.title}
                                allowDelete={false}
                                openHandler={handleStructureChange.bind(null, project.id, project.root_structure_id)}
                            >
                                <NotesCntrBlock {...project} />
                            </ProjectListItem>
                            <Divider/>
                        </div>
                    })
                }
            </List>
        </div>
    );
}

export default ProjectList;
