import React, { useEffect, useState } from "react";
import "./citation.css";
import photo from "../../Assets/4x4.jpg";
import axios from "axios";
import { FormattedMessage } from "react-intl";
import { HashLoader } from "react-spinners";

const Citation = () => {
    const [isLike, setIsLike] = useState(false);
    const [total, setTotal] = useState(0);
    const [loadingLike, setLoadingLike] = useState(false);

    useEffect(() => {
        getNumberLike();
        if ((localStorage.getItem("like-portf-ny")) === "yes") {
            setIsLike(true);
        } else {
            localStorage.setItem("like-portf-ny", "no")
        }
    }, [])

    const addLike = () => {
        setLoadingLike(true);
        if (isLike) {
            if (total > 0) {
                axios.get("https://like-number.herokuapp.com/remove.php").then(function () {
                    setIsLike(current => !current)
                    getNumberLike();
                    localStorage.setItem("like-portf-ny", "no")
                }).finally(function () {
                    setLoadingLike(false);
                })
            }
        }
        else {
            axios.get("https://like-number.herokuapp.com/add.php").then(function () {
                setIsLike(current => !current)
                getNumberLike();
                localStorage.setItem("like-portf-ny", "yes")
            }).finally(function () {
                setLoadingLike(false);
            })
        }
    }

    const getNumberLike = () => {
        axios.get("https://like-number.herokuapp.com/").then(function (res) {
            setTotal(res.data)
        })
    }

    return (
        <section id="citation">
            <div className="container">
                <div className="margin-y">
                    <hr className="line-separator"></hr>
                    <div className="citation-wrapper">
                        <div className="photo-ny">
                            <img src={photo} alt="4x4" />
                        </div>
                        <div className="citation-details">
                            <p className="developer-quote"><FormattedMessage id="developer.quotes" /></p>
                            <p>-</p>
                            <p>Patrick McKenzie</p>
                            <div>
                                <div className={`heart-box ${isLike ? "liked" : ""}`} onClick={addLike}>
                                    {!loadingLike ? <svg xmlns="http://www.w3.org/2000/svg" width="35.581" height="31.417" viewBox="0 0 35.581 31.417">
                                        <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M32.392,7.01a8.573,8.573,0,0,0-12.126,0L18.613,8.662,16.961,7.01A8.575,8.575,0,1,0,4.835,19.136l1.652,1.652L18.613,32.914,30.739,20.788l1.652-1.652a8.573,8.573,0,0,0,0-12.126Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg> : <HashLoader color="#46dff0" size={28} />}
                                </div>
                                <div className="like-numbers">
                                    {total} <span>loves</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Citation;