import React, { Component } from 'react'
import './Banner.css';

export class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img class="center-block w-100" src="/static/frontend/elephant_shot.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="center-block w-100" src="/static/frontend/elephant_shot.png" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="center-block w-100" src="/static/frontend/elephant_shot.png" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>      
            </div>      
        )
    }
}

export default Banner