import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer : {
        text : "Let's hit the beach!",
        iconName: 'sun'
    },
    winter:{
        text: ' Burr it is cold!',
        iconName:'snowflake'
    }
}
const getSeason = (lat,month) => {
    if (month >=3 && month <=8) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat < 0 ? 'winter' : 'summer'
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text,iconName} = seasonConfig[season]
   
    return(
        <div className={`${season} season-display`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{ text }</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    )
}

export default SeasonDisplay