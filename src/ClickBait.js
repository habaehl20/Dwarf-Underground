import React, { Component } from 'react'
import RealmAd from './RealmAd'
import MountainAd from './MountainAd'
import GoldAd from './GoldAd'
import IndianaAd from './IndianaAd'

class ClickBait extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                    < RealmAd />
                    < MountainAd/>
                    < GoldAd/>
                    < IndianaAd/>
            </div>
        )
    }
}
export default ClickBait