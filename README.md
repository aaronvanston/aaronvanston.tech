# [aaronvanston.tech](https://aaronvanston.tech/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/12643560-2185-4024-a5c2-7559686f8605/deploy-status)](https://app.netlify.com/sites/aaronvanston/deploys)


Source for my personal website [aaronvanston.tech](https://aaronvanston.tech/). This site is built around speed maximising lighthouse scores to 100%.

## Tech stach

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [styled-components](https://www.styled-components.com/)
- Hosted with [netlify](https://netlify.com)

## Set-up

### Development

```shell
$ yarn develop
```

The server is available at [http://localhost:8000] with a graphql interfave availible at [http://localhost:8000/___graphql].

### Production build

```shell
$ yarn build
```

This will generate a `./public` directory with the static site contents. This can now be used within a S3 bucket or using a simpel webserver to serve the assets.

### Content

All content is stored within markdown files located in the `content/posts/` or `/content/projects/` folders. These Are used at build time to generate the various pages within the blog and projects index. 

In order to create a new posts/project you create a new markdwn file (and/or directory if there are associated assets) within one of the directories. This file requires the following frontmatter:

```markdown
  ---
  path: "/projects/project-name" 
  date: "2019-04-25"
  title: "Project title"
  hero: "./hero.png"
  ---
```

**Note:** the hero image is optional for a file within the `content/posts/` directory.

### Embedding 

Within the posts and projects markdown files you can embeded various 3rd party content, these include:

#### Oembed

Which allows for things like twitter and codepen

```markdown
<!-- shortcode structure -->
`oembed: <URL>`

<!-- live example -->
`oembed: https://codepen.io/aaronvanston/pen/pEjkNq`
```

## License

Licensed under the MIT License. Feel free to use parts of the code in your own projects with attribution!