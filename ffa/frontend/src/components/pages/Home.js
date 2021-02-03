import React, { Component, Fragment, Suspense } from 'react'
import { connect } from 'react-redux';
import Blogform from '../blogposts/Blogform';
import Blogposts from '../blogposts/Blogposts';
import Banner from '../layout/Banner';
import PropTypes, { bool } from 'prop-types';
import { FaBaby } from 'react-icons/fa';
import './Home.scss';

export class Home extends Component {
    state = {
        edit: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        if (window.FB) {
            window.FB.XFBML.parse(document.getElementById('fb-page'));
        }
    }
    
    toggleEdit = () => this.setState({ edit: !this.state.edit });

    

    render() {
        const { isAuthenticated } = this.props.auth;
        const { edit } = this.state;

        const authHome = (
            <div className="home container-fluid">
                <div className="home-header row">
                    <div className="title col-sm-4">ANNOUNCEMENTS</div>
                </div>
                <div className="home-content container-lg">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="fb-page" data-href="https://www.facebook.com/fresnoarchers/" data-tabs="timeline" data-width="350" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fresnoarchers/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fresnoarchers/">Fresno Field Archers</a></blockquote></div>    
                        </div> 
                        <span className="col-sm-1"></span>   
                        <div className="col-sm-7">
                            <button className="btn-warning btn-sm" onClick={this.toggleEdit} >
                                Edit
                            </button>
                            { edit? <Blogform /> : null }
                            <Blogposts />  
                        </div>
                    </div>
                </div>
            </div>      
        );

        const guestHome = (
            <div className="home container-fluid">
                <div className="home-header row">
                    <div className="title col-sm-4">
                        ANNOUNCEMENTS
                    </div>
                </div>
                <div className="home-content container-lg">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="fb-page" data-href="https://www.facebook.com/fresnoarchers/" data-tabs="timeline" data-width="350" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fresnoarchers/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fresnoarchers/">Fresno Field Archers</a></blockquote></div>    
                        </div> 
                        <span className="col-sm-1"></span> 
                        <div className="col-sm-7">
                            <Blogposts />  
                        </div> 
                    </div>
                </div>
            </div>
        );
        return (
            <Fragment>
                { isAuthenticated? authHome : guestHome }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Home);
