
import { useEffect, useState} from 'react';
import { Navigation } from './Navigation';
// import {Projects} from './Projects.jsx';
import myPic from './assets/tender.jpg';
import tenderlyImg from './assets/tenderly.jpg'
import { Footer } from './Footer';
import css from './assets/css.png';
import html5 from './assets/html5.png';
import JavaScript from './assets/JS.png';
import react from './assets/react.png';
import java from './assets/java.png';
import sun from './assets/sun.png';
import moon from './assets/moon.png';



function MyPage(){

const aboutMe = <p>‧˚꒰🐾୭Software Engineering Student | Aspiring Frontend Developer</p>;
const whatILove = <p>Anime, movies, Games, swimming, being indoors, and Listening to music.</p>
const whoAmI = <p>
                I'm a 200-level Software Engineering student passionate about software development and exploring how modern applications are designed and built.
            </p>;

const [currentImg, setCurrentImg] = useState(myPic);

const togglePic = ()=>{
    setCurrentImg(prev => prev === myPic? tenderlyImg : myPic);
    } 


const [isNight, setDay] = useState(true);

const dayTime = () => {
    const nightTime = !isNight;

    setDay(nightTime);
    if(nightTime){
        document.body.style.background = 'linear-gradient(135deg, #181818, #1e222c)';
    }
        else{
            document.body.style.background = 'radial-gradient(circle at top left,#fef6f9  10%, #f7dbe3 40%, #f7cad0  )'
        }
}



    return  (

        // The main wrappper div to be returned
        <div>
            <div className='positon'>
            <img src={isNight? sun : moon}  width={50} onClick={dayTime} className='dayToggle'/>
            </div>

            {/* ---------------navigation section------------ */}
            <section className='navigation'>
                <Navigation/>
            </section>

            {/* the first div nested inside the main wrapper div */}
            <div className='main-div'>
                <img id='myPicture'  src={currentImg} alt='A Picture of Tenderly Ehwehwehwe' onClick={togglePic}/>
                <h1 data-text="⋆.𐙚 ̊Hi there, I'm Tenderly⋆˚𝜗𝜚˚⋆">⋆.𐙚 ̊Hi there, I'm Tenderly⋆˚𝜗𝜚˚⋆</h1>
                {aboutMe}
                <button className='main-btn'><a href="#myProjects">Discover My Creation</a></button>
                



            </div>
            <h2 className='about-text'>About Me</h2>
            <div className='about-text-decor'></div>
            {/* The second div for the about me section of the page */}
            <div className='aboutMe' >
                <div className='infoCard firstRect' >
                    <h3>𐙚 Who I Am ৻ꪆ</h3>
                    {whoAmI}
                </div>
                <div className='infoCard secRect'>
                    <h3>𑣲What I Love𑁤</h3>
                    {whatILove}
                </div>
                <div className='infoCard thirdRect'>
                    <h3>ִ ࣪𖤐Future Projects݁˖Ი𐑼⋆</h3>
                    <li>A Food Recipe App</li>
                    <li>The SisterHood Project</li>
                    
                    <p></p>
                </div>
                
            </div>
            {/* third div for the skills section */}
            <div className='skills'>
                <h2>Skills</h2>
                <div className='about-text-decor'></div>
                {/* 1st child div of the parent skills div */}
                    <h3 className='skillH3'>Technical Skills</h3>
                <div className='technicalSkills'>
                    <img src={html5} alt="HTML icon" width={70} className='skillsLogo  skillUp'/>
                    <img src={css} alt="CSS icon" width={70} className='skillsLogo skillDown'/>
                    <img src={JavaScript} alt="JavaScript icon" width={70} className='skillsLogo skillUp'/>
                    <img src={react} alt="React icon" width={70} className='skillsLogo skillDown'/>
                    <img src={java} alt="Java icon" width={70} className='skillsLogo skillUp'/>
                    
                </div>
                {/* 2nd child div of the skills div.  */}
                <div className='softSkills'>
                    <h3 className='skillH3'>Soft Skills</h3>
                    <ul className='softSkillsList'>
                    <li>Problem Solving</li>  
                    <li>Creativity</li>
                    <li>Adaptability</li>
                    <li>Attention to Detail</li>   
                    <li>Teamwork</li>
                    <li>Communication</li>
                    </ul>
                </div>
            </div>

            <div id='myProjects'>
                <h3>Completed Projects</h3>
                    {/* <Projects/> */}
            </div>
            <div className='contacts'>

            </div>
            <Footer/>
        </div>
    );    
}

export default MyPage;

