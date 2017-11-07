import React from 'react'
import Grid from '../components/Grid'

export default class Content extends React.Component {      
    render() {
        return (
            <div className="content" id="content">
                This is the main content.
                <Grid />
            </div>
        );
    }
}