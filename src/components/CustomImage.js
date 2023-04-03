import React, { Component } from 'react'

export default class CustomImage extends Component {
    render() {
        const myStyle = {
            width: 18 + "rem"
        }
        const { src, title, altText, href } = this.props
        return (
            <>
                <hr />
                <p><b>Q4. Create a class component - , that takes the following props: src, title, altText, href; The component should render an image with title on top and clicking the image should open the link in new tab. </b></p>
                <div className='col d-flex justify-content-center'>
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <a href={href} target="_blank" rel="noreferrer">
                            <img className="card-img-top" src={src} alt={altText} />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
