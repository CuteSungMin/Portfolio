import '../css/section2.css'

// section2 데이터
import Sec2Data from "../data/section2.json"


//svg
import AiSvg from "../img/AiSvg.js"
import BlenderSvg from "../img/BlenderSvg.js"
import CssSvg from "../img/CssSvg.js"
import FigmaSvg from "../img/FigmaSvg.js"
import PhotoshopSvg from "../img/PhotoshopSvg.js"
import HtmlSvg from "../img/HtmlSvg.js"
import JsSvg from "../img/JsSvg.js"
import NodeJsSvg from "../img/NodeJsSvg.js"
import ReactSvg from "../img/ReactSvg.js"
import ThreeJsSvg from "../img/ThreeJsSvg.js"



const Section2 = () => {
    const contentData = [
        { svgImg : <HtmlSvg/>, imgTitle : Sec2Data.imgTitle.html, imgText: Sec2Data.imgText.html},
        { svgImg : <JsSvg/>, imgTitle : Sec2Data.imgTitle.js, imgText: Sec2Data.imgText.js},
        { svgImg : <NodeJsSvg/>, imgTitle : Sec2Data.imgTitle.nodeJs, imgText: Sec2Data.imgText.nodeJs},
        { svgImg : <ReactSvg/>, imgTitle : Sec2Data.imgTitle.react, imgText: Sec2Data.imgText.react},
        { svgImg : <ThreeJsSvg/>, imgTitle : Sec2Data.imgTitle.ThreeJs, imgText: Sec2Data.imgText.ThreeJs},
        { svgImg : <CssSvg/>, imgTitle : Sec2Data.imgTitle.css, imgText: Sec2Data.imgText.css},
        { svgImg : <FigmaSvg/>, imgTitle : Sec2Data.imgTitle.figma, imgText: Sec2Data.imgText.figma},
        { svgImg : <AiSvg/>, imgTitle : Sec2Data.imgTitle.ai, imgText: Sec2Data.imgText.ai},
        { svgImg : <PhotoshopSvg/>, imgTitle : Sec2Data.imgTitle.photoshop, imgText: Sec2Data.imgText.photoshop},
        { svgImg : <BlenderSvg/>, imgTitle : Sec2Data.imgTitle.blender, imgText: Sec2Data.imgText.blender},
    ]

    // 콘텐츠들 컴포넌트
    const Sec2Content = ({imgTitle,imgText, svgImgBox})=>{
        return(
            <div className='sec2ItemWrap'>
                <div className='sec2Img'>{svgImgBox}</div>
                <div className='sec2Text'>
                    <h1 className="imgTitle">{imgTitle}</h1>
                    <p className="imgText">{imgText}</p>
                </div>
            </div>
        )
    }

    return ( 
        <section className='section2'>
            <div className='section2Title'><h1>SUPPORT</h1></div>
            <article className='w1500 section2Article'>
                <div className='section2Content'>
                    {contentData.map((data, index) => (
                        <Sec2Content
                            key={index}
                            svgImgBox={data.svgImg}
                            imgTitle={data.imgTitle}
                            imgText={data.imgText}
                        />
                    ))}
                </div>
            </article>
        </section>
     );
}
 
export default Section2;