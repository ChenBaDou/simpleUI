import React from 'react';
import './PicturesBox.scss';
import staticUrl from "../../js/common/static_url";

class PicturesBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noupload: false
        }
    }
    picturesError = (e) => {
        this.setState({
            noupload: true
        });
        e.target.src = `${staticUrl}/resouce/icon-noupload.svg`;
    }
    render() {
        return (
            <div className="upload-selected-picture-card after_upload">
                <span className="upload">
                    <div className={`upload-list-item-info ${this.state.noupload?'noupload':''}`}>
                        <img src={this.props.href} onError={this.picturesError.bind(this)}/>
                        <div className="upload-list-item-actions">
                            <i className="icon icon-yanjing" onClick={this.props.viewPicture.bind(this,this.props.href)}></i>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}


export default PicturesBox;