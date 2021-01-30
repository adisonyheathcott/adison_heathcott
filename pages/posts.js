import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Posts extends React.Component {
    render() {
        return (
            <>
                <div id="posts-div">
                    <div id="posts-div-top">
                        <Link href={"/"}>
                            <button>
                            <FontAwesomeIcon id="home-icon" icon={['fas', 'home']} size='2x'/>
                            </button>
                        </Link>
                        <h3>POSTS</h3>
                    </div>

                    <div id="post-categories-div">

                    </div>
                </div>
            </>
        );
    }
}

export default Posts;