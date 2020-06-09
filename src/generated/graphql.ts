import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Query = {
   __typename?: 'Query';
  wallpapers: Wallpapers;
};


export type QueryWallpapersArgs = {
  searchTerm: Scalars['String'];
  page: Scalars['Int'];
};

export type Wallpaper = {
   __typename?: 'Wallpaper';
  id: Scalars['ID'];
  path: Scalars['String'];
  resolution: Scalars['String'];
  category: Scalars['String'];
  purity: Scalars['String'];
  thumbs?: Maybe<Thumbs>;
  created_at: Scalars['DateTime'];
};

export type Thumbs = {
   __typename?: 'Thumbs';
  large: Scalars['String'];
  original: Scalars['String'];
  small: Scalars['String'];
};

export type Wallpapers = {
   __typename?: 'Wallpapers';
  count?: Maybe<Scalars['Int']>;
  current_page?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  list: Array<Wallpaper>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Wallpaper: ResolverTypeWrapper<Wallpaper>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Thumbs: ResolverTypeWrapper<Thumbs>,
  Wallpapers: ResolverTypeWrapper<Wallpapers>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  DateTime: Scalars['DateTime'],
  Query: {},
  Int: Scalars['Int'],
  Wallpaper: Wallpaper,
  ID: Scalars['ID'],
  Thumbs: Thumbs,
  Wallpapers: Wallpapers,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  wallpapers?: Resolver<ResolversTypes['Wallpapers'], ParentType, ContextType, RequireFields<QueryWallpapersArgs, 'searchTerm' | 'page'>>,
};

export type WallpaperResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallpaper'] = ResolversParentTypes['Wallpaper']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  resolution?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  purity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thumbs?: Resolver<Maybe<ResolversTypes['Thumbs']>, ParentType, ContextType>,
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ThumbsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thumbs'] = ResolversParentTypes['Thumbs']> = {
  large?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  original?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  small?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type WallpapersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallpapers'] = ResolversParentTypes['Wallpapers']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  current_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  list?: Resolver<Array<ResolversTypes['Wallpaper']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  Wallpaper?: WallpaperResolvers<ContextType>,
  Thumbs?: ThumbsResolvers<ContextType>,
  Wallpapers?: WallpapersResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

