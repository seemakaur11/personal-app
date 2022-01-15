import React from 'react'
import Std from './Std'

function Props() {
    const std = {
        id: 1,
        name: "seema",
        sub:"math",
        phone: 122435364
    }
    return (
        <div>
            <Std data={std}/>
        </div>
    )
}

export default Props;





{/* <section id="home" className="banner pt-5">
<div className="banner-slider pt-5">
    <div id="slides" className="pt-4">
        <div className="slides-container">
            <img src={hill3} className="d.block" width=" 100%" height="100%" alt="home" />
        </div>
    </div>

</div>
<div className="container">
    <div className="banner-caption">
        <h1 className="myText1">Hi! I'm Seema</h1>
        <p className="cd-headline clip mt-30">
            <span>Creative Designer & Developer located in India.</span><br />
            <span className="blc">Specialized in</span>
            <span className="cd-words-wrapper">
                <b className="is-visible">Creating Websites.</b>
                <b>Designing Logo.</b>
                <b>Designing UI/UX.</b>
            </span>
        </p>
    </div>
</div>
</section> */}