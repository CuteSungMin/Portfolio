import '../css/section2.css'



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
                    <Sec2Content svgImgBox={<HtmlSvg/>} imgTitle={'HTML'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<JsSvg/>} imgTitle={'JAVA SCRIPT'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<NodeJsSvg/>} imgTitle={'NODEJS'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<ReactSvg/>} imgTitle={'REACT'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<ThreeJsSvg/>} imgTitle={'THREE JS'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                {/* </div>
                <div className='section2Content'> */}
                    <Sec2Content svgImgBox={<CssSvg/>} imgTitle={'CSS'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<FigmaSvg/>} imgTitle={'FIGMA'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<AiSvg/>} imgTitle={'ILLUSTRATOR'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<BlenderSvg/>} imgTitle={'BLENDER'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                    <Sec2Content svgImgBox={<PhotoshopSvg/>} imgTitle={'PHOTOSHOP'} imgText={'DATA의 Change를 원활하게 Help 해주셨으며COMPONENT Recycling에 업무 과다를 없애주셨습니다'}/>
                </div>
            </article>
        </section>
     );
}
 
export default Section2;