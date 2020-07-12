import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="section-title">
                    <h2>Club History</h2>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <p>
                            The Fresno Field Archers  was reorganized from the Fresno Target Archery Club around 1956. The club moved from Pine Lake Lodge, near Roeding Park, to Millerton Lake in that 
                            same year. The first Fresno Safari was held in 1956 at the Millerton range. In 1958 the club began leasing a property in Dunlap with the option to buy. After hosting the first Safari
                            in Dunlap that same year, the members exercised their purchase option and the property was paid off in 5 years; Dunlap became our permanent home. The Fresno Safari is one of the 
                            nation's longest running outdoor archery tournaments and has attracted some of the world's top shooters. In the early eighties, the Safari drew close to 1000 shooters! 
                            Along with Safari the club also hosts the Gene Foster Traditional Rendezvous.  The Rendezvous draws traditional archers, bow makers, arrow makers, flint knappers and leather 
                            workers from around the state to try their hand at unmarked yardage 3-D targets, pop-ups, balloon shoots and speed rounds.
                        </p>
                        <p>
                            Boasting a 5 star NFAA rating, you won't find a nicer club-owned property for an archery range around. Located near Dunlap, the range consists of 60 separate target 
                            butts spread across 38 acres. Target distances range from 2 to 101 yds and both field and novelty shoots are held. The range also offers 60 separate broadhead pits and 3-D 
                            targets to hone your shooting skills. Nestled amongst the oaks, at an elevation of 1800 ft., the range offers an escape from the winter fog. In the spring, the hillsides 
                            explode with wildflowers making the short trip up Highway 180 a therapeutic escape from the stresses below. The FFA range has a large clubhouse facility with a fireplace and 
                            heater, a full kitchen, restroom facilities with hot showers, and an indoor shooting block. Plenty of camping space and RV hookups are available for members if they choose to 
                            spend a night or two at the range. Individual club members pay $35 a year and families pay $50 a year in dues which give them full access to all the above amenities.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="photo-container">
                            <img className="photo" src="https://fresnofieldarchers.s3-us-west-1.amazonaws.com/images/ffa_history1.png" alt=""/>
                        </div>                           
                    </div>
                </div>
            </div>
        )
    }
}

export default About
