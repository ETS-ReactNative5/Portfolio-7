import React from 'react';

const navi = () => {
	return (
		<div className="navi">
			<div class="nav-wrapper">
				<div>
					<img class="headshot" src="/images/sanJoshLogoTransperant.png" alt=""/>
				</div>

				<div class="block">
					<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/07-512.png" alt=""/></button>
				</div>

				<div class="block about">
				<button class="block about-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/aboutIcon.png" alt=""/></button>
				</div>

				<div class="block skills">
				<button class="block skills-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/skillsIcon.png" alt=""/></button>
				</div>

				<div class="block myWork">
				<button class="block myWork-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/myWorkIcon.png" alt=""/></button>
				</div>

				<div class="block contact">
				<button class="block contact-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE"><img class="home-pic" src="/images/whiteMailIcon.png" alt=""/></button>
				</div>

				<div class="socialMediaIconsDiv">
					<a href="https://www.instagram.com/sanjosh24/"><img class="socialMediaIcons" src="/images/instagramIcon.png" alt="instagram"/></a>
					<a href="https://www.facebook.com/josh.matos.167"><img class="socialMediaIcons" src="/images/facebookIcon.png" alt="facebook"/></a>
					<a href="https://www.linkedin.com/in/joshua-matos1/"><img class="socialMediaIcons" src="/images/linkedInIcon.png" alt="linkedin"/></a>
					<a href="https://github.com/SanJosh24"><img class="gitHubIcons" src="/images/githubIcon.png" alt="github"/></a>
				</div>

			</div>
		</div>
	)
};

export default navi;
