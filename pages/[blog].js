import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Link from 'next/link';
import Head from 'next/head';

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
        <>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <div id="blog-div">
                <div id="blog-div-top">
                    <Link href="/" as={ process.env.BACKEND_URL + '/' }>
                        <button>
                            <FontAwesomeIcon id="home-icon" icon={['fas', 'home']} size='2x'/>
                        </button>
                    </Link>
                    <Link href="/posts" as={ process.env.BACKEND_URL + '/posts' }>
                        <button>
                            <FontAwesomeIcon id="posts-icon" icon={['fas', 'book']} size='2x'/>
                        </button>
                    </Link>
                </div>

                <div id="blog-div-blog">
                    <h1>{frontmatter.title}</h1>
                    <h3>{frontmatter.description}</h3>
                    <h6 style={{color: 'black', margin: '10px 0 15px 0'}}>Published: {frontmatter.date}</h6>

                    <ReactMarkdown
                        plugins={[gfm]}
                        escapeHtml={true}
                        source={content}
                        renderers={{ code: CodeBlock }}
                    />
                </div>
            </div>
        </>
    );
};

export default Blog;

Blog.getInitialProps = async (context) => {
    const { blog } = context.query;

    const content = await import(`../content/${blog}.md`);
    const data = matter(content.default);

    return { ...data };
}