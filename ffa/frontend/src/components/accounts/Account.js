import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser, logout } from '../../actions/auth';

export class Account extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    }


    logout = () => {
        this.props.logout();
    }

    render() {
        let { user } = this.props;
        let { username, email } = (user ? user : { username: null, email: null })

        return (
            <div>
                { username && email ? <div> {username}, {email} </div> : null }
                <div className="button btn btn-danger" onClick={this.logout}>
                    LOGOUT
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {loadUser, logout})(Account);
