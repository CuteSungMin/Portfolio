import '../css/section3.css'
import Sec3Data from '../data/section3.json'
import Page1 from "../img/page3.png"

const Section3 = ({inputValues}) => {
    const {bgColor} = inputValues;

    const sec3ContentData = [
        {sec3LeftTitle : Sec3Data.Title.div1Left,
        sec3LeftBot : Sec3Data.botTitle.bot1Left,
        sec3RightTitle : Sec3Data.Title.div1Right, 
        sec3RightBot : Sec3Data.botTitle.bot1Right,
        sec3RightContentReact : Sec3Data.content.react,
        sec3RightContentJsx : Sec3Data.content.jsx,
        sec3RightContentCss : Sec3Data.content.css,
        sec3RightContentThreejs : Sec3Data.content.threeJs,
        sec3LeftImg : Page1,
        sec3RightImg : Page1,
    },
        {sec3LeftTitle : Sec3Data.Title.div2Left,
        sec3LeftBot : Sec3Data.botTitle.bot2Left,
        sec3LeftContentReact : Sec3Data.content.react,
        sec3LeftContentJsx : Sec3Data.content.jsx,
        sec3LeftContentCss : Sec3Data.content.css,
        sec3LeftContentThreejs : Sec3Data.content.threeJs,
        sec3RightTitle : Sec3Data.Title.div2Right, 
        sec3RightBot : Sec3Data.botTitle.bot2Right,
        sec3RightContentReact : Sec3Data.content.react,
        sec3RightContentJsx : Sec3Data.content.jsx,
        sec3RightContentCss : Sec3Data.content.css,
        sec3LeftImg : Page1,
        sec3RightImg : Page1,
    },
        {sec3LeftTitle : Sec3Data.Title.div3Left,
        sec3LeftBot : Sec3Data.botTitle.bot3Left,
        sec3LeftContentHtml : Sec3Data.content.html,
        sec3LeftContentCss : Sec3Data.content.css,
        sec3LeftContentThreejs : Sec3Data.content.threeJs,
        sec3RightTitle : Sec3Data.Title.div3Right, 
        sec3RightBot : Sec3Data.botTitle.bot3Right,
        sec3RightContentReact : Sec3Data.content.react,
        sec3RightContentJsx : Sec3Data.content.jsx,
        sec3RightContentCss : Sec3Data.content.css,
        sec3RightContentThreejs : Sec3Data.content.threeJs,
        sec3LeftImg : Page1,
        sec3RightImg : Page1,
    },
        {sec3LeftTitle : Sec3Data.Title.div4Left,
        sec3LeftBot : Sec3Data.botTitle.bot4Left,
        sec3LeftContentHtml : Sec3Data.content.html,
        sec3LeftContentCss : Sec3Data.content.css,
        sec3RightTitle : Sec3Data.Title.div4Right, 
        sec3RightBot : Sec3Data.botTitle.bot4Right,
        sec3RightContentHtml : Sec3Data.content.html,
        sec3RightContentCss : Sec3Data.content.css,
        sec3LeftImg : Page1,
        sec3RightImg : Page1,
    },

    ]


    return ( 
        <section className='section3'>
            <div className='section3Title'><h1>PROJECT</h1></div>
            <article className='sec3Article w1500'>
                {sec3ContentData.map((data, i)=>(
                <div key={i} className='sec3ContentWrap'>
                    <div className='sec3LeftContentWrap' >
                        <div>
                            <h1 className='sec3ContentWrapTitle'>{data.sec3LeftTitle}</h1>
                            <p className='sec3ContentWrapBotTitle'>{data.sec3LeftBot}</p>
                            <div className='sec3ContentWrapText'>
                                <p>{data.sec3LeftContentReact}</p>
                                <p>{data.sec3LeftContentJsx}</p>
                                <p>{data.sec3LeftContentThreejs}</p>
                                <p>{data.sec3LeftContentHtml}</p>
                                <p>{data.sec3LeftContentCss}</p>
                            </div>
                        </div>
                        <div className='sec3Link'>
                            <p>GIT</p>
                            <p>LINK</p>
                        </div>
                        <img className='sec3Img' src={data.sec3LeftImg} alt='page1'/>
                        <div style={{backgroundColor : bgColor}}  className='topLeftBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='topRightBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='botLeftBox'></div>
                        <div style={{backgroundColor : bgColor}}  className='botRightBox'></div>
                    </div>
                    <div className='sec3RightContentWrap'>
                        <div>
                            <h1 className='sec3ContentWrapTitle'>{data.sec3RightTitle}</h1>
                            <p className='sec3ContentWrapBotTitle'>{data.sec3RightBot}</p>
                            <div className='sec3ContentWrapText'>
                                <p>{data.sec3RightContentReact}</p>
                                <p>{data.sec3RightContentJsx}</p>
                                <p>{data.sec3RightContentThreejs}</p>
                                <p>{data.sec3RightContentHtml}</p>
                                <p>{data.sec3RightContentCss}</p>
                            </div>
                        </div>
                        <div className='sec3Link'>
                            <p>GIT</p>
                            <p>LINK</p>
                        </div>
                        <img className='sec3Img' src={data.sec3RightImg} alt='page1'/>
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