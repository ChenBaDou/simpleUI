import React from 'react';
import './Tooltip.scss';

/**
 * Tooltip                   组件所传属性描述
 * arrowPointAtCenter       是否箭头指向中心  （考虑到情况少，所有只适用class为top的）
 * placement         string tip位置-class名
 * title             string tip内容
 */
class Tooltip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag : {
                tip:false,
            },

        }
    }

    handleMouseOver(){
        this.setState({
            flag : {
                tip:!this.state.flag.tip
            },
        });
    }

    handleMouseOut(){
        this.setState({
            flag : {
                tip:!this.state.flag.tip
            },
        });
    }

    render() {
        return (
            <div>
                {
                    !this.props.arrowPointAtCenter ?
                        (
                            <div className="tooltip-area"
                                  onMouseOver={this.handleMouseOver.bind(this)}
                                  onMouseOut={this.handleMouseOut.bind(this)}
                            >
                                {
                                    this.state.flag.tip && <label className={this.props.placement || 'top'}>{this.props.title}</label>
                                }
                                {this.props.children}
                            </div>
                    ):(
                        <div className="tooltip-area-arrowPointAtCenter"
                              onMouseOver={this.handleMouseOver.bind(this)}
                              onMouseOut={this.handleMouseOut.bind(this)}
                        >
                            {this.state.flag.tip && <span className="arrowPointAtCenter-title">{this.props.title}</span>}
                            {this.state.flag.tip && <em></em>}
                            {this.props.children}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Tooltip;