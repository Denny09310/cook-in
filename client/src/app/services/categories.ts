import { api } from '@/app/api';
export const addTagTypes = ['Categories'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getCategories: build.query<GetCategoriesApiResponse, GetCategoriesApiArg>({
        query: () => ({ url: `/api/categories/` }),
        providesTags: ['Categories'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type GetCategoriesApiResponse = /** status 200 Success */ GetCategoriesResponse;
export type GetCategoriesApiArg = void;
export type Category = {
  id?: string;
  name?: string;
};
export type GetCategoriesResponse = {
  categories?: Category[];
};
export const { useGetCategoriesQuery } = injectedRtkApi;
