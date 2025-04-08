import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
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
