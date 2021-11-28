import React, { Component, Fragment, Suspense } from 'react'
import { connect } from 'react-redux';
import Blogposts from '../blogposts/Blogposts';
import PropTypes, { bool } from 'prop-types';
import './Home.scss';

export class Home extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    
    toggleEdit = () => this.setState({ edit: !this.state.edit });

    

    render() {
        const guestHome = (
            <div className="home container-lg">
                <div className="home-header row">
                    <h2>Announcements</h2>
                </div>
                <div className="home-content container-lg">
                    <div className="row">
                        <div className="col-sm-7">
                            <Blogposts />  
                        </div>
                        <span className="col-sm-1"></span>
                        <div className="col-sm-4">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffresnoarchers&tabs=timeline&width=350&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="350" height="600" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>    
                        </div> 
                        
                    </div>
                </div>
            </div>
        );
        return (
            <Fragment>
                { guestHome }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Home);
