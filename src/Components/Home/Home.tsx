import React from "react";
import { FormattedMessage } from "react-intl";
import "./home.css";

const Home = () => {
    return (
        <section id="home">
            <div className="container center-vh">
                <div className="home-container">
                    <div className="title-and-desc">
                        <h1 className="thick-2"><span>Hello, I'm Ny!</span> <br />I build things for the web.</h1>
                        <p>
                            <FormattedMessage id="hello.ny" defaultMessage="Hello ! I'm Ny, a Front End developer located in Madagascar." />
                        </p>
                        <a className="big-button" href="#about">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30.705" height="18.634" viewBox="0 0 30.705 18.634">
                                <path id="Icon_awesome-chevron-down" data-name="Icon awesome-chevron-down" d="M14.557,26.823.892,13.158a1.687,1.687,0,0,1,0-2.386L2.486,9.177a1.687,1.687,0,0,1,2.384,0L15.75,20,26.631,9.175a1.687,1.687,0,0,1,2.384,0l1.594,1.594a1.687,1.687,0,0,1,0,2.386L16.943,26.823A1.688,1.688,0,0,1,14.557,26.823Z" transform="translate(-0.398 -8.683)" fill="#fff" />
                            </svg>
                            <FormattedMessage id="learn.more" defaultMessage="Learn more about me" />
                        </a>
                    </div>
                    <div className="image-home">
                        <div className="first-img">
                        </div>
                        <div className="last-img">
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;