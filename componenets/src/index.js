import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () =>
{
    return (
        <div className="ui container comment">
            <ApprovalCard>
            <CommentDetail author="Sam" timeago="Today at 5:45am" img={faker.image.avatar()} content="Amaze balls" />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="John" timeago="Yesterday at 8:45am" img={faker.image.avatar()} content="fire"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Henna" timeago="Today at 1:09am" img={faker.image.avatar()} content="Sad" />
            </ApprovalCard>
        </div> 
        )

}

ReactDOM.render(<App />, document.querySelector('#root'));
