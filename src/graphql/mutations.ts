/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRanking = /* GraphQL */ `mutation CreateRanking(
  $input: CreateRankingInput!
  $condition: ModelRankingConditionInput
) {
  createRanking(input: $input, condition: $condition) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRankingMutationVariables,
  APITypes.CreateRankingMutation
>;
export const updateRanking = /* GraphQL */ `mutation UpdateRanking(
  $input: UpdateRankingInput!
  $condition: ModelRankingConditionInput
) {
  updateRanking(input: $input, condition: $condition) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRankingMutationVariables,
  APITypes.UpdateRankingMutation
>;
export const deleteRanking = /* GraphQL */ `mutation DeleteRanking(
  $input: DeleteRankingInput!
  $condition: ModelRankingConditionInput
) {
  deleteRanking(input: $input, condition: $condition) {
    id
    username
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRankingMutationVariables,
  APITypes.DeleteRankingMutation
>;
