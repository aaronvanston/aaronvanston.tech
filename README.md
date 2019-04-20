# [aaronvanston.tech](https://aaronvanston.tech/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/12643560-2185-4024-a5c2-7559686f8605/deploy-status)](https://app.netlify.com/sites/festive-goldberg-4553c0/deploys)


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

## License

Licensed under the MIT License. Feel free to use parts of the code in your own projects with attribution!