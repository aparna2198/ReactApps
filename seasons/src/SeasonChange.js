import React from 'react';
import './SeasonChange.css';
// not that entire css file is getting copy pasted here what happens is that webpack which is open source dependency
// inside of our project  thats take all these diff files and joins them together is going to see that we are importing
// css file  
// it is going to take content out of there and stick it into the index.html file
const seasonConfig = {
    summer: {
        text: "let's hit the beach",
        iconName:" sun "
    },
    winter: {
        text:"burr its chilly",
        iconName:"snowflake "
    }
}

const getSeason = (lat, month) =>
{
    if (month > 2 && month < 9)
    {
     return    lat > 0 ? 'summer' : 'winter';
    }    
    else
    {
      return    lat > 0 ? 'winter' : 'summer';  
    }
}
const SeasonChange = props =>
{
    
    const season = getSeason(props.lat, new Date().getMonth())
    const { text, iconName}=seasonConfig[season]
   
    return (
        <div className={`season-change ${season}`}>
        <i className={`icon-left massive ${iconName}icon`}/>
        <h1>{text}</h1>    
        <i className={`icon-right massive ${iconName}icon`} />
    </div>
    );
    
}

export default SeasonChange;