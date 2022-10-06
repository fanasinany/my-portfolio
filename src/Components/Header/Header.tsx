import React, { FC, useContext, useEffect, useState } from "react";
import Drawer from 'react-modern-drawer';
import "./header.css";
import 'react-modern-drawer/dist/index.css';
import ActiveMenuLink from "active-menu-link";
import { Context } from "../Wrapper/Wrapper";
import { FormattedMessage } from "react-intl";

interface MenuLinkProps {
    isMobile?: boolean;
    closeDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLink: FC<MenuLinkProps> = ({ isMobile, closeDrawer }) => {

    return (
        <ul className={`nav-center navbar-items ${isMobile && "show-menu-mobile"}`}>
            <li>
                <a href="#home" onClick={() => closeDrawer(false)}>
                    {isMobile &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.641" height="19.02" viewBox="0 0 19.641 19.02">
                            <g id="home-svgrepo-com" transform="translate(0 -2.79)">
                                <path id="Tracé_70" data-name="Tracé 70" d="M35.567,40.479l-6.663-5.5a.834.834,0,0,0-1.062,0l-6.663,5.5a.834.834,0,0,0-.3.644v8.294a.834.834,0,0,0,.834.834H35.036a.834.834,0,0,0,.834-.834V41.122A.833.833,0,0,0,35.567,40.479Zm-6.312,8.1H27.491v-4.62h1.764v4.62Zm4.947,0H30.924V43.127a.834.834,0,0,0-.834-.834H26.656a.834.834,0,0,0-.834.834v5.454H22.544V41.516l5.829-4.809L34.2,41.516Z" transform="translate(-18.552 -28.44)" fill="#585858" />
                                <path id="Tracé_71" data-name="Tracé 71" d="M19.328,10.364c-1.859-1.489-3.611-2.913-5.514-4.479-.568-.511-1.166-.994-1.744-1.462S10.919,3.49,10.379,3A.834.834,0,0,0,9.262,3c-.54.486-1.125.96-1.691,1.418S6.4,5.374,5.827,5.885C3.924,7.452,2.172,8.875.313,10.364a.834.834,0,1,0,1.043,1.3c1.869-1.5,3.632-2.929,5.546-4.505l.028-.024c.54-.486,1.125-.96,1.691-1.418.4-.32.8-.648,1.2-.987.4.339.8.667,1.2.987.566.458,1.151.932,1.691,1.418l.028.024c1.914,1.576,3.676,3.008,5.546,4.505a.834.834,0,0,0,1.043-1.3Z" transform="translate(0 0)" fill="#585858" />
                            </g>
                        </svg>
                    }
                    <FormattedMessage id="header.home" defaultMessage="Home" />
                </a>
            </li>
            <li>
                <a href="#about" onClick={() => closeDrawer(false)}>
                    {isMobile &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.37" height="19.098" viewBox="0 0 16.37 19.098">
                            <g transform="translate(-4 -2)">
                                <path id="Tracé_72" data-name="Tracé 72" d="M13.775,11.549A4.775,4.775,0,1,0,9,6.775a4.775,4.775,0,0,0,4.775,4.775Zm0-8.185a3.41,3.41,0,1,1-3.41,3.41A3.41,3.41,0,0,1,13.775,3.364Z" transform="translate(-1.59)" fill="#585858" />
                                <path id="Tracé_73" data-name="Tracé 73" d="M12.867,18H11.5A7.5,7.5,0,0,0,4,25.5a.682.682,0,0,0,.682.682H19.688a.682.682,0,0,0,.682-.682A7.5,7.5,0,0,0,12.867,18ZM5.405,24.821a6.139,6.139,0,0,1,6.1-5.457h1.364a6.139,6.139,0,0,1,6.1,5.457Z" transform="translate(0 -5.087)" fill="#585858" />
                            </g>
                        </svg>
                    }
                    <FormattedMessage id="header.about" defaultMessage="About" />
                </a>
            </li>
            <li>
                <a href='#career' onClick={() => closeDrawer(false)}>
                    {isMobile &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.231" height="19.293" viewBox="0 0 23.231 19.293">
                            <g id="XMLID_350_" transform="translate(0.001 -19.723)">
                                <g id="XMLID_351_" transform="translate(8.254 20.883)">
                                    <path id="XMLID_352_" d="M84.186,34.339h11.98a1.5,1.5,0,0,0,0-3H84.186a1.5,1.5,0,0,0,0,3Z" transform="translate(-82.688 -31.344)" fill="#585858" />
                                </g>
                                <g id="XMLID_439_" transform="translate(8.254 27.872)">
                                    <path id="XMLID_440_" d="M96.166,101.344H84.186a1.5,1.5,0,1,0,0,3h11.98a1.5,1.5,0,1,0,0-3Z" transform="translate(-82.688 -101.344)" fill="#585858" />
                                </g>
                                <g id="XMLID_441_" transform="translate(8.254 34.86)">
                                    <path id="XMLID_443_" d="M96.166,171.344H84.186a1.5,1.5,0,1,0,0,3h11.98a1.5,1.5,0,1,0,0-3Z" transform="translate(-82.688 -171.344)" fill="#585858" />
                                </g>
                                <g id="XMLID_444_" transform="translate(-0.001 26.712)">
                                    <path id="XMLID_445_" d="M4.87,91.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469A.748.748,0,0,0,4,95.038H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z" transform="translate(0.001 -89.723)" fill="#585858" />
                                </g>
                                <g id="XMLID_446_" transform="translate(-0.001 19.723)">
                                    <path id="XMLID_447_" d="M4.87,21.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469A.748.748,0,0,0,4,25.038H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z" transform="translate(0.001 -19.723)" fill="#585858" />
                                </g>
                                <g id="XMLID_448_" transform="translate(-0.001 33.7)">
                                    <path id="XMLID_449_" d="M4.87,161.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469a.748.748,0,0,0,.348.086H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z" transform="translate(0.001 -159.723)" fill="#585858" />
                                </g>
                            </g>
                        </svg>
                    }
                    <FormattedMessage id="header.career" defaultMessage="Career" />
                </a>
            </li>
            <li>
                <a href='#works' onClick={() => closeDrawer(false)}>
                    {isMobile &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.349" height="20.604" viewBox="0 0 20.349 20.604">
                            <g id="Iconly_Curved_Work" data-name="Iconly/Curved/Work" transform="translate(-1.788 -1.7)">
                                <g id="Work">
                                    <path id="Stroke_1" data-name="Stroke 1" d="M11.961,16.517V13.889" fill="none" stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path id="Stroke_2" data-name="Stroke 2" d="M21.09,11.477l-.029.021a17.52,17.52,0,0,1-9.1,2.393A17.48,17.48,0,0,1,2.863,11.5l-.03-.021" fill="none" stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path id="Stroke_4" data-name="Stroke 4" d="M2.75,13.351c0-6.152,2.3-8.2,9.211-8.2s9.211,2.051,9.211,8.2-2.3,8.2-9.211,8.2S2.75,19.5,2.75,13.351Z" fill="none" stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                    <path id="Stroke_6" data-name="Stroke 6" d="M15.224,5.369v-.63a2.184,2.184,0,0,0-2.06-2.289H10.759A2.184,2.184,0,0,0,8.7,4.739v.63" fill="none" stroke="#585858" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                            </g>
                        </svg>
                    }
                    <FormattedMessage id="header.works" defaultMessage="Works" />
                </a>
            </li>
            <li>
                <a href='#contact' onClick={() => closeDrawer(false)}>
                    {isMobile &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.085" height="19.085" viewBox="0 0 19.085 19.085">
                            <path id="contact-svgrepo-com" d="M16.405,11.952H14.338v-1.59h2.386V8.771H10.362v1.59h2.386v1.59H10.68a6.674,6.674,0,0,0-6.664,6.362H4v4.771H23.085V18.314h-.016A6.674,6.674,0,0,0,16.405,11.952Zm-5.725,1.59h5.725a5.237,5.237,0,0,1,5.067,4.771H5.613A5.237,5.237,0,0,1,10.68,13.542Zm10.815,7.952H5.59V19.9h15.9ZM11.4,6.386h11.68v1.59H11.4A3.981,3.981,0,0,1,7.429,4h1.59A2.386,2.386,0,0,0,11.4,6.386Z" transform="translate(-4 -4)" fill="#585858" />
                        </svg>
                    }
                    <FormattedMessage id="header.contact" defaultMessage="Contact" />
                </a>
            </li>
        </ul>
    )
}

const Header = () => {
    const context = useContext(Context);

    function changeLanguage(local: string) {
        var new_loc = local === "en" ? "fr" : "en";
        context.changeLanguage(new_loc);
    }

    const [isLight, setIsLight] = useState<boolean | null>(null);

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const changeTheme = () => {
        if (isLight) {
            localStorage.setItem("theme-portfolio-ny", "dark");
            setIsLight(false);
        } else {
            localStorage.setItem("theme-portfolio-ny", "light");
            setIsLight(true);
        }
    }

    const checkAndChangeTheme = () => {
        if (localStorage.getItem("theme-portfolio-ny") && localStorage.getItem("theme-portfolio-ny") === "light") {
            document.body.classList.remove('dark-mode')
            setIsLight(true);
        }
        else if (localStorage.getItem("theme-portfolio-ny") && localStorage.getItem("theme-portfolio-ny") === "dark") {
            document.body.classList.add('dark-mode')
            setIsLight(false);
        }
        else {
            setIsLight(true);
        }
    }

    useEffect(() => {
        checkAndChangeTheme();
    }, [isLight])

    useEffect(() => {
        let options = {
            activeClass: "active"
        };

        new ActiveMenuLink(".navbar", options);
        new ActiveMenuLink(".drawer-wrapper", options);
    }, [])


    return (
        <React.Fragment>
            <header>
                <nav className="navbar">
                    <div className="nav-left">
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="logo-animate" width="46" height="46" viewBox="0 0 46 46">
                                <g id="Groupe_65" data-name="Groupe 65" transform="translate(-6564 218)">
                                    <g id="Rectangle_38" data-name="Rectangle 38" transform="translate(6564 -218)" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="18">
                                        <rect width="46" height="46" stroke="none" className="svg-elem-1"></rect>
                                        <rect x="1" y="1" width="44" height="44" fill="none" className="svg-elem-2"></rect>
                                    </g>
                                    <text id="N" transform="translate(6576 -184)" fontSize="30" fontFamily="Poppins" fontWeight="600">
                                        <tspan x="0" y="0">N</tspan>
                                    </text>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <MenuLink closeDrawer={setIsOpen} />
                    <div className="nav-right">
                        <button className="btn-language" onClick={() => changeLanguage(context.locale)}>
                            {context.locale === "fr" ? "FR" : "EN"}
                        </button>
                        <button className="btn-swith-mode" onClick={changeTheme}>
                            {isLight ?
                                <svg id="Sun" xmlns="http://www.w3.org/2000/svg" width="22.694" height="23.229" viewBox="0 0 22.694 23.229">
                                    <path id="Tracé_1" data-name="Tracé 1" d="M23.222,18.279A5.076,5.076,0,1,0,28.3,23.356,5.082,5.082,0,0,0,23.222,18.279Zm0,9.437a4.36,4.36,0,1,1,4.36-4.36A4.365,4.365,0,0,1,23.222,27.716Z" transform="translate(-11.827 -11.645)" />
                                    <path id="Tracé_2" data-name="Tracé 2" d="M31.363,4.78a.363.363,0,0,0,.363-.363V.363a.363.363,0,0,0-.726,0V4.417A.363.363,0,0,0,31.363,4.78Z" transform="translate(-20.016)" />
                                    <path id="Tracé_3" data-name="Tracé 3" d="M31.363,50.83a.363.363,0,0,0-.363.363v4.054a.363.363,0,1,0,.726,0V51.193A.363.363,0,0,0,31.363,50.83Z" transform="translate(-20.016 -32.381)" />
                                    <path id="Tracé_4" data-name="Tracé 4" d="M54.511,30.445H50.457a.363.363,0,1,0,0,.726h4.054a.363.363,0,1,0,0-.726Z" transform="translate(-32.18 -19.395)" />
                                    <path id="Tracé_5" data-name="Tracé 5" d="M5.516,30.808a.363.363,0,0,0-.363-.363H1.1a.363.363,0,1,0,0,.726H5.153A.363.363,0,0,0,5.516,30.808Z" transform="translate(-0.736 -19.395)" />
                                    <path id="Tracé_6" data-name="Tracé 6" d="M44.543,13.572a.362.362,0,0,0,.257-.106L47.667,10.6a.363.363,0,0,0-.513-.513l-2.867,2.867a.363.363,0,0,0,.257.62Z" transform="translate(-28.412 -6.357)" />
                                    <path id="Tracé_7" data-name="Tracé 7" d="M44.8,45.016a.363.363,0,0,0-.513.513L47.153,48.4a.363.363,0,0,0,.513-.513Z" transform="translate(-28.412 -28.61)" />
                                    <path id="Tracé_8" data-name="Tracé 8" d="M12.895,13.466a.363.363,0,0,0,.513-.513l-2.867-2.867a.363.363,0,0,0-.513.513Z" transform="translate(-6.588 -6.357)" />
                                    <path id="Tracé_9" data-name="Tracé 9" d="M13.364,45.041c-.006-.008-.009-.017-.016-.024a.363.363,0,0,0-.513,0l-1.43,1.43-1.464,1.4a.363.363,0,0,0-.012.513c.007.007.017.01.024.017s.009.017.016.024a.363.363,0,0,0,.513,0l1.43-1.43,1.464-1.4a.363.363,0,0,0,.012-.513C13.381,45.05,13.372,45.047,13.364,45.041Z" transform="translate(-6.528 -28.61)" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.833" height="27.714" viewBox="0 0 26.833 27.714">
                                    <path id="moon-svgrepo-com" d="M23.678,15.223A12.253,12.253,0,0,1,6.363,1.063,12.254,12.254,0,1,0,24.086,15.006C23.951,15.08,23.817,15.154,23.678,15.223Z" transform="matrix(-0.174, -0.985, 0.985, -0.174, 3.136, 27.898)" />
                                </svg>
                            }
                        </button>
                        <button className="btn-menu" onClick={toggleDrawer}>
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.521" height="13.521" viewBox="0 0 13.521 13.521">
                                    <path id="Icon_material-close" data-name="Icon material-close" d="M21.021,8.862,19.659,7.5l-5.4,5.4-5.4-5.4L7.5,8.862l5.4,5.4-5.4,5.4,1.362,1.362,5.4-5.4,5.4,5.4,1.362-1.362-5.4-5.4Z" transform="translate(-7.5 -7.5)" fill="#535661" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18">
                                    <path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,27h27V24H4.5Zm0-7.5h27v-3H4.5ZM4.5,9v3h27V9Z" transform="translate(-4.5 -9)" fill="#535661" />
                                </svg>}
                        </button>
                    </div>
                </nav>
            </header>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drawer-menu'
                size={320}
            >
                <div className="drawer-wrapper">
                    <h2>Ny Nivoarijaona</h2>
                    <hr className="line-menu" />
                    <MenuLink isMobile={isOpen} closeDrawer={setIsOpen} />
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default Header;