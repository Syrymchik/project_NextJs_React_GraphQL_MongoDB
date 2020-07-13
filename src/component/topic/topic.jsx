import React, {Component, Fragment} from 'react'
import PropTypes from "prop-types";
import Comments from "../comments/comments";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';


const style = {
    marginLeft: '20px'
};

class Topic extends Component {

    state = {
        expanded: false
    };

    static propTypes = {
        commentLimit: PropTypes.number,
        repliesLimit: PropTypes.number,
        permalink: PropTypes.string,
        changeCommentLimit: PropTypes.func,
        changeRepliesLimit: PropTypes.func,
        changePermaLink: PropTypes.func,
    };

    static defaultProps = {
        commentLimit: 100,
        repliesLimit: 100,
        permalink: '',
        changeCommentLimit: (vl) => { alert(vl) },
        changeRepliesLimit: (vl) => { alert(vl) },
        changePermaLink: (vl) => { alert(vl) },

    };

    changeCommentLimit = ({ target: { value }}) => {
        this.props.changeCommentLimit(value);
    };

    changeRepliesLimit = ({ target: { value }}) => {
        this.props.changeRepliesLimit(value);
    };

    handleExpandClick = () => {
        this.setState(({ expanded }) => ({ expanded: !expanded }))
    };

    render = () => {

        const { expanded } = this.state;
        const { query, post = {} } = this.props;
        const { permalink = '', commentLimit = 3, repliesLimit = 5 } = query;
        const { topic = {}, comments = [] } = post;
        const { author = 'no content', title = 'no content', score = 0 } = topic;

        return (
            <Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        {}
                    </Grid>
                </Grid>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <Typography variant="button" display="block" gutterBottom>
                               Score: { score }
                            </Typography>
                        }
                        title={ author}
                    />
                    <CardMedia
                        image=""
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="inherit" component="p">
                            {
                                title
                            }
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            onClick={this.handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Hey everyone:</Typography>
                            <Typography paragraph>
                                Test
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>


                <FormControl variant="outlined" margin={"normal"}>
                    <InputLabel htmlFor="outlined-age-native-simple">Comment limit max</InputLabel>
                    <Select
                        native
                        value={commentLimit}
                        onChange={(vl) => Router.push('/topic', `/topic?commentLimit=${vl.target.value}&repliesLimit=${repliesLimit}&permalink=${permalink}`)}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value=""/>
                        <option value={3}>3</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" margin={"normal"} style={style}>
                    <InputLabel htmlFor="outlined-age-native-simple">Replies limit max</InputLabel>
                    <Select
                        native
                        value={repliesLimit}
                        onChange={(vl) => Router.push('/topic', `/topic?commentLimit=${commentLimit}&repliesLimit=${vl.target.value}&permalink=${permalink}`)}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value=""/>
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </Select>
                </FormControl>
                <Comments comments={ comments } />
            </Fragment>
        )
    }
}

export default Topic;