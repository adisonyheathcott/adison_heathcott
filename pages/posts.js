import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import matter from 'gray-matter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta charSet="utf-8"/>
                    <meta name="Description" content={this.props.description}/>
                    <title>{this.props.title}</title>
                </Head>
                <div id="posts-div">
                    <div id="posts-div-top">
                        <Link href="/" as={ process.env.BACKEND_URL + '/' }>
                            <button>
                                <FontAwesomeIcon id="home-icon" icon={['fas', 'home']} size='2x'/>
                            </button>
                        </Link>
                        <h3>POSTS</h3>
                    </div>

                    <div id="post-categories-div">
                        <ul>
                            {this.props.cats.map((word, idx) => (
                                <li id="cat-li" key={idx}>
                                    <button id="cat-li-button">
                                        <p>{word}</p>
                                        <FontAwesomeIcon id="down-icon" icon={['fas', 'caret-down']} size='2x'/>
                                    </button>
                                    <ul id="cat-ul">
                                        {this.props.files[idx].map((name, id) => (
                                            <li id="cat-li-li" key={id}>
                                                <Link href={`adison_heathcott/${matter(name).data.slug}`}>
                                                    <button id="cat-li-li-button">
                                                        {matter(name).data.title}
                                                    </button>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Posts;

function dateToNum(d) {
    d = d.split("-"); return Number(d[2]+d[1]+d[0]);
}

export async function getStaticProps() {
    // Get the general site data
    const siteData = await import('../config.json');

    // Create the filesystem reader
    const fs = require('fs');

    // Get all the md files in the content directory
    const files = fs.readdirSync(`${process.cwd()}/content`, `utf-8`);
    var blogs = files.filter((fn) => fn.endsWith(".md"));

    // Create the array that will break the files apart into categories
    var categories = [];

    for (var i = 0; i < blogs.length; i++) {
        // Get the raw content of the blog in question
        const path = `${process.cwd()}/content/${blogs[i]}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        // If it doesnt already exist add its category to the categories array
        if (!categories.includes(matter(rawContent).data.id)) {
            categories.push(matter(rawContent).data.id);
        }
    }

    // Create the array to hold category files
    var catFiles = [];

    for (var i = 0; i < categories.length; i++) {
        catFiles.push(new Array());
    }

    // 
    for (var i = 0; i < blogs.length; i++) {
        const path = `${process.cwd()}/content/${blogs[i]}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        catFiles[categories.indexOf(matter(rawContent).data.id)].push(rawContent);
    }

    for (var i = 0; i < catFiles.length; i++) {
        catFiles[i].sort(function (a, b) {
            // return dateToNum(matter(a).data.date) - dateToNum(matter(b).data.date);
            return dateToNum(matter(b).data.date) - dateToNum(matter(a).data.date);
        });
    }

    return {
        props: {
            // Site data information
            title: siteData.default.title,
            description: siteData.default.description,

            // Blog information
            cats: categories,
            files: catFiles,
        },
    };
}