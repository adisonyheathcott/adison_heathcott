import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './about.js'
import Footer from './footer';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		showNavBar: false
		};
	}

	showNavBar = () => {
		this.setState({
		showNavBar: !this.state.showNavBar
		});
	};

	render() {
		return (
		<>
			<Head>
         		<meta name="viewport" content="initial-scale=1.0, width: device-width"/>
         		<meta charSet="utf-8"/>
         		<meta name="Description" content={this.props.description}/>
         		<title>{this.props.title}</title>
	     	</Head>

			<div id="homepage-div">
				<div id="top-display">
					<div id="buffer-div"></div>

					<div id="tinted-display">
						<h1 id="name-text">Adison Heathcott</h1>
						<p>| Computer Engineering | Software |</p>
					</div>

					<div id="social-div">
						<div id="social-tinted">
							<button id="navbar-button" onClick={this.showNavBar}>
								<FontAwesomeIcon id="social-icon" icon={['fas', 'bars']} size='3x' style={{ transform: this.state.showNavBar ? "rotate(-90deg)" : "rotate(0deg)" }}/>
							</button>
							<button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://www.linkedin.com/in/adison-heathcott-13958119b/"}}>
								<FontAwesomeIcon id="social-icon" icon={['fab', 'linkedin']} size='3x'/>
							</button>
							<button id="social-button" onClick={(e) => {e.preventDefault(); window.location.href="https://github.com/adisonyheathcott"}}>
								<FontAwesomeIcon id="social-icon" icon={['fab', 'github']} size='3x'/>
							</button>
						</div>

						<div id="nav-menu" style={{ display: this.state.showNavBar ? "inline-flex" : "none" }}>
							<Link href={"/posts"}>
								<button id="nav-button">
									Posts
								</button>
							</Link>
						</div>
					</div>
				</div>

				<About/>
				<Footer/>
			</div>
		</>
		);
	}
}

export async function getStaticProps() {
	const siteData = await import('../config.json');
	// const fs = require("fs");
	
	// const files = fs.readdirSync(`${process.cwd()}/content`, `utf-8`);
	
	// const blogs = files.filter((fn) => fn.endsWith(".md"));
	
	// const data = blogs.map((blog) => {
	// 	const path = `${process.cwd()}/content/${blog}`;
	// 	const rawContent = fs.readFileSync(path, {
	// 		encoding: "utf-8",
	// 	});

	// 	return rawContent;
	// });

	return {
		props: {
			// data: data,
			title: siteData.default.title,
			description: siteData.default.description,
		},
	};
}






// import React from 'react';
// import Head from 'next/head';
// import matter from 'gray-matter';
// import Link from 'next/link';

// const Index = ({data, title, description}) => {
//   const RealData = data.map((blog) => matter(blog));
//   const ListItems = RealData.map((listItem) => listItem.data);

//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="initial-scale=1.0, width: device-width"/>
//         <meta charSet="utf-8"/>
//         <meta name="Description" content={description}/>
//         <title>{title}</title>
//       </Head>
//       <h1>Blog test thingy</h1>
//       <div>
//         <ul>
//           {ListItems.map((blog, i) => (
//             <li key={i}>
//               <Link href={`/${blog.slug}`}>
//                 <a>{blog.title}</a>
//               </Link>
//               <p>{blog.description}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Index;

// export async function getStaticProps() {
//   const siteData = await import('../config.json');
//   const fs = require("fs");
  
//   const files = fs.readdirSync(`${process.cwd()}/content`, `utf-8`);
  
//   const blogs = files.filter((fn) => fn.endsWith(".md"));
  
//   const data = blogs.map((blog) => {
//     const path = `${process.cwd()}/content/${blog}`;
//     const rawContent = fs.readFileSync(path, {
//       encoding: "utf-8",
//     });

//     return rawContent;
//   });

//   return {
//     props: {
//       data: data,
//       title: siteData.default.title,
//       description: siteData.default.description,
//     },
//   };
// }