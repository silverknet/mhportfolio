import MainBody from "./MainBody";
import Stars from "./Stars";

import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Body() {

    

    return (
        
        <div class="bodyContainer">

        <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/stars" element={<Stars />} />
        </Routes>
        
        </div>
    )
}

export default Body
