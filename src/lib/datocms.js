import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.datocms.com/";
const token = import.meta.env.DATOCMS_TOKEN;

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export async function getFeatures() {
  const query = `
    {
      allFeatures {
        title
        body
        icon
      }
    }
  `;
  const data = await client.request(query);
  return data;
}

export async function getPortfolio() {
  const query = `
    {
      allPortfolios {
        title
        link
        image {
          url
        }
      }
    }
  `;
  const data = await client.request(query);
  return data;
}

export async function getSocialNetworks() {
  const query = `
    {
      allSocialNetworks {
        icon
        url
      }

      _allSocialNetworksMeta {
        count
      }
    }
  `;
  const data = await client.request(query);
  return data;
}

export async function getHomePosts() {
  const query = `
    query MyQuery {
      allBlogs(orderBy: _createdAt_ASC, first: "3") {
        title
        content
        slug
        thumbnail {
          responsiveImage(imgixParams: {auto: format, w: 500, h: 200, fit: fill}) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            alt
            title
          }
        }
      }
      _allBlogsMeta(filter: {_status: {eq: published}}) {
        count
      }
    }
  `;
  const data = await client.request(query);
  return data;
}

export async function getArchivePosts() {
  const query = `
    query MyQuery {
      allBlogs(orderBy: _createdAt_ASC) {
        title
        content
        slug
        thumbnail {
          responsiveImage(imgixParams: {auto: format, w: 500, h: 200, fit: fill}) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            alt
            title
          }
        }
      }
      _allBlogsMeta(filter: {_status: {eq: published}}) {
        count
      }
    }
  `;
  const data = await client.request(query);
  return data;
}

export async function getPosts() {
  const query = `
    query MyQuery {
      allBlogs(orderBy: _createdAt_ASC) {
        title
        content
        slug
        thumbnail {
          responsiveImage(imgixParams: {auto: format, w: 1200, h: 600, fit: crop}) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            alt
            title
          }
        }
      }
      _allBlogsMeta(filter: {_status: {eq: published}}) {
        count
      }
    }
  `;
  const data = await client.request(query);
  return data;
}
