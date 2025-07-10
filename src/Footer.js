import {Box} from "grommet";
import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <Box fill="horizontal" pad="large" direction="column" align="center" alignContent="center"
                 margin={{"bottom": "large"}}>
                Copyright © 2025 Lyuye
            </Box>
        )
    }
}

export {Footer};