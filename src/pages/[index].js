import React, {Component} from 'react';
import Nav from '../component/nav/nav'
import TableComponent from '../component/table/table'
import Pagination from '../component/pagination/pagination'
import {getAllPosts, getAllPostsByText} from '../lib/api'
import TopicSearch from "../component/topic_search/topic_search";


class Index extends Component {

    state = {};

    render(){
        const { index, posts = {}, query, beforeOld, afterOld } = this.props;
        const { topics, before, after } = posts;
        const { limit, text } = query;

        let pag = <Pagination after={after} afterOld={afterOld} before={before} beforeOld={beforeOld} index={index} limit={limit} text={text} />;
        let searchComp = <TopicSearch text={text} limit={limit}/>;
        if (index === 'bookmark') pag = null;
        if (index !== 'search') searchComp = null;

        return(
            <div>
                <Nav limit={limit}/>
                {pag}
                {searchComp}
                <TableComponent list={topics} isBookmark={index === 'bookmark'}/>
            </div>
        )
    }
}

export default Index;


export async function getServerSideProps(context) {

    const { query, params } = context;
    const { limit = 10, after = '', before = '', text = '' } = query;
    const { index = 'hot' } = params;
    const afterOld = after, beforeOld = before;
    let result;

    if (index !== 'search') result = (await getAllPosts(index, limit, after, before)) || [];
    else result = (await getAllPostsByText(limit, after, before, text)) || [];

    const posts = result[index] || [];

    return {
        props: {
            posts,
            query,
            index,
            afterOld,
            beforeOld,
        },
    }
}
