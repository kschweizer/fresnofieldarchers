import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import './Range.scss';

export class Range extends Component {
    state = {
        rangeTarget: "Click on a target to see its information",
    }

    IMAGE_URL = "/static/frontend/safarimap.png"
    AREAS_MAP = {
        name: "range-map",
        areas: [
            { name: "1", shape: "circle", coords: [1340, 1950, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "2", shape: "circle", coords: [1200, 1950, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "3", shape: "circle", coords: [1010, 1920, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "4", shape: "circle", coords: [980, 1805, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "5", shape: "circle", coords: [925, 1765, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "6", shape: "circle", coords: [850, 1700, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "7", shape: "circle", coords: [720, 1550, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "8", shape: "circle", coords: [627, 1623, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "9", shape: "circle", coords: [585, 1515, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "10", shape: "circle", coords: [499, 1410, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "11", shape: "circle", coords: [436, 1257, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "12", shape: "circle", coords: [499, 1167, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "13", shape: "circle", coords: [630, 1156, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "14", shape: "circle", coords: [630, 1219, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "15", shape: "circle", coords: [698, 1317, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "16", shape: "circle", coords: [767, 1183, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "17", shape: "circle", coords: [868, 1435, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "18", shape: "circle", coords: [901, 1252, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "19", shape: "circle", coords: [876, 1120, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "20", shape: "circle", coords: [915, 956, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "21", shape: "circle", coords: [983, 1030, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "22", shape: "circle", coords: [983, 1178, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "23", shape: "circle", coords: [980, 1287, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "24", shape: "circle", coords: [1000, 1635, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "25", shape: "circle", coords: [1117, 1473, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "26", shape: "circle", coords: [1090, 1618, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "27", shape: "circle", coords: [1128, 1618, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "28", shape: "circle", coords: [1180, 1638, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "29", shape: "circle", coords: [1314, 1703, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "30", shape: "circle", coords: [1298, 1588, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "31", shape: "circle", coords: [1355, 1542, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "32", shape: "circle", coords: [1468, 1495, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "33", shape: "circle", coords: [1506, 1460, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "34", shape: "circle", coords: [1506, 1388, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "35", shape: "circle", coords: [1435, 1274, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "36", shape: "circle", coords: [1437, 1126, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "37", shape: "circle", coords: [1366, 1057, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "38", shape: "circle", coords: [1298, 1014, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "39", shape: "circle", coords: [1350, 983, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "40", shape: "circle", coords: [1511, 912, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "41", shape: "circle", coords: [1484, 795, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "42", shape: "circle", coords: [1298, 819, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "43", shape: "circle", coords: [1473, 570, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "44", shape: "circle", coords: [1539, 381, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "45", shape: "circle", coords: [1503, 379, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "46", shape: "circle", coords: [1519, 288, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "47", shape: "circle", coords: [1500, 329, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "48", shape: "circle", coords: [1301, 425, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "49", shape: "circle", coords: [1358, 499, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "50", shape: "circle", coords: [1238, 557, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "51", shape: "circle", coords: [1380, 617, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "52", shape: "circle", coords: [1229, 734, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "53", shape: "circle", coords: [1164, 814, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "54", shape: "circle", coords: [1128, 899, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "55", shape: "circle", coords: [1041, 1057, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "56", shape: "circle", coords: [1134, 1126, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "57", shape: "circle", coords: [1060, 1191, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "58", shape: "circle", coords: [1175, 1252, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "59", shape: "circle", coords: [1139, 1312, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
            { name: "60", shape: "circle", coords: [1262, 1482, 30 ], preFillColor: "rgba(212, 12, 12, 0.1)", fillColor: "rgba(212, 12, 12, 0.5)", strokeColor: "rgba(0, 0, 0, 1)", },
        ]
    }

    onClick = (area, index, event) => {
        this.setState({rangeTarget: area.name});
    };

    render() {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 992) {
            var width = 700;
        } else {
            var width = 350;
        }
        return (
            <div className="range container-lg">
                <div className="card bg-primary">
                    <div className="card-body">
                        <h5 className="card-title">
                            Target: {this.state.rangeTarget}
                        </h5> 

                    </div>
                </div>
                <div className="range-image">
                    <ImageMapper src={this.IMAGE_URL} map={this.AREAS_MAP} width={width} imgWidth={1700} onClick={this.onClick} />
                </div>
            </div>
        )
    }
}

export default Range;
