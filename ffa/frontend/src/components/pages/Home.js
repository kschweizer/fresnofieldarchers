import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import Blogform from '../blogposts/Blogform';
import Blogposts from '../blogposts/Blogposts';
import Banner from '../layout/Banner';
import PropTypes, { bool } from 'prop-types';

export class Home extends Component {
    state = {
        edit: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        FB.XFBML.parse();
   }
   componentDidUpdate() {
        FB.XFBML.parse();
   }
    
    toggleEdit = () => this.setState({ edit: !this.state.edit });

    

    render() {
        const { isAuthenticated } = this.props.auth;
        const { edit } = this.state;

        const authHome = (
            <div className="Home container-lg">
                <button className="btn-warning btn-sm" onClick={this.toggleEdit} >
                    Edit
                </button>
                <div className="row">
                    <div className="col-8">
                        { edit? <Blogform /> : null }
                        <Blogposts />  
                    </div>    
                    <div className="col-4">
                        <div className="fb-page" data-href="https://www.facebook.com/fresnoarchers/" data-tabs="timeline" data-width="400" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fresnoarchers/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fresnoarchers/">Fresno Field Archers</a></blockquote></div>    
                    </div> 
                </div>
                
            </div>      
        );

        const guestHome = (
            <div className="Home container-md"> 
                <div className="row">
                    <div className="col-8">
                        <Blogposts />  
                    </div>    
                    <div className="col-4">
                        <div className="fb-page" data-href="https://www.facebook.com/fresnoarchers/" data-tabs="timeline" data-width="400" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fresnoarchers/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fresnoarchers/">Fresno Field Archers</a></blockquote></div>    
                    </div> 
                </div>
            </div>
        );
        return (
            <Fragment>
                <Banner />
                { isAuthenticated? authHome : guestHome }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Home)
