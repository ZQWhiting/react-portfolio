import React, { useEffect } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section>
			<h1>
				<span>Contacts</span>
			</h1>
			<address>
				<table>
					<tbody>
						<tr>
							<td>Phone:</td>
							<td>
								<a href='tel:4357081971'>(435) 708-1971</a>
							</td>
						</tr>
						<tr>
							<td>Email:</td>
							<td>
								<a href='mailto:zach.whiting@icloud.com'>
									zach.whiting@icloud.com
								</a>
							</td>
						</tr>
						<tr>
							<td>Github:</td>
							<td>
								<a
									className='external-link'
									href='https://github.com/ZQWhiting'
									target='_blank'
									rel='noopener noreferrer'
								>
									github.com/ZQWhiting
									<sup><FontAwesomeIcon icon={faExternalLinkAlt} /></sup>
								</a>
							</td>
						</tr>
						<tr>
							<td>LinkedIn:</td>
							<td>
								<a
									className='external-link'
									href='https://www.linkedin.com/in/zqwhiting'
									target='_blank'
									rel='noopener noreferrer'
								>
									linkedin.com/in/zqwhiting
									<sup><FontAwesomeIcon icon={faExternalLinkAlt} /></sup>
								</a>
							</td>
						</tr>
						<tr>
							<td>Facebook:</td>
							<td>
								<a
									className='external-link'
									href='https://www.facebook.com/zachary.whiting.796'
									target='_blank'
									rel='noopener noreferrer'
								>
									facebook.com/zachary.whiting.796
									<sup><FontAwesomeIcon icon={faExternalLinkAlt} /></sup>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</address>
		</section>
	);
}

export default Contact;
