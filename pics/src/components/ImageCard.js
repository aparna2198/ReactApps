import React from 'react';

class ImageCard extends React.Component{
    constructor(props)
    {

        super(props);
        this.imageRef = React.createRef(); 
        // to create a ref we fgoing to define a constructor function  
        // we going to call a constructor function inside a constructor to create a ref
        // and assign it as an instance  variable on our class image ref is instance variable 
        // we can assign referrences to state in our class but we dont since this refs are not going ot chnage in time and we nver going to call set state with  the ref 
        // so dont link to up to state 
            this.state = { spans: 0 };
    }
    componentDidMount() {
    this.imageRef.current.addEventListener('load',this.setSpans)
    }
    setSpans=() =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);// 10 is grid-auto-row that is row is 10opx tall
        this.setState({ spans });/*spans:spans both are same name we ca n write span*/
    }
    render()
    {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                {/* img is a jsx tag it isnot a dom element it will be ecventually turn into dom element to get hanle of it we use ref
                ref system is how we get handle on some particular element that is generated by a tag */}
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    />
            </div>
        )
    }
}
export default ImageCard;