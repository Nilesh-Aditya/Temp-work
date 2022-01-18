import './assets/css/fontawesome-all.min.css';
import './App.css';
import './assets/css/main.css';
import { Link } from "react-router-dom";

function App() {
	return (
		<>
			<div className='bcover is-preload'>
			<div id="wrapper">

	{/* <!-- Main --> */}
		<div id="main">
			<div className="inner">

				{/* <!-- Header --> */}
					<header id="header">
					
						<img src="images\logo.jpg" alt="odelogo" />
						<h1 className="oddeheading"><strong>THE ODDE</strong></h1>
						<br/>
					</header>
						<section id="navbar">
								<li className="pages"></li>
								<li><a href="#">Home</a></li>
								<li><a href="#">Wanderlust</a></li>
								<li><a href="#">Kouture & More</a></li>
								<li><a href="#">UNcensored</a></li>
								<li><a href="#">Memesplaining</a></li>
								<li><a href="#">Society</a></li>
								<li><a href="#">Be the Change</a></li>
								<li><a href="#">BeeKraft</a></li>
								{/* <a href="#">Home</a>
								<a href="#">Wanderlust</a>
								<a href="#">Kouture & More</a>
								<a href="#">UNcensored</a>
								<a href="#">Memesplaining</a>
								<a href="#">Society</a>
								<a href="#">Be the Change</a>
								<a href="#">BeeKraft</a> */}
						<ul className="icons">
							<li><a href="https://www.google.com" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="https://www.google.com" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="https://www.google.com" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
						</ul>
					
					</section>
				{/* <!-- Banner --> */}
					<section id="banner">
						<div className="content">
							<header>
								<h1>THE ODDE</h1>
							
								<p>A free and fully responsive site </p>
							</header>
							<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
							<ul className="actions">
								<li><a href="https://www.google.com" className="button big">Learn More About Us</a></li>
							</ul>
						</div>
						<span className="image object">
							<img src="images/pic10.jpg" alt="" />
						</span>
					</section>

				{/* <!-- Section --> */}
					<section>
						<div className="posts">
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic01.jpg" alt="" /></a>
								<h3>Interdum aenean</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic02.jpg" alt="" /></a>
								<h3>Nulla amet dolore</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic03.jpg" alt="" /></a>
								<h3>Tempus ullamcorper</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic04.jpg" alt="" /></a>
								<h3>Sed etiam facilis</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic05.jpg" alt="" /></a>
								<h3>Feugiat lorem aenean</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic06.jpg" alt="" /></a>
								<h3>Amet varius aliquam</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
								<ul className="actions">
									<li><a href="https://www.google.com" className="button">More</a></li>
								</ul>
							</article>
						</div>
					</section>

			</div>
		</div>

	{/* <!-- Sidebar --> */}
		<div id="sidebar">
			<div className="inner">

				{/* <!-- Search --> */}
					<section id="search" className="alt">
						<form method="post" action="https://www.google.com">
							<input type="text" name="query" id="query" placeholder="Search" />
						</form>
					</section>

				{/* <!-- Menu --> */}
					<nav id="menu">
						<header className="major">
							<h2>Menu</h2>
						</header>
						<ul>
							<li><a href="index.html">Home</a></li>

							<li><a href="aboutus.html">About Us</a></li>
					
							<li><a href="https://www.google.com">Contact Us</a></li>
						
							<li><a href="login.html">Login</a></li>
							<li><a href="sign-up.html">Sign - up </a></li>

						


						</ul>
					</nav>

				{/* <!-- Section --> */}
					<section>
						<header className="major">
							<h2>More Articles</h2>
						</header>
						<div className="mini-posts">
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic07.jpg" alt="" /></a>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic08.jpg" alt="" /></a>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
							</article>
							<article>
								<a href="https://www.google.com" className="image"><img src="images/pic09.jpg" alt="" /></a>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
							</article>
						</div>
						<ul className="actions">
							<li><a href="https://www.google.com" className="button">More</a></li>
						</ul>
					</section>

				{/* <!-- Section --> */}
					<section>
						<header className="major">
							<h2>Subscribe to our Newsletter:</h2>
						</header>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<button type="button">Subscribe Now</button>
					</section>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<p className="copyright">&copy; The Odde Tribune 2020.</p>
					</footer>
			</div>
			{/* <Link to='/' className="toggle"> Toggle </Link> */}
				<a href="#sidebar" className = "toggle">Toggle</a>
		</div>

	</div>
			</div>
		</>
	);
}

export default App;
