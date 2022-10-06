import React from "react";
import { FormattedMessage } from "react-intl";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div>
                    <h2 className="title-top"><FormattedMessage id="love.dev" defaultMessage="I love being a web developer !" /></h2>
                    <p className="description">
                        <FormattedMessage id="about.text" />
                    </p>
                    <div className="card-wrapper">
                        <article className="card-service">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46.137" height="41.599" viewBox="0 0 46.137 41.599">
                                    <path id="web-svgrepo-com_1_" data-name="web-svgrepo-com (1)" d="M44.121,51.532h-.63V40.761a3.9,3.9,0,0,0-3.927-3.852H24.077V29.6h2.647a2.019,2.019,0,0,0,2.017-2.017V20.017A2.019,2.019,0,0,0,26.724,18h-8.7a2.019,2.019,0,0,0-2.017,2.017V27.58A2.019,2.019,0,0,0,18.026,29.6H20.3v7.311H6.133a3.817,3.817,0,0,0-3.864,3.852v10.77H2.017A2.019,2.019,0,0,0,0,53.549v4.034A2.019,2.019,0,0,0,2.017,59.6h4.79a2.019,2.019,0,0,0,2.017-2.017V53.549a2.019,2.019,0,0,0-2.017-2.017H6.051V40.761c0-.047,0-.071.082-.071H20.3V51.532h-.378A2.019,2.019,0,0,0,17.9,53.549v4.034A2.019,2.019,0,0,0,19.917,59.6h4.79a2.019,2.019,0,0,0,2.017-2.017V53.549a2.019,2.019,0,0,0-2.017-2.017h-.63V40.691H39.563c.084,0,.145.042.145.071v10.77H39.33a2.019,2.019,0,0,0-2.017,2.017v4.034A2.019,2.019,0,0,0,39.33,59.6h4.79a2.019,2.019,0,0,0,2.017-2.017V53.549A2.019,2.019,0,0,0,44.121,51.532Z" transform="translate(0 -18)" fill="#535661" />
                                </svg>
                            </div>
                            <div className="card-details">
                                <h3><FormattedMessage id="web.dev" /></h3>
                                <p className="sub-title"><FormattedMessage id="webdev.desc" /></p>
                            </div>
                        </article>
                        <article className="card-service">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24.863" height="42.58" viewBox="0 0 24.863 42.58">
                                    <g id="phone-svgrepo-com" transform="translate(-116.261)">
                                        <g id="Groupe_18" data-name="Groupe 18" transform="translate(116.261 0)">
                                            <path id="Tracé_12" data-name="Tracé 12" d="M140.445,58.3V91.6a.273.273,0,0,0,.273.273h20.407a.273.273,0,0,0,.273-.273V58.3a.273.273,0,0,0-.273-.273H140.718A.273.273,0,0,0,140.445,58.3Zm.546.273h19.86V91.328h-19.86Z" transform="translate(-138.602 -53.604)" fill="#535661" />
                                            <path id="Tracé_13" data-name="Tracé 13" d="M251.4,506.134h-2.943a.948.948,0,0,0-.946.946v.589a.947.947,0,0,0,.946.946H251.4a.948.948,0,0,0,.947-.946v-.589A.948.948,0,0,0,251.4,506.134Zm.4,1.534a.4.4,0,0,1-.4.4h-2.943a.4.4,0,0,1-.4-.4v-.589a.4.4,0,0,1,.4-.4h2.943a.4.4,0,0,1,.4.4Z" transform="translate(-237.506 -467.569)" fill="#535661" />
                                            <path id="Tracé_14" data-name="Tracé 14" d="M241.5,25.593h5.269a.427.427,0,1,0,0-.855H241.5a.427.427,0,1,0,0,.855Zm0-.673h5.269a.245.245,0,1,1,0,.49H241.5a.245.245,0,1,1,0-.49Z" transform="translate(-231.562 -22.853)" fill="#535661" />
                                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="0.122" cy="0.122" r="0.122" transform="translate(10.151 2.19)" fill="#535661" />
                                            <circle id="Ellipse_5" data-name="Ellipse 5" cx="0.122" cy="0.122" r="0.122" transform="translate(10.509 2.19)" fill="#535661" />
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="0.122" cy="0.122" r="0.122" transform="translate(10.866 2.19)" fill="#535661" />
                                            <circle id="Ellipse_7" data-name="Ellipse 7" cx="0.122" cy="0.122" r="0.122" transform="translate(11.223 2.19)" fill="#535661" />
                                            <circle id="Ellipse_8" data-name="Ellipse 8" cx="0.122" cy="0.122" r="0.122" transform="translate(11.581 2.19)" fill="#535661" />
                                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="0.122" cy="0.122" r="0.122" transform="translate(11.938 2.19)" fill="#535661" />
                                            <circle id="Ellipse_10" data-name="Ellipse 10" cx="0.122" cy="0.122" r="0.122" transform="translate(12.295 2.19)" fill="#535661" />
                                            <circle id="Ellipse_11" data-name="Ellipse 11" cx="0.122" cy="0.122" r="0.122" transform="translate(12.652 2.19)" fill="#535661" />
                                            <circle id="Ellipse_12" data-name="Ellipse 12" cx="0.122" cy="0.122" r="0.122" transform="translate(13.01 2.19)" fill="#535661" />
                                            <circle id="Ellipse_13" data-name="Ellipse 13" cx="0.122" cy="0.122" r="0.122" transform="translate(13.369 2.19)" fill="#535661" />
                                            <circle id="Ellipse_14" data-name="Ellipse 14" cx="0.122" cy="0.122" r="0.122" transform="translate(13.726 2.19)" fill="#535661" />
                                            <circle id="Ellipse_15" data-name="Ellipse 15" cx="0.122" cy="0.122" r="0.122" transform="translate(14.083 2.19)" fill="#535661" />
                                            <circle id="Ellipse_16" data-name="Ellipse 16" cx="0.122" cy="0.122" r="0.122" transform="translate(14.44 2.19)" fill="#535661" />
                                            <circle id="Ellipse_17" data-name="Ellipse 17" cx="0.122" cy="0.122" r="0.122" transform="translate(14.798 2.19)" fill="#535661" />
                                            <circle id="Ellipse_18" data-name="Ellipse 18" cx="0.297" cy="0.297" r="0.297" transform="translate(19.448 2.144)" fill="#535661" />
                                            <path id="Tracé_15" data-name="Tracé 15" d="M187.649,516.27h-1.416a.079.079,0,0,0-.079.079v.732a.08.08,0,0,0,.079.079.078.078,0,0,0,.078-.079v-.653h1.259v.653a.079.079,0,1,0,.158,0v-.732A.079.079,0,0,0,187.649,516.27Z" transform="translate(-180.829 -476.933)" fill="#535661" />
                                            <path id="Tracé_16" data-name="Tracé 16" d="M191.9,520.3h-.654a.079.079,0,0,0,0,.158h.654a.079.079,0,1,0,0-.158Z" transform="translate(-185.456 -480.652)" fill="#535661" />
                                            <path id="Tracé_17" data-name="Tracé 17" d="M191.9,524.475h-.654a.079.079,0,0,0,0,.159h.654a.079.079,0,1,0,0-.159Z" transform="translate(-185.456 -484.513)" fill="#535661" />
                                            <path id="Tracé_18" data-name="Tracé 18" d="M353.961,517.982h-.545l.015-.039-.278.117.278.117-.015-.038h.545a.29.29,0,1,1,0,.581h-.535a.079.079,0,0,0,0,.158h.535a.449.449,0,1,0,0-.9Z" transform="translate(-335.104 -478.479)" fill="#535661" />
                                            <path id="Tracé_19" data-name="Tracé 19" d="M116.261,3.237V39.343A3.241,3.241,0,0,0,119.5,42.58h18.389a3.241,3.241,0,0,0,3.237-3.237V3.237A3.241,3.241,0,0,0,137.887,0H119.5A3.24,3.24,0,0,0,116.261,3.237Zm23.771,0V39.343a2.147,2.147,0,0,1-2.144,2.144H119.5a2.147,2.147,0,0,1-2.144-2.144V3.237A2.147,2.147,0,0,1,119.5,1.093h18.389A2.146,2.146,0,0,1,140.032,3.237Z" transform="translate(-116.261 0)" fill="#535661" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="card-details">
                                <h3><FormattedMessage id="resp.des" /></h3>
                                <p className="sub-title"><FormattedMessage id="respdes.desc" /></p>
                            </div>
                        </article>
                        <article className="card-service">
                            <div className="icon-box stroke-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46.972" height="44.718" viewBox="0 0 46.972 44.718">
                                    <path id="code-svgrepo-com" d="M17.45,46.144,30.693,2m4.414,33.108L46.144,24.072,35.108,13.036M13.036,35.108,2,24.072,13.036,13.036" transform="translate(-0.586 -1.713)" fill="none" stroke="#535661" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="card-details">
                                <h3><FormattedMessage id="clean.code" /></h3>
                                <p className="sub-title"><FormattedMessage id="cleancode.desc" /></p>
                            </div>
                        </article>
                        <article className="card-service">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="53.389" height="43.378" viewBox="0 0 53.389 43.378">
                                    <path id="design-svgrepo-com" d="M48.383,4H5.005A5,5,0,0,0,0,9.005V35.7A5,5,0,0,0,5.005,40.7H20.021V45.71h-2.5a.834.834,0,0,0-.834.834h0a.835.835,0,0,0,.834.834H35.871a.835.835,0,0,0,.834-.834h0a.835.835,0,0,0-.834-.834h-2.5V40.7H48.383A5,5,0,0,0,53.389,35.7V9.005A5,5,0,0,0,48.383,4ZM31.7,45.71H21.689V40.7H31.7ZM51.72,35.7a3.336,3.336,0,0,1-3.337,3.337H5.005A3.336,3.336,0,0,1,1.668,35.7V9.005A3.336,3.336,0,0,1,5.005,5.668H48.383A3.336,3.336,0,0,1,51.72,9.005ZM43.053,12.392a2.5,2.5,0,0,0-2.858,1.618H30.031V12.342H23.358V14.01H13.194a2.5,2.5,0,1,0,0,1.668H23.358v.374A16.69,16.69,0,0,0,10.034,31.478a.839.839,0,0,0,.836.884h0a.826.826,0,0,0,.829-.779A15.018,15.018,0,0,1,23.358,17.754v1.261h6.674V17.753A15.022,15.022,0,0,1,41.69,31.582a.828.828,0,0,0,.829.781h0a.839.839,0,0,0,.836-.884A16.69,16.69,0,0,0,30.031,16.052v-.374H40.195a2.5,2.5,0,1,0,2.858-3.287ZM10.845,15.679a.834.834,0,1,1,.834-.834A.835.835,0,0,1,10.845,15.679Zm17.518,1.668H25.026V14.01h3.337Zm14.181-1.668a.834.834,0,1,1,.834-.834A.835.835,0,0,1,42.544,15.679Z" transform="translate(0 -4)" fill="#535661" />
                                </svg>
                            </div>
                            <div className="card-details">
                                <h3>Web Design</h3>
                                <p className="sub-title"><FormattedMessage id="webdesign.desc" /></p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;