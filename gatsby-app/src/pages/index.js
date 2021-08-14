import React, { useState, useEffect } from "react"
import fetch from "node-fetch"

// styles
const pageStyles = {
  color: "#232129",
  padding: 50, 
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const menuStyles1 = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#b5ffb3",

}

const menuStyles2= {
  display: "inline",
}

const menuStyles3= {
  display: "block",
  color: "#43b53f",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
}
  
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 3000,
}
const headingAccentStyles = {
  color: "#43b53f",
  fontSize: "0.85rem",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#000000",
  padding: 4,
  backgroundColor: "#cbffc9",
  fontSize: "1.05rem",
  borderRadius: 4,
  fontFamily: "-apple-system, Roboto, sans-serif, serif" 
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 16,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#008709",
  fontWeight: "bold",
  fontSize: 18,
  verticalAlign: "baseline",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "square",
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

      <ul style={menuStyles1}>
        <li style={menuStyles2}><a style={menuStyles3} href="#home">Home</a></li>
        <li style={menuStyles2}><a style={menuStyles3} href="#news">News</a></li>
        <li style={menuStyles2}><a style={menuStyles3} href="#contact">Contact</a></li>
        <li style={menuStyles2}><a style={menuStyles3} href="#about">About</a></li>
      </ul>

      <h1 style={headingStyles}>
        <br />
        TOGETHER
        <span style={headingAccentStyles}> ㅡ 더불어 살아가는 우리 사회 </span>
        <span role="img" aria-label="Party popper emojis">
          🤝🌍
        </span>
      </h1>
      <p style={paragraphStyles}>
        website made by Team 토킹 포테이토{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
        🎤🥔
        </span>
        <br /><br />
        우리가 알아야할 <code style={codeStyles}>우리 사회 구성원</code>에 대한 정보글:
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
        alt="공동체 사회 이미지"
        src="sub4-6_img01"
        />
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
