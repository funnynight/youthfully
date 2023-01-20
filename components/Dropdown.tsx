import React from 'react';

const Dropdown: React.FC<{label: string, options: Array<string>}> = ({label, options}) => {
	return (
		<>
			<div className="flex flex-col w-[300px]">
				<label>{label}</label>
				<div className="relative w-full lg:max-w-sm mt-3">
					<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
						{
							options.map((e: string, ind) => (
								<option key={ind}>{e}</option>
							))
						}
					</select>
				</div>
			</div>
		</>
	)
}

export default Dropdown;