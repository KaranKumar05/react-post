import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';

import './index.css';

function PostButton() {
    const [isClicked, setIsClicked] = useState(false);

    const toggleLike = () => {
        setIsClicked(!isClicked);
    };

    const buttonClass = isClicked ? 'like-btn clicked' : 'like-btn';
    const iconColor = isClicked ? 'blue' : 'rgb(147, 147, 147)';

    return (
        <div className="buttons">
            <div id="likeButton">
                <button id="likeBtn" className={buttonClass} onClick={toggleLike}>
                    <span id="icon" style={{ color: iconColor }}>
                        <Icon.HandThumbsUp />
                        Like
                    </span>
                </button>
            </div>
            <div>
                <button>
                    <span><Icon.Chat /></span>Comment
                </button>
            </div>
            <div>
                <button>
                    <span><Icon.Arrow90degRight /></span>Share
                </button>
            </div>
        </div>
    );
}

export default PostButton;

