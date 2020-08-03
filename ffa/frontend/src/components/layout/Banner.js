import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="center-block w-100" src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/elephant_shot.png" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="center-block w-100" src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/elephant_shot.png" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="center-block w-100" src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/elephant_shot.png" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>      
            </div>      
        )
    }
}

export default Banner