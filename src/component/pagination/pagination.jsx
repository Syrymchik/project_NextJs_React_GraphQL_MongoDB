import React, { Component, Fragment } from 'react'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Router from 'next/router';


const page_number = [
    { vl: 5 } ,
    { vl: 10 } ,
    { vl: 25 } ,
    { vl: 50 } ,
    { vl: 100 } ,
];


class Pagination extends Component {

    state = {
        limit: 10
    };

    static propTypes = {
        after: PropTypes.string,
        before: PropTypes.string
    };

    static defaultProps = {
        after: '',
        before: ''
    };



    changeLimit = ({ target: { value }}) => {
        this.setState( ({limit:  value}))
    };

    render () {
        const {after = '', afterOld = '', before = '', beforeOld = '', index, limit, text = ''} = this.props;

        console.log('limit: '+ limit);

        return (
            <Fragment>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center" spacing={3}>
                    <Grid item xs={12} md={1}>
                        <FormControl variant="outlined" margin={"normal"}>
                            <InputLabel htmlFor="outlined-age-native-simple">Limit</InputLabel>
                            <Select
                                native
                                value={limit}
                                onChange={(el) => {Router.push('/[index]', `/${index}?limit=${el.target.value}&before=${beforeOld}&after=${afterOld}&text=${text}`)}}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value=""/>
                                {
                                    page_number.map( (el, ind) =>
                                        <option key={ind} value={el.vl}>{el.vl}</option>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <ButtonGroup variant="contained" color="primary">
                            <Button onClick={() => Router.push('/[index]', `/${index}?limit=${limit}&before=${before}&after=${null}&text=${text}`)}>Back</Button>
                            <Button onClick={() => Router.push('/[index]', `/${index}?limit=${limit}&before=${null}&after=${after}&text=${text}`)}>Next</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }


}

export default Pagination;