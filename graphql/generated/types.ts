export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  Upload: any;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: User;
  ForgotPassword: User;
  GoogleLogin: User;
  LoginUser: User;
  Logout: User;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};

export enum ProviderOptions {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE'
}

export type Query = {
  __typename?: 'Query';
  GetMe: User;
  getUsers: Array<User>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  provider?: Maybe<ProviderOptions>;
  providerId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Time'];
  userRole: Role;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};
