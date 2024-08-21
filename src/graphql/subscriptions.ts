/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRanking =
  /* GraphQL */ `subscription OnCreateRanking($filter: ModelSubscriptionRankingFilterInput) {
  onCreateRanking(filter: $filter) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateRankingSubscriptionVariables,
    APITypes.OnCreateRankingSubscription
  >;
export const onUpdateRanking =
  /* GraphQL */ `subscription OnUpdateRanking($filter: ModelSubscriptionRankingFilterInput) {
  onUpdateRanking(filter: $filter) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateRankingSubscriptionVariables,
    APITypes.OnUpdateRankingSubscription
  >;
export const onDeleteRanking =
  /* GraphQL */ `subscription OnDeleteRanking($filter: ModelSubscriptionRankingFilterInput) {
  onDeleteRanking(filter: $filter) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteRankingSubscriptionVariables,
    APITypes.OnDeleteRankingSubscription
  >;
