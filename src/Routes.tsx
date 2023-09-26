import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import ToDoPage from "./pages/ToDoPage/ToDoPage";

interface AppRoutesProps {
    
}
 
const AppRoutes: React.FunctionComponent<AppRoutesProps> = () => {
    return ( <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/" element={<Main/>}></Route>
            <Route path="todopage/:id" element={<ToDoPage/>}></Route>
        </Routes>
        </BrowserRouter> );
}
 
export default AppRoutes;