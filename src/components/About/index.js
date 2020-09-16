import React from 'react';
import photo from '../../assets/images/me.jpg';
import './style.css';

function About() {
	const bioText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend finibus odio id finibus. Praesent imperdiet nec nulla convallis consequat. Curabitur vestibulum massa dui, in posuere elit rutrum vel. Etiam est libero, bibendum vitae odio eget, condimentum commodo leo. Proin vitae ipsum ligula. Integer dictum dapibus iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris non pharetra erat, vitae vulputate leo. Vivamus laoreet lorem sed faucibus egestas. Nulla posuere nibh pharetra lorem egestas sagittis. Cras elementum leo vel malesuada dapibus. Cras pulvinar est eu eleifend interdum. Ut id massa ut magna posuere egestas.\r\n

	Donec vel nulla convallis, rutrum justo non, venenatis mauris. Aenean non commodo arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu mi, accumsan quis elementum eget, ultrices in sem. Vestibulum non lobortis odio, eu imperdiet mauris. Donec ac nisi at magna faucibus lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam justo tortor, sagittis sit amet lacus quis, faucibus condimentum metus. Integer in nulla id leo varius elementum vitae et leo. Quisque volutpat massa urna, a vestibulum neque euismod nec. Phasellus nec purus dignissim, volutpat nisi ut, sagittis dui. Duis et diam non erat porttitor tempus. Nam aliquet varius tempor.\r\n

	Integer viverra nulla maximus fermentum ultrices. Sed consequat suscipit arcu, ornare dictum erat gravida at. Curabitur non risus bibendum, dictum risus in, efficitur massa. Aliquam non nisi in nulla imperdiet auctor vel non nisi. Suspendisse facilisis sem gravida tortor pretium, sed pulvinar tellus porta. Nulla sit amet nisi lorem. Quisque tincidunt nisi lectus, fringilla ornare neque laoreet ut. Suspendisse pretium mattis sapien, non suscipit velit commodo vitae. Vestibulum quis porta ligula, non ultrices lorem. Duis eu felis ac justo convallis euismod. Aliquam ultricies, ante in tristique vehicula, eros ligula consectetur orci, eget consectetur lacus nibh quis sem.`;

	return (
		<section>
			<h2>About me</h2>
			<div className='photo'>
				<img src={photo} alt='Zachary Q. Whiting' />
			</div>
			<div className='bio'>
				{bioText.split(/(?:\r\n)/g).map((paragraph) => (
					<p>{paragraph}</p>
				))}
			</div>
		</section>
	);
}

export default About;
