import React, { useState, useEffect } from "react"
import fetch from "node-fetch"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}
//내가 추가한 css 코드
const body{
    margin: 0;
    font-family: 'Source Sans Pro';
}

const a{
    text-decoration:none;
    color:white;
}

const .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(203, 191, 247);
    padding: 8px 12px;
}

const .navbar__logo {
    font-size: 24px;
    color:cadetblue;

}

const .navbar__logo i {
    color: rgb(97, 57, 241);
}

const .navbar__menu{
    display:flex;
    list-style: none;
    padding-left: 0;
}

const .navbar__menu li{
    padding: 8px 12px;
}

const .navbar__menu li:hover {
    background-color: rgb(230, 132, 255);
    border-radius: 4px;
}

const .navbar__icons {
    list-style: none;
    color:white;
    display: flex;
    padding-left: 0;
}

const .navbar__icons li{
    padding: 8px 12px;
}

const @media screen and (max-width: 768px) {
    .navbar{
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }

    .navbar__menu {
        flex-direction: column;
        align-items: center;
        width:100%;
    }

    .navbar__menu li{
        width:100%;
        text-align: center;
    }

    .navbar__icons{
        justify-content: center;
        width:100%;
    }


}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {

  // Call API
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`/api/posts`)
      .then(response => response.json())
      .then(result => {
        setPosts(result.posts)
      })
  }, [])

  
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        TOGETHER
        <br />
        <span style={headingAccentStyles}>더불어 살아가는 공동체 사회 </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        우리 사회가 모두 알아야할 <code style={codeStyles}>사회 구성원</code>에 대한 정보 아카이빙 페이지
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        {posts.map(post => (
          <li key={post.id} style={{ ...listItemStyles}}>
            <span>
              <a style={linkStyle} href={post.url}>{post.title}</a> on {post.date} by {post.author.name}
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="공동체"
        src="http://web-zine.co.kr:8080/korad/201912/images/sub4-6_img01.jpg" width='70' height='30' fill='none'"
      />
    </main>
  )
}

export default IndexPage
