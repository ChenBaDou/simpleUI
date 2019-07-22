import React from 'react';

class IconModule extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="layout-icon">
                <ul>
                    <li>
                        <i className="icon-blue-map"></i>
                        <span className="des-name">icon-blue-map</span>
                    </li>
                    <li>
                        <i className="icon-gray-map"></i>
                        <span className="des-name">icon-gray-map</span>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default IconModule;