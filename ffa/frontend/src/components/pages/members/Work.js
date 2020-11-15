import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
export class Work extends Component {
    IMAGE_URL = "/static/frontend/safarimap.png"
    AREAS_MAP = {
        name: "work-map",
        areas: [
            { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
            { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
            { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
            { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
            { name: "5", shape: "circle", coords: [170, 100, 10 ], preFillColor: "red" },
        ]
    }
    render() {
        return (
            <div>
                <ImageMapper src={this.IMAGE_URL} map={this.AREAS_MAP} />
            </div>
        )
    }
}

export default Work;
