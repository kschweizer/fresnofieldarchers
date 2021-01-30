import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  Photogallery from './photos/Photogallery';
import  Photoform  from './photos/Photoform';


export class Photos extends Component {
    state = {
        edit: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggleEdit = () => this.setState({ edit: !this.state.edit });

    render() {
        const { isAuthenticated } = this.props.auth;
        const { edit } = this.state;

        const guestPage = (
            <Photogallery/>
        )

        const authPage = (
            <Fragment>
                <button className="btn-success btn-sm" onClick={this.toggleEdit} >
                    Upload Photos
                </button>
                { edit? <Photoform /> : null }
                <Photogallery />
            </Fragment>
        )
        return (
            <div>
                { isAuthenticated? authPage : guestPage }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Photos);
