import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { IoMdCart } from 'react-icons/io';
import Gemara from './components/Gemara';
import Pages from './components/Pages';
import { studyList } from './studyList';
const App = () => {
	return (
		<div>
			{studyList.map((item, index) => (
				<div key={index}>
					<Gemara type={item.type} />
					{item.masechtot.map((masechet, i) => (
						<div key={i}>
							<div> {masechet.name} </div>
							{masechet.pages.map((page, j) => (
								<div key={j}>
									<div>{page.page}</div>
									{console.log(page.page)}
								</div>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	);
};
export default hot(App);
