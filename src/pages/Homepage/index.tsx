import React, { useEffect } from 'react';
import Window from '../../components/Window';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../actions';

type informationTypes = {
    information: any;
}


function Homepage() {
    const dispatch = useDispatch();
    const information = useSelector((state: informationTypes) => state.information);

    useEffect(() => {
        document.title = 'Homepage';
        dispatch(fetchData(''));
    }, [])

    return (
        <div className="container">
            <Window title="About me" description={information.data} isLoading={information.isLoading} />
        </div>
    )
}

export default Homepage;