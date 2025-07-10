import {Routes, Route} from 'react-router-dom';
import HomePage from '../page/HomePage';
import ContainerPage from '../page/ContainerPage';

export default function Router(){
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/container' element={<ContainerPage />} />
        </Routes>
    )
}

