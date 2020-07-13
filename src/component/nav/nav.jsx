import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Link from "next/link";


class Nav extends Component {

    state = {};

    render = () => {
        const { limit = 10 } = this.props;
        return (
            <Fragment>
                <AppBar position="static" color={"transparent"}>
                    <Toolbar>
                        <Link as={`/hot?limit=${limit}`} href={'/[index]'}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <WhatshotIcon/>
                                <Typography variant="h6">
                                    Hot
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link as={`/news?limit=${limit}`} href={'/[index]'}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <FiberNewIcon/>
                                <Typography variant="h6">
                                    New
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link as={`/search?limit=${limit}`} href={'/search'}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <ImageSearchIcon/>
                                <Typography variant="h6">
                                    Search
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link as={`/bookmark?limit=${limit}`} href={'/[index]'}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <ImageSearchIcon/>
                                <Typography variant="h6">
                                    Bookmark
                                </Typography>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Fragment>
        )
    }
}

export default Nav;