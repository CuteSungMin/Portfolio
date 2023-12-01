import '../css/section3.css'
import {useState} from 'react'


const Section3 = () => {

    const [unrolled, setUnrolled] = useState(false);

    const handleUnrollToggle = () => {
      setUnrolled(!unrolled);
    };

    return ( 
        <section className='section3'>
            <div className='section3Title'><h1>PROJECT</h1></div>
            <article>

            </article>
        </section>
     );
}
 
export default Section3;