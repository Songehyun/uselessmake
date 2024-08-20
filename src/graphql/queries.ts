/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../amplify/backend/api/uselessmake/src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRanking = /* GraphQL */ `query GetRanking($id: ID!) {
  getRanking(id: $id) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRankingQueryVariables,
  APITypes.GetRankingQuery
>;
export const listRankings = /* GraphQL */ `query ListRankings(
  $filter: ModelRankingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRankings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      score
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRankingsQueryVariables,
  APITypes.ListRankingsQuery
>;
