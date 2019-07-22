import React from 'react';
import './UploadPictures.scss';

class UploadPictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: this.props.uploadStatus || '0', //状态：0.上传前 1.上传中 2.上传后
            pictureName: this.props.pictureName || '',
            picturePath: this.props.picturePath || ''
        };
    }
    // 上传
    uploadPicture = (e) => {
        this.props.upload(e.target.files[0].name, e.target.files[0]);
    }
    // 删除
    delPicture = () => {
        this.props.delPicture();
    }
    componentDidMount() {
        // this.props.onRef(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            uploadStatus: nextProps.uploadStatus,
            pictureName: nextProps.pictureName,
            picturePath: nextProps.picturePath
        });
    }
    render() {
        return (
            <div className={`upload-selected-picture-card ${this.state.uploadStatus!=='2'?'before_upload':'after_upload'}`}>
                <span className="upload">
                    <input type="file"
                           accept="image/png, image/jpeg, image/gif, image/jpg"
                           className="inputFile"
                           onChange={this.uploadPicture.bind(this)} 
                           value='' />
                    {(() => {
                        switch (this.state.uploadStatus) {
                            case '0':
                                return (<div>
                                            <i className="icon icon-tianjia"></i>
                                            <div className="upload-text">{this.props.text}</div>
                                        </div>)
                            case '1':
                                return (<div>
                                            <i className="icon "></i>
                                            <div className="upload-text">上传中...</div>
                                        </div>)
                            case '2':
                                return (<div className="upload-list-item-info">
                                            <img src={this.state.picturePath} title={this.state.pictureName} />
                                            <div className="upload-list-item-actions">
                                                <i className="icon icon-yanjing" onClick={this.props.viewPicture.bind(this,this.state.picturePath)}></i>
                                                <i className="icon icon-lajitong" onClick={this.delPicture.bind(this)}></i>
                                            </div>
                                        </div>)
                            default :
                                return (<div>
                                            <i className="icon icon-tianjia"></i>
                                            <div className="upload-text">{this.props.text}</div>
                                        </div>)
                        }
                    })()}
                </span>
            </div>
        );
    }
}


export default UploadPictures;