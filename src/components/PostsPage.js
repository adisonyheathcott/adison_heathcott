import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArticlePage from './ArticlePage';

class PostsPage extends React.Component {
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
                        <div id="category-content-div" class="OS">
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
                        <button id="category-button" onClick={() => this.categoryClicked(1)}>
                            <p>Game Engine Development</p>
                            <FontAwesomeIcon id="down-icon" icon={['fas', 'caret-down']} size='2x'/>
                        </button>
                        <div id="category-content-div" class="GameEngine">
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
                        <div id="category-content-div" class="thingy">
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