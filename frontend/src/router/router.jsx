import {Routes, Route} from 'react-router-dom';
import HomePage from '../page/HomePage';
import ContainerPage from '../page/ContainerPage';
import ProfilePage from '../page/ProfilePage';
import NotFoundPage from '../page/NotFoundPage';

export default function Router(){
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/container' element={<ContainerPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )
}

