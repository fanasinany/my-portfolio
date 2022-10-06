import React from "react";
import CardWork from "../CardWork";
import "./works.css";
import svgImage from "../../Assets/works/svg-store.png";
import qrImage from "../../Assets/works/qrcode.jpg";
import frontImage from "../../Assets/works/skyline.jpg";
import zionImage from "../../Assets/works/zion.png";
import portfolioImage from "../../Assets/works/ny-nivoarijaona.png";
import lrImage from "../../Assets/works/lrcrea.jpg";
import feAdvice from "../../Assets/works/fm-advice-generator.png";
import feQrcode from "../../Assets/works/fm-qrcode.png";
import { FormattedMessage } from "react-intl";

const Works = () => {
    return (
        <section id="works">
            <div className="container">
                <div className="margin-y">
                    <h2 className="title-top"><FormattedMessage id="some.project" /></h2>
                    <p className="description"><FormattedMessage id="project.text" /></p>
                    <div className="career-card-wrapper">
                        <CardWork title="SVG Generator" tags={["reactjs", "html", "css", "nodejs", "mysql"]} description={<FormattedMessage id="svg.generator" />} initial="S" bgColor="#8E7497" imageLink={svgImage} url="https://svg-store.vercel.app/" />
                        <CardWork title="QR Code Generator" tags={["reactjs", "html", "css"]} description={<FormattedMessage id="qr.generator" />} initial="Q" bgColor="#1D1D1D" imageLink={qrImage} url="https://qr-code-by-ny.vercel.app/" />
                        <CardWork title="Front end Award" tags={["html", "css", "js"]} description={<FormattedMessage id="front.end" />} initial="F" bgColor="#1D5053" imageLink={frontImage} url="https://fa-nivoarijaona.netlify.app/" />
                        <CardWork title="Portfolio V2" tags={["reactjs", "html", "css"]} description={<FormattedMessage id="portfolio.me" />} initial="V2" bgColor="#1D1D1D" imageLink={portfolioImage} url="https://ny-nivoarijaona.vercel.app/" />
                        <CardWork title="Zion Market" tags={["nextjs", "html", "css"]} description={<FormattedMessage id="zion.market" />} initial="Z" bgColor="#F99300" imageLink={zionImage} url="http://www.zion-market.com/" />
                        <CardWork title="LR Crea Website" tags={["html", "sass", "js"]} description={<FormattedMessage id="lr.crea" />} initial="L" bgColor="#d85830" imageLink={lrImage} url="https://lrcrea.vercel.app/" />
                        <CardWork title="Advice Generator App" tags={["html", "sass", "js", "api"]} description="Frontend Mentor Challenge" initial="A" bgColor="hsl(217, 19%, 24%)" imageLink={feAdvice} url="https://fanasinany.github.io/fa-mentor-advice-generator" />
                        <CardWork title="QR Code Component" tags={["html", "sass"]} description="Frontend Mentor Challenge" initial="Q" bgColor="#2c7dfa" imageLink={feQrcode} url="https://fanasinany.github.io/fe-mentor-qr-code-component" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;