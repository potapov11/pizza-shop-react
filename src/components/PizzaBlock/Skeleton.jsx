import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={288}
		height={466}
		viewBox="0 0 288 466"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}>
		<rect x="2" y="312" rx="0" ry="0" width="288" height="67" />
		<rect x="-1" y="260" rx="0" ry="0" width="292" height="34" />
		<rect x="93" y="408" rx="0" ry="0" width="1" height="8" />
		<rect x="130" y="390" rx="4" ry="4" width="152" height="45" />
		<rect x="5" y="400" rx="0" ry="0" width="54" height="27" />
		<circle cx="140" cy="126" r="116" />
	</ContentLoader>
);

export default Skeleton;
