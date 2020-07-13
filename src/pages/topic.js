import React, {Component} from 'react';
import Nav from '../component/nav/nav'
import Topic from '../component/topic/topic'
import {getPostByPermaLink} from '../lib/api'


class Topics extends Component {

    state = {
        message: 'props is work'
    };

    render(){
        const { post, query } = this.props;

        return(
            <div>
                <Nav/>
                <Topic post={post} query={query} />
            </div>
        )
    }
}

export default Topics;


export async function getServerSideProps(context) {

    const { query } = context;
    const { permalink = '', commentLimit = 3, repliesLimit = 5 } = query;

    const result = (await getPostByPermaLink(permalink, commentLimit, repliesLimit)) || {};

    const post = result.topicAndComment || {};

    return {
        props: {
            post,
            query,
        },
    }
}