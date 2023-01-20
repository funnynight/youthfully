
import React from 'react';
import Dropdown from '../components/Dropdown';

const HomePage = () => {
	
	return (
		<>
			<div className="px-[200px]">
				<div className="flex gap-8 justify-between">
					<Dropdown label="Section" options={["hot", "cold"]}></Dropdown>
					<Dropdown label="Sort" options={["viral"]}></Dropdown>
					<Dropdown label="Window" options={["day"]}></Dropdown>
				</div>

				<div className="flex mt-4 justify-between">
					<div>
						<label>
							<input type="checkbox" id="check" className="mr-1"/>
							Viral images
						</label>
					</div>

					<div>
						<input type="button" value="Search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage;