import { useNavigate } from 'react-router-dom'; 

function MainBody() {
    const navigate = useNavigate();

    return (
        <>
            <div className="tempMidContainer">
                <p className="centerText">
                Hey! I'm in the process of gathering all my projects in one place, this place. 
                I'm not done yet, but in the meantime, you can check out some of my projects that are online right now.
                </p>
                <div className="portItem">
                    <div className='top'>
                        <a href="https://www.simonstorp.net" className="left" target="_blank">Simonstorp</a>
                        <a href="https://github.com/silverknet/simonstorp" className="right" target="_blank">Github</a>
                    </div>
                    <p className="description">Personal project made for Simonstorp Village, Åby. <br /> #React #Strapi #Postgres</p>
                </div>
                <div className="portItem">
                    <div className='top'>
                        <a href="https://upsidedowngame.netlify.app" className="left"  target="_blank">The Upside Down</a>
                        <p></p>
                    </div>
                    <p className="description">2D platform game made within a 6hp KTH course. <br /> #Unity</p>
                </div>
                <div className="portItem">
                    <div className='top'>
                        <a href="https://ivis24-9-proj.netlify.app" className="left"  target="_blank">CO2VIS</a>
                        <a href="https://github.com/silverknet/ivis24-9-proj" className="right" target="_blank">Github</a>
                    </div>
                    <p className="description">Information visualization project made within course on KTH. <br /> #D3</p>
                </div> 
                <div className="portItem">
                    <div className='top'>
                        <a onClick={() => navigate('/stars')} className="left" target="_blank">Planets</a>
                        <a href="https://github.com/silverknet/Stars-Planets" className="right" target="_blank">Github</a>
                    </div>
                    <p className="description">Personal hobby project <br /> #Processing</p>
                </div> 
                <div className="portItem">
                    <div className='top'>
                        <a href="https://www.shadertoy.com/view/DstGzf" className="left"  target="_blank">Sphere raytracer</a>
                        <p></p>
                    </div>
                    <p className="description">Personal hobby project <br /> #GLSL</p>
                </div> 
            </div>
        </>
    )
  }
  
  export default MainBody
  