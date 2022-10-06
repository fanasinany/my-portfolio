import React, { FC } from "react";
import "./card-work.css";


interface CardWorkProps {
    title: any;
    url?: string;
    description: any;
    initial: string;
    imageLink: string;
    bgColor?: string;
    tags?: string[];
}

const CardWork: FC<CardWorkProps> = ({ title, url, description, initial, imageLink, bgColor, tags }) => {

    const goToSite = () => {
        window.open(url, "_blank")
    }
    return (
        <article className="card-work" onClick={goToSite}>
            <img src={imageLink} className="image-work" alt="thumbnail-work" />
            <div className="information-work">
                <div className="round-init-text" style={{ backgroundColor: bgColor }}>
                    {initial}
                </div>
                <div className="description-work">
                    <h3>{title}</h3>
                    <span>{description}</span>
                    <div className="tags-work">
                        {tags && tags.map((index, key) => {
                            return <span key={key}>{index}{key !== (tags.length - 1) ? "," : ""}</span>
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardWork;