import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArticlePage from './ArticlePage';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { atext: '' }
    }

    componentDidMount() {
        document.title = "Posts";
    }

    categoryClicked(i) {
        var e;
        switch(i) {
            case 0:
                e = document.getElementsByClassName("OS");
                if (e[0].style.display === "inline-block") {
                    e[0].style.display = "none";
                } else {
                    e[0].style.display = "inline-block";
                }
                break;

            case 1:
                e = document.getElementsByClassName("GameEngine");
                if (e[0].style.display === "inline-block") {
                    e[0].style.display = "none";
                } else {
                    e[0].style.display = "inline-block";
                }
                break;

            case 2:
                e = document.getElementsByClassName("thingy");
                if (e[0].style.display === "inline-block") {
                    e[0].style.display = "none";
                } else {
                    e[0].style.display = "inline-block";
                }
                break;

            default:
                return;
        }
    }

    async postClicked(filename) {
        // const reader = new FileReader();

        // reader.addEventListener('load', function() {
        //     this.prop.atext = this.result;
        // });

        // reader.readAsText(fetch(this.files[fileindex]));
        // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f

        this.readTextFile(filename);
        document.getElementById("article-page-div").style.display = "block";
    }

    readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    var allText = rawFile.responseText;
                    this.setState({
                        atext: allText
                    });
                }
            }
        };
        rawFile.send(null);
    };

    render() {
        return (
            <div id="posts-div">
                <div id="posts-div-top">
                    <Link to="/adison_heathcott/">
                        <button>
                            <FontAwesomeIcon id="home-icon" icon={['fas', 'home']} size='2x'/>
                        </button>
                    </Link>
                    <h3>POSTS</h3>
                </div>

                <div id="post-categories-div">
                    <div id="category-div">
                        <button id="category-button" onClick={() => this.categoryClicked(0)}>
                            <p>Operating System Development</p>
                            <FontAwesomeIcon id="down-icon" icon={['fas', 'caret-down']} size='2x'/>
                        </button>
                        <div id="category-content-div" className="OS">
                            <div id="article-div">
                                <button onClick={() => this.postClicked('/posts/osdev/osdev-intro.md')}>
                                    Introduction to Operating Systems.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the kernel.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the second stage bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Doing other kinds of stuff.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="category-div">
                        <button id="category-button" onClick={() => this.categoryClicked(1)}>
                            <p>Game Engine Development</p>
                            <FontAwesomeIcon id="down-icon" icon={['fas', 'caret-down']} size='2x'/>
                        </button>
                        <div id="category-content-div" className="GameEngine">
                            <div id="article-div">
                                <button>
                                    Introduction to Operating Systems.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the kernel.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the second stage bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Doing other kinds of stuff.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="category-div">
                        <button id="category-button" onClick={() => this.categoryClicked(2)}>
                            <p>Test Thingy Development</p>
                            <FontAwesomeIcon id="down-icon" icon={['fas', 'caret-down']} size='2x'/>
                        </button>
                        <div id="category-content-div" className="thingy">
                            <div id="article-div">
                                <button>
                                    Introduction to Operating Systems.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the kernel.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Writing the second stage bootloader.
                                </button>
                            </div>
                            <div id="article-div">
                                <button>
                                    Doing other kinds of stuff.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <ArticlePage/>
            </div>
        );
    }
}

export default PostsPage;