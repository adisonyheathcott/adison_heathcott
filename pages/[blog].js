import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Link from 'next/link';

const CodeBlock = ({ language, value }) => {
    return (
        <SyntaxHighlighter showLineNumbers={true} langauge={language}>
            {value}
        </SyntaxHighlighter>
    );
};

const Blog = ({content, data}) => {
    const frontmatter = data;

    return (
        <div id="blog-div">
            <div id="blog-div-top">
                <Link href="/adison_heathcott/">
                    <button>
                        <FontAwesomeIcon id="home-icon" icon={['fas', 'home']} size='2x'/>
                    </button>
                </Link>
                <Link href={"/adison_heathcott/posts"}>
                    <button>
                        <FontAwesomeIcon id="posts-icon" icon={['fas', 'book']} size='2x'/>
                    </button>
                </Link>
            </div>

            <div id="blog-div-blog">
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.description}</h3>

                <ReactMarkdown
                    escapeHtml={true}
                    source={content}
                    renderers={{ code: CodeBlock }}
                />
            </div>
        </div>
    );
};

export default Blog;

Blog.getInitialProps = async (context) => {
    const { blog } = context.query;

    const content = await import(`../content/${blog}.md`);
    const data = matter(content.default);

    return { ...data };
}