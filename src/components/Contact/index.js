import React from 'react';
import './style.css';

function Contact() {
	return (
		<>
			<h1>My Contacts</h1>
			<address>
				<table>
					<tbody>
						<tr>
							<td>Phone:</td>
							<td>
								<a href='tel:3852376420'>(385) 237-6420</a>
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
									href='https://github.com/ZQWhiting'
									target='_blank'
									rel='noopener noreferrer'
								>
									https://github.com/ZQWhiting
								</a>
							</td>
						</tr>
						<tr>
							<td>LinkedIn:</td>
							<td>
								<a
									href='https://www.linkedin.com/in/zqwhiting'
									target='_blank'
									rel='noopener noreferrer'
								>
									https://www.linkedin.com/in/zqwhiting
								</a>
							</td>
						</tr>
						<tr>
							<td>Facebook:</td>
							<td>
								<a
									href='https://www.facebook.com/zachary.whiting.796'
									target='_blank'
									rel='noopener noreferrer'
								>
									https://www.facebook.com/zachary.whiting.796
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</address>
		</>
	);
}

export default Contact;
