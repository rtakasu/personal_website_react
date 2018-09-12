import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

class ParallaxSection extends React.Component {
	render (props) {
		return (

	    <ParallaxBanner
				    className="your-class"
				    layers={[
				        {
				            image: '/background-black-and-white-dawn-997443.jpg',
				            amount: 0.3,
				            slowerScrollRate: false,
				        },
				    ]}
				    style={{
				        height: 'auto',
				    }}
				>
				    <section 
							id={this.props.id} 
							className='section'
							style={{backgroundColor: this.props.background}}>
						  <Container>
						  	<Row>
						  		<Col lg={12}>
						  			<div>
						  			<p className="section-heading">{this.props.title}</p>
						  			<div className='blue-heading-div'></div>
						  			</div>	
						  		</Col>
						  	</Row>
						  </Container>

						  {this.props.sectionBody}

						</section>
				</ParallaxBanner>
			
		)
	}
}

export default ParallaxSection;