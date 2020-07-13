const BASE_API = 'http://localhost:3005/api';
const axios = require('axios');


async function fetchAPI(query, { variables } = {}) {

    const res = await axios.post(BASE_API, JSON.stringify({query, variables,}).replace(/\\n/g, ''), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(r => {
            return r.data.data;
        })
        .catch(err => {
            console.log(err);
            return [];
        });


    return res;
}


export async function getAllPosts(name = 'hot', limit = 10, after = '', before = '') {
    const data = await fetchAPI(` 
    query ($limit: Int, $after: String, $before: String){
       ${name}(limit: $limit, after: $after, before: $before){
            topics{
              subreddit
              permalink
              id
              title
              score
              thumbnail
              url
            }
           before
           after
           dist
        }
    }
  `, { variables: { limit: Number(limit), after, before } });

  return data;
}

export async function getAllPostsByText(limit = 10, after = '', before = '', searchText = '') {
    const data = await fetchAPI(` 
    query ($limit: Int, $after: String, $before: String, $searchText: String){
       search(limit: $limit, after: $after, before: $before, searchText: $searchText){
            topics{
              permalink
              subreddit
              id
              title
              score
              thumbnail
              url
            }
           before
           after
           dist
        }
    }
  `, { variables: { limit: Number(limit), after, before, searchText } });

  return data;
}

export async function getPostByPermaLink(permalink = '', commentLimit = 3, repliesLimit = 5) {
    const data = await fetchAPI(` 
    query TopicAndComment($commentLimit: Int, $repliesLimit: Int, $permalink: String!) {
      topicAndComment(commentLimit: $commentLimit, repliesLimit: $repliesLimit, permalink: $permalink) {
        topic {
          subreddit
          title
          score
          thumbnail
          url
          selftext
          permalink
          author
          created
        }
        comments {
          subreddit
          body
          score
          replies{
            subreddit
            body
            score
          }
        }
      }
    }
  `, { variables: { commentLimit: Number(commentLimit), repliesLimit: Number(repliesLimit), permalink } });

    return data;
}

export async function addTopic(permalink = '', subreddit = '', title = '', score = 0, thumbnail = '', url = '', selftext = '', author = '', created = 0) {
    const data = await fetchAPI(` 
        mutation addTopic( $subreddit: String, $title: String, $score: Int
    , $thumbnail: String, $url: String, $selftext: String
    , $permalink: String!, $author: String, $created: Int) {
    
      addTopic( subreddit: $subreddit, title: $title
      , score: $score, thumbnail: $thumbnail, url: $url, selftext: $selftext
      , permalink: $permalink, author: $author, created: $created) {
        title
        score
      }
    }
  `, { variables: { permalink, subreddit, title, score, thumbnail, url, selftext, author, created } });

    return data;
}

export async function deleteTopic(id = '') {
    console.log('api: delete by id :  ' + id);
    const data = await fetchAPI(` 
           mutation deleteTopic($id: ID!) {
               deleteTopic(id:$id){
                     id
                     subreddit
                   }
      }
  `, { variables: { id } });

    return data;
}
