import React, {Component, Fragment} from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link'
import { addTopic, deleteTopic } from '../../lib/api'
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';



const StyledTableCell = withStyles((theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const style = {
    marginTop: '70px',
}

class Item extends Component {

    state = {};

    static propsTypes = {
        isBookmark: PropTypes.boolean,
        item: PropTypes.shape({
            subreddit: PropTypes.string,
            title: PropTypes.string,
            score: PropTypes.number,
            thumbnail: PropTypes.string,
            url: PropTypes.string,
            selftext: PropTypes.string,
            permalink: PropTypes.string,
            changePermaLink: PropTypes.func,
        })
    };

    static defaultProps = {
        isBookmark: false,
        item: {
            subreddit: 'no content',
            title: 'no content',
            score: 0,
            thumbnail: 'no content',
            url: 'no content',
            selftext: 'no content',
            permalink: 'no content',
            changePermaLink: (vl) => { alert(vl) },
        }
    };

    saveTopic = () => {
        return () => {
            const { item } = this.props;
            addTopic(
                item.permalink,
                item.subreddit,
                item.title,
                item.score,
                item.thumbnail,
                item.url,
                item.selftext,
                item.author ,
                item.created,
            );
        }
    };

    deleteBookMark = () => {
        return () => {
            const { item} = this.props;
            deleteTopic(item.id);
            Router.push('/[index]', '/bookmark');
        }
    };

    render(){
        const { subreddit, title, score, permalink } = this.props.item;
        const { isBookmark = false } = this.props;
        let action;
        if (!isBookmark) {
            action =  <Button
                endIcon={<BookmarkIcon/>}
                onClick={this.saveTopic()}
            >
                save
            </Button>
        } else {
            action = <Button
                endIcon={<DeleteIcon/>}
                onClick={
                    this.deleteBookMark()
                }
            >
                delete
            </Button>
        }

        return (
                    <StyledTableRow>
                        <StyledTableCell colSpan={3} align="justify" component="th"
                                         scope="row"> {subreddit} </StyledTableCell>
                        <StyledTableCell colSpan={7} align="justify">{title}</StyledTableCell>
                        <StyledTableCell colSpan={1} align="center">{score}</StyledTableCell>
                        <StyledTableCell colSpan={1} align="center" >
                            <ButtonGroup
                                orientation="vertical"
                                color="inherit"
                                aria-label="vertical outlined primary button group"
                            >
                                <Link as={'/topic?permalink=' + permalink} href={'/topic'}>
                                    <Button
                                        endIcon={<NavigateNextIcon/>}
                                    >
                                        read
                                    </Button>
                                </Link>
                                {
                                    action
                                }
                            </ButtonGroup>
                        </StyledTableCell>
                    </StyledTableRow>
        )
    }
}

const headNames = {
    title1: 'Subreddit',
    title2: 'Title',
    title3: 'Selftext',
    title4: 'Score',
    title5: 'Action',
};


class TableComponent extends Component {

    state = { };

    static propsTypes = {
        list: PropTypes.array,
        isBookmark: PropTypes.boolean,
        changePermaLink: PropTypes.func,
    };

    static defaultProps = {
        list: [],
        isBookmark: false,
        changePermaLink: (vl) => { alert(vl) },
    };

    render() {
        const { list = [], isBookmark } = this.props;
        if (list.length <= 0) return  <Typography style={style} align="center" variant="h3" gutterBottom>No Content</Typography>;

        return (
            <Fragment>
                <TableContainer component={Paper}>
                    <Table  aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell colSpan={3} align="center" component="th"
                                                 scope="row">{headNames.title1}</StyledTableCell>
                                <StyledTableCell colSpan={7} align="center">{headNames.title2}</StyledTableCell>
                                <StyledTableCell colSpan={1} align="center">{headNames.title4}</StyledTableCell>
                                <StyledTableCell colSpan={1} align="center">{headNames.title5}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                list.map((item, index) =>
                                    <Item item={item} key={index} isBookmark={isBookmark}/>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        )
    }
}

export default TableComponent;