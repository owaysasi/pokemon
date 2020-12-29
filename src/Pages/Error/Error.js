import React from 'react';
import './Error.css';
import gang from '../../Pics/Team_Rocket_trio_OS 1.png'

function Error(){
    return(
        <div className="error-container">
            <div className="mini-e-c">
                <div className="error-404">404</div>
                <div className="er-sent">
                    <div className="er-frst-sent">The rocket team</div> 
                    <div className="er-scnd-sent">has won this time.</div>
                </div>
                <img className="gang-pic" src={gang} alt="Gang"/>
                <button type="button" className="return-btn" onClick={() => {
                    window.history.back();
                }}>Return</button>
            </div>
        </div>
    );
}

export default Error;