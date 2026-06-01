import React from 'react';

//this component is used to show the schedules, insert a className in the props to change as you want the css
function Schedules(props) {
    const className=props.className;

    return (
        <div className={`${className}-schedules `}>
            <h1 className={`${className}-schedules-h1`}>Nos horaires</h1>
            <div className={`${className}-schedules-hours`}>
                <h2 className={`${className}-schedules-h2`}>Lun - Ven</h2>
                <h3 className={`${className}-schedules-h3`}>8h00-12h00 / 14h00-17h00</h3>
                <h2 className={`${className}-schedules-h2`}>Samedi - Dimanche</h2>
                <h3 className={`${className}-schedules-h3`}>Fermé</h3>
            </div>
        </div>
    );
}

export default Schedules;
