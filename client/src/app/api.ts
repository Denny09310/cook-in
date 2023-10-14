import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

const url = import.meta.env.BASE_URL;

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ url }),
  endpoints: () => ({}),
});
