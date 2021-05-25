import React, { useEffect, useState } from "react";
import logo from "../../assets/image/Netflix_Logo_RGB.png";
import notiImage from "../../assets/image/Dota.jpg";
import avatar from "../../assets/icon/logo.svg";
import { ReactComponent as Bell } from "../../assets/icon/bell.svg";
import { ReactComponent as Box } from "../../assets/icon/gift-box.svg";
import { ReactComponent as Loupe } from "../../assets/icon/magnifying-glass.svg";
import { ReactComponent as Arrow } from "../../assets/icon/down-arrow.svg";
import useHover from "../../hooks/useHover";
import "./styles.css";

function Nav() {
	const [show, handleShow] = useState(false);
	const [userHoverRef, isUserHovered] = useHover();
	const [notiHoverRef, isNotiHovered] = useHover();
	useEffect(() => {
		const scrollCallBack = window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener("scroll", scrollCallBack);
		};
	}, []);

	return (
		<div className={`nav ${show && "--active"}`}>
			<a className='nav__logo' href='#'>
				<img src={logo} alt='Netflix logo' />
			</a>
			<ul className='navigation'>
				<li className='navigation__item --current'>
					<a className='navigation__link' href='#'>
						Home
					</a>
				</li>
				<li className='navigation__item'>
					<a className='navigation__link' href='#'>
						TV Shows
					</a>
				</li>
				<li className='navigation__item'>
					<a className='navigation__link' href='#'>
						Movies
					</a>
				</li>
				<li className='navigation__item'>
					<a className='navigation__link' href='#'>
						New &amp; Popular
					</a>
				</li>
				<li className='navigation__item'>
					<a href='#'>My List</a>
				</li>
			</ul>
			<div className='navigation-secondary'>
				<div className='navigation__item'>
					<input
						className='search-input'
						type='text'
						placeholder='Titles, people, genres'
					/>
					<Loupe></Loupe>
				</div>
				<div className='navigation__item'>
					<span>DVD</span>
				</div>
				<div className='navigation__item'>
					<Box></Box>
				</div>
				<div className='navigation__item' ref={notiHoverRef}>
					<Bell></Bell>
					{isNotiHovered ? <NotificationModal></NotificationModal> : ""}
				</div>
				<div className='navigation__item' ref={userHoverRef}>
					<img src={avatar} alt='User avatar' className='nav__avatar' />
					<Arrow
						className={`drop-down-icon ${isUserHovered ? "--active" : ""}`}
					></Arrow>
					{isUserHovered ? <MenuDropDown></MenuDropDown> : ""}
				</div>
			</div>
		</div>
	);
}

function MenuDropDown() {
	return (
		<div className='menu-drop-down'>
			<ul className='users'>
				<li className='user'>
					<a href='#'>
						<img src={avatar} alt='User avatar' className='user__avatar' />
						<span>User 1</span>
					</a>
				</li>
				<li className='user'>
					<a href='#'>
						<img src={avatar} alt='User avatar' className='user__avatar' />
						<span>User 2</span>
					</a>
				</li>
				<li className='user'>
					<a href='#'>
						<img src={avatar} alt='User avatar' className='user__avatar' />
						<span>User 3</span>
					</a>
				</li>
				<li className='user'>
					<a href='#'>
						<img src={avatar} alt='User avatar' className='user__avatar' />
						<span>User 4</span>
					</a>
				</li>
				<li className='user --manage'>
					<a href='#'>
						<span>Manage profile</span>
					</a>
				</li>
			</ul>
			<span className='line'></span>
			<ul className='nav-links'>
				<li className='nav-link'>
					<a href='#'>
						<span>Account</span>
					</a>
				</li>
				<li className='nav-link'>
					<a href='#'>
						<span>Help Center</span>
					</a>
				</li>
				<li className='nav-link'>
					<a href='#'>
						<span>Sign out of Netflix</span>
					</a>
				</li>
			</ul>
		</div>
	);
}

function NotificationModal() {
	return (
		<div className='noti__modal'>
			<ul className='noti__list'>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
				<li className='noti__item'>
					<div className='noti__content'>
						<img src={notiImage} alt='' />
						<div className='noti__text'>
							<div className='noti__title'>
								<p>Watch It Again</p>
								<p>DOTA: Dragon's Blood</p>
							</div>
							<div className='noti__date'>
								<p>5 days ago</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
export default Nav;
