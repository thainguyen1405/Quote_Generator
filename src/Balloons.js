import React from 'react';


function Balloons(){
    return(
        <div class="balloon-row">
            {/*<!-- Pink balloon -->*/}
            <svg class="balloon" width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="15" cy="20" rx="13" ry="18" fill="#ff69b4"/>
            <rect x="13" y="38" width="4" height="9" rx="2" fill="#ff69b4"/>
            <path d="M15 47 Q13 49 15 50 Q17 49 15 47" stroke="#ff69b4" stroke-width="1.5" fill="none"/>
            </svg>

            {/*<!-- White balloon -->*/}
            <svg class="balloon" width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="15" cy="20" rx="13" ry="18" fill="#fff"/>
            <rect x="13" y="38" width="4" height="9" rx="2" fill="#fff"/>
            <path d="M15 47 Q13 49 15 50 Q17 49 15 47" stroke="#ff69b4" stroke-width="1.5" fill="none"/>
            </svg>

            {/*<!-- Pink balloon -->*/}
            <svg class="balloon" width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="15" cy="20" rx="13" ry="18" fill="#ff69b4"/>
            <rect x="13" y="38" width="4" height="9" rx="2" fill="#ff69b4"/>
            <path d="M15 47 Q13 49 15 50 Q17 49 15 47" stroke="#ff69b4" stroke-width="1.5" fill="none"/>
            </svg>

            {/*<!-- White balloon -->*/}
            <svg class="balloon" width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="15" cy="20" rx="13" ry="18" fill="#fff"/>
            <rect x="13" y="38" width="4" height="9" rx="2" fill="#fff"/>
            <path d="M15 47 Q13 49 15 50 Q17 49 15 47" stroke="#ff69b4" stroke-width="1.5" fill="none"/>
            </svg>
            {/*<!-- Add more balloons as needed -->*/}
        </div>
    )
}


export default Balloons;