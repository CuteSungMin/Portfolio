import '../css/section3.css'
import {useState} from "react"
import Sec3Data from '../data/section3.json'
import Page1 from "../img/eBookVideo.mp4"
import Page2 from "../img/festivalVideo.mp4"
import Page3 from "../img/dictionary.mp4"
import Page4 from "../img/kwangju.mp4"
import Page5 from "../img/dreamCar.mp4"
import Page6 from "../img/dominoPizza.mp4"
import Page7 from "../img/dokdo.mp4"


const Section3 = ({inputValues,textColor}) => {
    const {bgColor} = inputValues;
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const sec3ContentData = [
        {
        sec3Title : Sec3Data.Title.div1Right, 
        sec3Bot : Sec3Data.botTitle.bot1Right,
        sec3BotText : Sec3Data.botText.bot1Left,
        sec3ContentReact : Sec3Data.content.react,
        sec3ContentJsx : Sec3Data.content.jsx,
        sec3ContentCss : Sec3Data.content.css,
        sec3ContentThreejs : Sec3Data.content.threeJs,
        sec3Img : Page1,
        sec3Git : `https://github.com/wjdgma603/RepublicOfFreeCoding`,
        sec3Link : `https://wjdgma603.github.io/RepublicOfFreeCoding/`,
    },
        {sec3Title : Sec3Data.Title.div2Left,
        sec3Bot : Sec3Data.botTitle.bot2Left,
        sec3BotText : Sec3Data.botText.bot1Right,
        sec3ContentReact : Sec3Data.content.react,
        sec3ContentJsx : Sec3Data.content.jsx,
        sec3ContentCss : Sec3Data.content.css,
        sec3ContentThreejs : Sec3Data.content.threeJs,
        sec3Img : Page2,
        sec3Git : `https://github.com/CuteSungMin/festival`,
        sec3Link : `https://cutesungmin.github.io/festival/`,
    },
        {
        sec3Title : Sec3Data.Title.div2Right, 
        sec3Bot : Sec3Data.botTitle.bot2Right,
        sec3BotText : Sec3Data.botText.bot2Left,
        sec3ContentReact : Sec3Data.content.react,
        sec3ContentJsx : Sec3Data.content.jsx,
        sec3ContentCss : Sec3Data.content.css,
        sec3Img : Page3,
        sec3Git : `https://github.com/CuteSungMin/dictionary`,
        sec3Link : `https://cutesungmin.github.io/dictionary/`,
    },
        {sec3Title : Sec3Data.Title.div3Left,
        sec3Bot : Sec3Data.botTitle.bot3Left,
        sec3BotText : Sec3Data.botText.bot2Right,
        sec3ContentHtml : Sec3Data.content.html,
        sec3ContentCss : Sec3Data.content.css,
        sec3ContentThreejs : Sec3Data.content.threeJs,
        sec3Img : Page4,
        sec3Git : `https://github.com/CuteSungMin/Kwangju_CC_Renewal`,
        sec3Link : `https://cutesungmin.github.io/Kwangju_CC_Renewal/`,
    },
        {
        sec3Title : Sec3Data.Title.div3Right, 
        sec3Bot : Sec3Data.botTitle.bot3Right,
        sec3BotText : Sec3Data.botText.bot3Left,
        sec3ContentReact : Sec3Data.content.react,
        sec3ContentThreejs : Sec3Data.content.threeJs,
        sec3Img : Page5,
        sec3Git : `https://github.com/CuteSungMin/dreamCar`,
        sec3Link : `https://cutesungmin.github.io/dreamCar/`,
    },
        {sec3Title : Sec3Data.Title.div4Left,
        sec3Bot : Sec3Data.botTitle.bot4Left,
        sec3BotText : Sec3Data.botText.bot3Right,
        sec3ContentHtml : Sec3Data.content.html,
        sec3ContentCss : Sec3Data.content.css,
        sec3Img : Page6,
        sec3Git : `https://github.com/CuteSungMin/DominoPizza_CloneCoding`,
        sec3Link : `https://cutesungmin.github.io/DominoPizza_CloneCoding/`,
    },
        {
        sec3Title : Sec3Data.Title.div4Right,
        sec3Bot : Sec3Data.botTitle.bot4Right,
        sec3BotText : Sec3Data.botText.bot4Left,
        sec3ContentHtml : Sec3Data.content.html,
        sec3ContentCss : Sec3Data.content.css,
        sec3Img : Page7,
        sec3Git : `https://github.com/CuteSungMin/Dokdo_CloneCoding`,
        sec3Link : `https://cutesungmin.github.io/Dokdo_CloneCoding/`,
    },
    {sec3Title : Sec3Data.Title.div1Left,
        sec3Bot : <span>다음 PROJECT 준비중 입니다
        </span>,
    },
    ]


    return ( 
        <section className='section3'>
            <div className='section3Title w1500'><h1 style={{color : textColor}}>PROJECT</h1></div>
            <article className='sec3Article w1500'>
                {sec3ContentData.map((data, i)=>(
                <div key={i} className='sec3ContentWrap' 
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}>
                    <div style={{border :`1px solid ${textColor}`}} className='sec3DivContentWrap' >
                        <div>
                            <h1 style={{color : textColor}} className='sec3ContentWrapTitle'>{data.sec3Title}</h1>
                            <p style={{color : textColor}} className='sec3ContentWrapBotTitle'>{data.sec3Bot}</p>
                            <p style={{color : textColor}} className='sec3ContentWrapBotText'>{data.sec3BotText}</p>
                            <div className='sec3ContentWrapText'>
                                <p><span>{data.sec3ContentReact}</span> <span>{data.sec3ContentJsx}</span> <span>{data.sec3ContentThreejs}</span> <span>{data.sec3ContentHtml}</span> <span>{data.sec3ContentCss}</span></p>
                            </div>
                        </div>
                        <div style={{color : textColor}} className='sec3Link'>
                            <a style={{color : textColor}} href={data.sec3Git} target='_blank' rel='noopener noreferrer'>GIT</a>
                            <a style={{color : textColor}} href={data.sec3Link} target='_blank' rel='noopener noreferrer'>LINK</a>
                        </div>
                        <div className={`sec3ImgWrap ${hoveredIndex === i ? 'visible' : 'hidden'}`}>
                            <video muted autoPlay loop  className='sec3Img' src={data.sec3Img} alt='page'/>
                        </div>
                        <div style={{backgroundColor : bgColor}}  className='topLeftBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='topRightBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='botLeftBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='botRightBox'></div>
                    </div>
                </div>
                ))}
            </article>
        </section>
     );
}
export default Section3;