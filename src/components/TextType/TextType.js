import React from 'react';
import './TextType.scss';

/**
 * TextType                   组件所传属性描述
 * color            string    颜色 
 * fontSize         string    大小
 * fontWeight       string    加粗
 * lineHeight       string    行高
 */
class TextType extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemStyle : {
                color:props.color || '#262626',
                fontSize:props.fontSize || '14px',
                fontWeight:props.fontWeight || '400',
                lineHeight:props.lineHeight || '28px',
            }
        };
    }

    render() {
        return (
            <div className={"textType-title " + this.props.type +' ' +this.props.className} style={!this.props.type ? this.state.itemStyle : {}}>
                {this.props.children}
            </div>
        );
    }
}

export default TextType;