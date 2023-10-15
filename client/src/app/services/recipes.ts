import { api } from '~/app/api';
export const addTagTypes = ['Recipes'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getRecipes: build.query<GetRecipesApiResponse, GetRecipesApiArg>({
        query: (queryArg) => ({ url: `/api/recipes/`, params: { Page: queryArg.page, PageSize: queryArg.pageSize } }),
        providesTags: ['Recipes'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type GetRecipesApiResponse = /** status 200 Success */ GetRecipesResponse;
export type GetRecipesApiArg = {
  page: number;
  pageSize: number;
};
export type GetRecipesResponseRecipe = {
  id?: string;
  title?: string;
  image?: string;
};
export type GetRecipesResponse = {
  recipes?: GetRecipesResponseRecipe[];
};
export const { useGetRecipesQuery, useLazyGetRecipesQuery } = injectedRtkApi;
