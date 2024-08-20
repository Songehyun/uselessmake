/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRankingInput = {
  id?: string | null,
  username: string,
  score: number,
};

export type ModelRankingConditionInput = {
  username?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelRankingConditionInput | null > | null,
  or?: Array< ModelRankingConditionInput | null > | null,
  not?: ModelRankingConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ranking = {
  __typename: "Ranking",
  id: string,
  username: string,
  score: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRankingInput = {
  id: string,
  username?: string | null,
  score?: number | null,
};

export type DeleteRankingInput = {
  id: string,
};

export type ModelRankingFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRankingFilterInput | null > | null,
  or?: Array< ModelRankingFilterInput | null > | null,
  not?: ModelRankingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRankingConnection = {
  __typename: "ModelRankingConnection",
  items:  Array<Ranking | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionRankingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRankingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRankingFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateRankingMutationVariables = {
  input: CreateRankingInput,
  condition?: ModelRankingConditionInput | null,
};

export type CreateRankingMutation = {
  createRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRankingMutationVariables = {
  input: UpdateRankingInput,
  condition?: ModelRankingConditionInput | null,
};

export type UpdateRankingMutation = {
  updateRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRankingMutationVariables = {
  input: DeleteRankingInput,
  condition?: ModelRankingConditionInput | null,
};

export type DeleteRankingMutation = {
  deleteRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRankingQueryVariables = {
  id: string,
};

export type GetRankingQuery = {
  getRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRankingsQueryVariables = {
  filter?: ModelRankingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRankingsQuery = {
  listRankings?:  {
    __typename: "ModelRankingConnection",
    items:  Array< {
      __typename: "Ranking",
      id: string,
      username: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRankingSubscriptionVariables = {
  filter?: ModelSubscriptionRankingFilterInput | null,
};

export type OnCreateRankingSubscription = {
  onCreateRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRankingSubscriptionVariables = {
  filter?: ModelSubscriptionRankingFilterInput | null,
};

export type OnUpdateRankingSubscription = {
  onUpdateRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRankingSubscriptionVariables = {
  filter?: ModelSubscriptionRankingFilterInput | null,
};

export type OnDeleteRankingSubscription = {
  onDeleteRanking?:  {
    __typename: "Ranking",
    id: string,
    username: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
