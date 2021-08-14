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
            <div className="container-lg" style={{ minHeight : '600px' }}>
                <div className="card" style={{ marginTop : '25px' }}>
                    { username && email ? (
                        <div className="card-body">
                            <div className="card-title">
                                Profile
                            </div> 
                            <h5>Username: {username}</h5>
                            <h5>Email Address: {email}</h5>
                        </div>
                    ) 
                    : (
                        null
                    )}
                    <div style={{ marginLeft : 'auto', marginRight : 'auto' }}>
                        <div className="button btn btn-info" onClick={this.logout}>
                            LOGOUT
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {loadUser, logout})(Account);
