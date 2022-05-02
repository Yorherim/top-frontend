import type { NextPage } from 'next';
import React from 'react';

import { Button, Htag, Paragraph, Tag } from '../components';

const Home: NextPage = () => {
	return (
		<div>
			<Htag tag="h1">Hello</Htag>

			<Button appearance="primary" arrow="right">
				ntrrcn
			</Button>
			<Button appearance="ghost" arrow="down">
				ntrrcn
			</Button>

			<Paragraph size="big">hello</Paragraph>
			<Paragraph>hello</Paragraph>
			<Paragraph size="small">hello</Paragraph>

			<Tag color="ghost">Ghost</Tag>
			<Tag color="grey">ggrey</Tag>
			<Tag color="red">Red</Tag>
			<Tag size="small" color="green">
				Green
			</Tag>
			<Tag color="primary">Green</Tag>
		</div>
	);
};

export default Home;
