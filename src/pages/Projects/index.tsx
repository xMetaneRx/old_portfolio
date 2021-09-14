import React, {useEffect} from 'react';
import Window from '../../components/Window';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../actions';

type projectTypes = {
    projects: any;
}

function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector((state: projectTypes) => state.projects); 

    useEffect(() => {
        document.title = 'Projects';
        dispatch(fetchData('projects'));
    }, [])

    return (
        <div className="container">
            <Window title="Projects" data={projects.data} isLoading={projects.isLoading} />
        </div>
    )
}

export default Projects;