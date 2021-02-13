import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Albumgallery from './photos/Albumgallery';
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
            <div className="container-fluid">
                <Albumgallery/>
            </div>
        )

        const authPage = (
            <Fragment>
                <div className="container-fluid">
                    <button className="edit-button btn btn-success" onClick={this.toggleEdit} >
                        Create New Photo Album
                    </button>
                    { edit? <Photoform /> : null }
                    <Albumgallery />
                </div>
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
