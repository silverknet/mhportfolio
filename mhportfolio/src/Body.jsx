import MainBody from "./MainBody";
import Stars from "./Stars";

import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Body() {

    const navigate = useNavigate();

    return (
        
        <div class="bodyContainer">

        <Routes>
            <Route path="/" navigate={navigate} element={<MainBody />} />
            <Route path="/stars" element={<Stars />} />
        </Routes>
        
        </div>
    )
}

export default Body
