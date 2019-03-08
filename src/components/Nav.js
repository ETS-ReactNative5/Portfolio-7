import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';

class navi extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

	componentDidMount () {}

	render() {
	
		return (
			<div className="navi">
				<div class="nav-wrapper">
					<div>
						<a href="/">
							<img class="headshot" src="/images/sanJoshLogoTransperant.png" alt=""/>
						</a>
				</div>

				<div class="block">
					<Link to ="/">
						<button class="block home-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
							<img class="home-pic" src="/images/07-512.png" alt=""/>
						</button>
					</Link>
				</div>

				<div class="block about">
					<Link to ="/about">	
						<button class="block about-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
							<img class="home-pic" src="/images/aboutIcon.png" alt=""/>
						</button>
					</Link>
				</div>

				<div class="block skills">
					<Link to ="/skills">	
						<button class="block skills-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
							<img class="home-pic" src="/images/skillsIcon.png" alt=""/>
						</button>
					</Link>
				</div>

				<div class="block myWork">
					<Link to ="/myWork">	
						<button class="block myWork-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
							<img class="home-pic" src="/images/myWorkIcon.png" alt=""/>
						</button>
					</Link>
				</div>

				<div class="block contact">
					<Link to ="/contact">	
						<button class="block contact-button" type="button" data-hover="CLICK ME" data-active="I'M ACTIVE">
							<img class="home-pic" src="/images/whiteMailIcon.png" alt=""/>
						</button>
					</Link>
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
}

export default navi;
