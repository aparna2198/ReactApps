import React from 'react';

const CommentDetail = (props) => {
    
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.img}></img>
                </a>
                <div className="content">
                    <a className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeago}</span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                </div>
              
            </div>
        </div>
    );
}
export default CommentDetail;