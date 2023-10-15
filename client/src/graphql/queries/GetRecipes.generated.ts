/* eslint-disable */ /**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import * as Types from '../../app/services/types.generated';

import { api } from '~/app/api';
export type GetRecipesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRecipesQuery = { __typename?: 'Query', recipes?: { __typename?: 'RecipesConnection', totalCount: number, edges?: Array<{ __typename?: 'RecipesEdge', cursor: string, node?: { __typename?: 'GetRecipesType', id: string, title: string, image?: string } }> } };


export const GetRecipesDocument = `
    query getRecipes {
  recipes {
    totalCount
    edges {
      cursor
      node {
        id
        title
        image
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRecipes: build.query<GetRecipesQuery, GetRecipesQueryVariables | void>({
      query: (variables) => ({ document: GetRecipesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetRecipesQuery, useLazyGetRecipesQuery } = injectedRtkApi;

