import { useNavigate } from 'react-router-dom'; 

function Header() {

    const navigate = useNavigate();
    return (
        <>

        <div class="headerContainer">
            <div class="headerItem" onClick={() => navigate('/')}>
                <h1 className="headerText">Martin Håkansson</h1>
                <h3 className="headerUnderText">M.Sc. Computer Science Student</h3>
            </div>
            <div className="placeHolder"></div>
        </div>
        </>
    )
}

export default Header
