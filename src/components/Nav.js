import React from 'react';

const navi = () => {
	return (
		<div className="navi">
			<div class="nav-wrapper">
				<div class="block">
					<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/07-512.png" alt=""/></button>
				</div>
				<div class="block about">
				<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/aboutIcon.png" alt=""/></button>
					{/* <h1>P</h1> */}
				</div>
				<div class="block skills">
				<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/skillsIcon.png" alt=""/></button>
					{/* <h1>A</h1> */}
				</div>
				<div class="block myWork">
				<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/myWorkIcon.png" alt=""/></button>
					{/* <h1>C</h1> */}
				</div>
				<div class="block contact">
				<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/whiteMailIcon.png" alt=""/></button>
					{/* <h1>C</h1> */}
				</div>
			</div>
		</div>
	)
};

export default navi;
