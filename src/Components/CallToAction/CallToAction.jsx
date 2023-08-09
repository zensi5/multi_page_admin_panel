import React from 'react'
import './CallToAction.scss'

function CallToAction({ link, icon, text }) {
    return (
        <div className="btnWrapper">
            <a
                href={link}
                className="btn"
            >
                {icon}
                <p>{text}</p>
            </a>
        </div>
    )
}

export default CallToAction