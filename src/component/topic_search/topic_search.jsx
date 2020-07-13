import React, { Component, Fragment } from 'react'
import TextField from "@material-ui/core/TextField/TextField";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";

const style = {
    marginTop: '20px',
    marginBottom: '20px',
};

class TopicSearch extends Component {

    state = {
        searchText: ''
    };

    searchTextChange = ({ target: { value }}) => {
        this.setState( ({searchText:  value}))
    };

    render(){
        const { searchText } = this.state;
        const { text = '', limit} = this.props;

        return(
            <Fragment>
                <Grid container
                      style={style}
                      justify="center"
                      alignItems="center"
                      direction="row"
                      spacing={3}>
                    <Grid item xs={12} md={5}>
                        <TextField
                            value={searchText}
                            onChange={this.searchTextChange}
                            fullWidth={true}
                            id="outlined-number"
                            label="Search"
                            type="text"
                            autoFocus={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Link as={'/search?text=' + searchText + '&limit=' + limit} href={'/[index]'}>
                            <Button variant="contained" size="large" color="primary">Search</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}


export default TopicSearch;