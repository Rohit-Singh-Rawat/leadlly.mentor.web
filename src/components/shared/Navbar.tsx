import React from 'react';
import Logo from '../icons/LeadllyLogo';
import BellIcon from '../icons/BellIcon';
import SettingIcon from '../icons/SettingIcon';

import SearchIcon from '../icons/SearchIcon';
import Image from 'next/image';
import img from '../../temp/tempimg.png'
const Navbar = () => {
	return (
		<div className='flex bg-white py-4 px-10 items-center gap-10 text-black'>
			<Logo></Logo>
			<div className='flex rounded-md shadow-[1px_4px_4px_0px_#00000040] bg-[#F1F1F1] p-2 px-6 flex-grow gap-3'>
				<SearchIcon stroke='2'></SearchIcon>
				<input
					type='text'
					placeholder='search for student'
					className='bg-transparent outline-none text-black '
				/>
			</div>
			<div className='font-normal'>Dashboard</div>
			<button className='bg-[#6200EE] py-2 px-3 rounded text-white'>
				Students section
			</button>
			<div className='size-8 '>
				<Image
					src={img}
					width={500}
					height={500}
					alt='Picture of the author'
					className='rounded-full'
				></Image>
			</div>
			<BellIcon />
			<SettingIcon />
		</div>
	);
};

export default Navbar;
