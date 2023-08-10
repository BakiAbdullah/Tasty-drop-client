import {createBrowserRouter} from 'react-router-dom';
import Main from './../../layout/Main';
import Home from '../../pages/home/Home';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home />
            }
        ]
    }
])
export default router