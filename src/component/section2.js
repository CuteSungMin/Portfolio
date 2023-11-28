import '../css/section2.css'
import AiImg from "../img/white_aiIcon.svg"
import BlenderImg from "../img/white_blendericon.svg"
import CssImg from "../img/white_cssicon.svg"
import FigmaImg from "../img/white_figmaicon.svg"
import HtmlImg from "../img/white_htmlicon.svg"
import JsImg from "../img/white_jsicon.svg"
import NodeJsImg from "../img/white_nodejsicon.svg"
import PhotoshopImg from "../img/white_photoshopicon.svg"
import ReactImg from "../img/white_reactIcon.svg"
import ThreeJsImg from "../img/white_threejsicon.svg"

const Section2 = () => {
    return ( 
        <section className='section2'>
            <div className='section2Title'><h1>SUPPORT</h1></div>
            <article className='w1500 section2Article'>
                <div className='section2Content'>
                    <div className='topHtml'>
                        <img className='Sec2Img' alt='htmlImg' src={HtmlImg}></img>
                    </div>
                    <div className='topJs'>
                        <img className='Sec2Img' alt='jsImg' src={JsImg}></img>
                    </div>
                    <div className='topThreeJs'></div>
                    <div className='topReact'></div>
                    <div className='topNodeJs'></div>
                </div>
                <div className='section2Content'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>
        </section>
     );
}
 
export default Section2;