import React from 'react';
import { useState } from 'react';
import { PackageDesc } from './components/PackageDesc';
import './WorkPackage.css';

const WorkPackage = () => {
    const [showDetails, setShowDetails] = useState(<PackageDesc title='Combined' />);

    function openPackageDetails(title) {
        setShowDetails(<PackageDesc title={title} />);  // Pass title as a prop
    }
    return (
     
        <section className='packages'>
            <div className='side_buttons_div'>
                <button onClick={()=>openPackageDetails('Combined')} label="second one">Wedding - Combined</button>
                <button onClick={()=>openPackageDetails('GroomSide')} label="first one">Wedding - Groom Side</button>
                <button onClick={()=>openPackageDetails('BrideSide')} label="second one">Wedding - Bride Side</button>
            </div>
    
                {showDetails}
        </section>
    );
};

export default WorkPackage;
