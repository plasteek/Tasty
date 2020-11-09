import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import './Card.css';

class Card extends React.Component {

    constructor() {
        super();
        this.state = {
            loadingImage: true,
            cardAnim: false
        }

        this.startAnim = this.startAnim.bind(this);
    }
    render() {
        return (
                <div {...this.props.flipProps} className={this.props.className} >
                    <Flipped flipId={`foodPhoto-${this.props.details.idMeal}`} >
                        {this.props.details.idMeal !== this.props.parentState.foodDetails?.id &&        
                                <div onClick={() => { this.props.showDetails(this.props.details.idMeal, this.props.details) }} className="card" style={{backgroundImage: !this.state.loadingImage ? `url("${this.props.details.strMealThumb}")` : "", backgroundSize: "cover"}} >
                                    <div className="image-placeholder"></div>

                                    <div className="description">
                                        <div className="name">
                                            {this.props.name}
                                        </div>
                                        <div className="type">
                                            {`${this.props.details.strArea} Food`}
                                        </div>
                                    </div>
                                </div>
                        }
                    </Flipped>
                </div>

        );
    }

    componentDidMount() {
        let image = new Image();
        image.src = this.props.details.strMealThumb;
        image.onload = () => {
            this.setState(_prev => {
                return {
                    ..._prev,
                    loadingImage: false
                }
            })
        }

        setTimeout(this.startAnim, 100);
    }

    startAnim() {
        this.setState(_prev => {
            return {
                ..._prev,
                cardAnim: true
            }
        })
    }
}

export default Card;