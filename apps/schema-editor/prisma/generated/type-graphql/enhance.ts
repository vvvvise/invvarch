import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  ExpertiseTag: crudResolvers.ExpertiseTagCrudResolver,
  ExpertiseList: crudResolvers.ExpertiseListCrudResolver,
  EducationInfo: crudResolvers.EducationInfoCrudResolver,
  ProjectInfo: crudResolvers.ProjectInfoCrudResolver,
  Career: crudResolvers.CareerCrudResolver,
  Individual: crudResolvers.IndividualCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createManyAndReturnPost: actionResolvers.CreateManyAndReturnPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    getPost: actionResolvers.FindUniquePostOrThrowResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  ExpertiseTag: {
    aggregateExpertiseTag: actionResolvers.AggregateExpertiseTagResolver,
    createManyExpertiseTag: actionResolvers.CreateManyExpertiseTagResolver,
    createManyAndReturnExpertiseTag: actionResolvers.CreateManyAndReturnExpertiseTagResolver,
    createOneExpertiseTag: actionResolvers.CreateOneExpertiseTagResolver,
    deleteManyExpertiseTag: actionResolvers.DeleteManyExpertiseTagResolver,
    deleteOneExpertiseTag: actionResolvers.DeleteOneExpertiseTagResolver,
    findFirstExpertiseTag: actionResolvers.FindFirstExpertiseTagResolver,
    findFirstExpertiseTagOrThrow: actionResolvers.FindFirstExpertiseTagOrThrowResolver,
    expertiseTags: actionResolvers.FindManyExpertiseTagResolver,
    expertiseTag: actionResolvers.FindUniqueExpertiseTagResolver,
    getExpertiseTag: actionResolvers.FindUniqueExpertiseTagOrThrowResolver,
    groupByExpertiseTag: actionResolvers.GroupByExpertiseTagResolver,
    updateManyExpertiseTag: actionResolvers.UpdateManyExpertiseTagResolver,
    updateOneExpertiseTag: actionResolvers.UpdateOneExpertiseTagResolver,
    upsertOneExpertiseTag: actionResolvers.UpsertOneExpertiseTagResolver
  },
  ExpertiseList: {
    aggregateExpertiseList: actionResolvers.AggregateExpertiseListResolver,
    createManyExpertiseList: actionResolvers.CreateManyExpertiseListResolver,
    createManyAndReturnExpertiseList: actionResolvers.CreateManyAndReturnExpertiseListResolver,
    createOneExpertiseList: actionResolvers.CreateOneExpertiseListResolver,
    deleteManyExpertiseList: actionResolvers.DeleteManyExpertiseListResolver,
    deleteOneExpertiseList: actionResolvers.DeleteOneExpertiseListResolver,
    findFirstExpertiseList: actionResolvers.FindFirstExpertiseListResolver,
    findFirstExpertiseListOrThrow: actionResolvers.FindFirstExpertiseListOrThrowResolver,
    expertiseLists: actionResolvers.FindManyExpertiseListResolver,
    expertiseList: actionResolvers.FindUniqueExpertiseListResolver,
    getExpertiseList: actionResolvers.FindUniqueExpertiseListOrThrowResolver,
    groupByExpertiseList: actionResolvers.GroupByExpertiseListResolver,
    updateManyExpertiseList: actionResolvers.UpdateManyExpertiseListResolver,
    updateOneExpertiseList: actionResolvers.UpdateOneExpertiseListResolver,
    upsertOneExpertiseList: actionResolvers.UpsertOneExpertiseListResolver
  },
  EducationInfo: {
    aggregateEducationInfo: actionResolvers.AggregateEducationInfoResolver,
    createManyEducationInfo: actionResolvers.CreateManyEducationInfoResolver,
    createManyAndReturnEducationInfo: actionResolvers.CreateManyAndReturnEducationInfoResolver,
    createOneEducationInfo: actionResolvers.CreateOneEducationInfoResolver,
    deleteManyEducationInfo: actionResolvers.DeleteManyEducationInfoResolver,
    deleteOneEducationInfo: actionResolvers.DeleteOneEducationInfoResolver,
    findFirstEducationInfo: actionResolvers.FindFirstEducationInfoResolver,
    findFirstEducationInfoOrThrow: actionResolvers.FindFirstEducationInfoOrThrowResolver,
    educationInfos: actionResolvers.FindManyEducationInfoResolver,
    educationInfo: actionResolvers.FindUniqueEducationInfoResolver,
    getEducationInfo: actionResolvers.FindUniqueEducationInfoOrThrowResolver,
    groupByEducationInfo: actionResolvers.GroupByEducationInfoResolver,
    updateManyEducationInfo: actionResolvers.UpdateManyEducationInfoResolver,
    updateOneEducationInfo: actionResolvers.UpdateOneEducationInfoResolver,
    upsertOneEducationInfo: actionResolvers.UpsertOneEducationInfoResolver
  },
  ProjectInfo: {
    aggregateProjectInfo: actionResolvers.AggregateProjectInfoResolver,
    createManyProjectInfo: actionResolvers.CreateManyProjectInfoResolver,
    createManyAndReturnProjectInfo: actionResolvers.CreateManyAndReturnProjectInfoResolver,
    createOneProjectInfo: actionResolvers.CreateOneProjectInfoResolver,
    deleteManyProjectInfo: actionResolvers.DeleteManyProjectInfoResolver,
    deleteOneProjectInfo: actionResolvers.DeleteOneProjectInfoResolver,
    findFirstProjectInfo: actionResolvers.FindFirstProjectInfoResolver,
    findFirstProjectInfoOrThrow: actionResolvers.FindFirstProjectInfoOrThrowResolver,
    projectInfos: actionResolvers.FindManyProjectInfoResolver,
    projectInfo: actionResolvers.FindUniqueProjectInfoResolver,
    getProjectInfo: actionResolvers.FindUniqueProjectInfoOrThrowResolver,
    groupByProjectInfo: actionResolvers.GroupByProjectInfoResolver,
    updateManyProjectInfo: actionResolvers.UpdateManyProjectInfoResolver,
    updateOneProjectInfo: actionResolvers.UpdateOneProjectInfoResolver,
    upsertOneProjectInfo: actionResolvers.UpsertOneProjectInfoResolver
  },
  Career: {
    aggregateCareer: actionResolvers.AggregateCareerResolver,
    createManyCareer: actionResolvers.CreateManyCareerResolver,
    createManyAndReturnCareer: actionResolvers.CreateManyAndReturnCareerResolver,
    createOneCareer: actionResolvers.CreateOneCareerResolver,
    deleteManyCareer: actionResolvers.DeleteManyCareerResolver,
    deleteOneCareer: actionResolvers.DeleteOneCareerResolver,
    findFirstCareer: actionResolvers.FindFirstCareerResolver,
    findFirstCareerOrThrow: actionResolvers.FindFirstCareerOrThrowResolver,
    careers: actionResolvers.FindManyCareerResolver,
    career: actionResolvers.FindUniqueCareerResolver,
    getCareer: actionResolvers.FindUniqueCareerOrThrowResolver,
    groupByCareer: actionResolvers.GroupByCareerResolver,
    updateManyCareer: actionResolvers.UpdateManyCareerResolver,
    updateOneCareer: actionResolvers.UpdateOneCareerResolver,
    upsertOneCareer: actionResolvers.UpsertOneCareerResolver
  },
  Individual: {
    aggregateIndividual: actionResolvers.AggregateIndividualResolver,
    createManyIndividual: actionResolvers.CreateManyIndividualResolver,
    createManyAndReturnIndividual: actionResolvers.CreateManyAndReturnIndividualResolver,
    createOneIndividual: actionResolvers.CreateOneIndividualResolver,
    deleteManyIndividual: actionResolvers.DeleteManyIndividualResolver,
    deleteOneIndividual: actionResolvers.DeleteOneIndividualResolver,
    findFirstIndividual: actionResolvers.FindFirstIndividualResolver,
    findFirstIndividualOrThrow: actionResolvers.FindFirstIndividualOrThrowResolver,
    individuals: actionResolvers.FindManyIndividualResolver,
    individual: actionResolvers.FindUniqueIndividualResolver,
    getIndividual: actionResolvers.FindUniqueIndividualOrThrowResolver,
    groupByIndividual: actionResolvers.GroupByIndividualResolver,
    updateManyIndividual: actionResolvers.UpdateManyIndividualResolver,
    updateOneIndividual: actionResolvers.UpdateOneIndividualResolver,
    upsertOneIndividual: actionResolvers.UpsertOneIndividualResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Post: ["aggregatePost", "createManyPost", "createManyAndReturnPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  ExpertiseTag: ["aggregateExpertiseTag", "createManyExpertiseTag", "createManyAndReturnExpertiseTag", "createOneExpertiseTag", "deleteManyExpertiseTag", "deleteOneExpertiseTag", "findFirstExpertiseTag", "findFirstExpertiseTagOrThrow", "expertiseTags", "expertiseTag", "getExpertiseTag", "groupByExpertiseTag", "updateManyExpertiseTag", "updateOneExpertiseTag", "upsertOneExpertiseTag"],
  ExpertiseList: ["aggregateExpertiseList", "createManyExpertiseList", "createManyAndReturnExpertiseList", "createOneExpertiseList", "deleteManyExpertiseList", "deleteOneExpertiseList", "findFirstExpertiseList", "findFirstExpertiseListOrThrow", "expertiseLists", "expertiseList", "getExpertiseList", "groupByExpertiseList", "updateManyExpertiseList", "updateOneExpertiseList", "upsertOneExpertiseList"],
  EducationInfo: ["aggregateEducationInfo", "createManyEducationInfo", "createManyAndReturnEducationInfo", "createOneEducationInfo", "deleteManyEducationInfo", "deleteOneEducationInfo", "findFirstEducationInfo", "findFirstEducationInfoOrThrow", "educationInfos", "educationInfo", "getEducationInfo", "groupByEducationInfo", "updateManyEducationInfo", "updateOneEducationInfo", "upsertOneEducationInfo"],
  ProjectInfo: ["aggregateProjectInfo", "createManyProjectInfo", "createManyAndReturnProjectInfo", "createOneProjectInfo", "deleteManyProjectInfo", "deleteOneProjectInfo", "findFirstProjectInfo", "findFirstProjectInfoOrThrow", "projectInfos", "projectInfo", "getProjectInfo", "groupByProjectInfo", "updateManyProjectInfo", "updateOneProjectInfo", "upsertOneProjectInfo"],
  Career: ["aggregateCareer", "createManyCareer", "createManyAndReturnCareer", "createOneCareer", "deleteManyCareer", "deleteOneCareer", "findFirstCareer", "findFirstCareerOrThrow", "careers", "career", "getCareer", "groupByCareer", "updateManyCareer", "updateOneCareer", "upsertOneCareer"],
  Individual: ["aggregateIndividual", "createManyIndividual", "createManyAndReturnIndividual", "createOneIndividual", "deleteManyIndividual", "deleteOneIndividual", "findFirstIndividual", "findFirstIndividualOrThrow", "individuals", "individual", "getIndividual", "groupByIndividual", "updateManyIndividual", "updateOneIndividual", "upsertOneIndividual"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateManyAndReturnUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data"],
  CreateManyAndReturnPostArgs: ["data"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  FindUniquePostOrThrowArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateExpertiseTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExpertiseTagArgs: ["data"],
  CreateManyAndReturnExpertiseTagArgs: ["data"],
  CreateOneExpertiseTagArgs: ["data"],
  DeleteManyExpertiseTagArgs: ["where"],
  DeleteOneExpertiseTagArgs: ["where"],
  FindFirstExpertiseTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExpertiseTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExpertiseTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExpertiseTagArgs: ["where"],
  FindUniqueExpertiseTagOrThrowArgs: ["where"],
  GroupByExpertiseTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExpertiseTagArgs: ["data", "where"],
  UpdateOneExpertiseTagArgs: ["data", "where"],
  UpsertOneExpertiseTagArgs: ["where", "create", "update"],
  AggregateExpertiseListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExpertiseListArgs: ["data"],
  CreateManyAndReturnExpertiseListArgs: ["data"],
  CreateOneExpertiseListArgs: ["data"],
  DeleteManyExpertiseListArgs: ["where"],
  DeleteOneExpertiseListArgs: ["where"],
  FindFirstExpertiseListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExpertiseListOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExpertiseListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExpertiseListArgs: ["where"],
  FindUniqueExpertiseListOrThrowArgs: ["where"],
  GroupByExpertiseListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExpertiseListArgs: ["data", "where"],
  UpdateOneExpertiseListArgs: ["data", "where"],
  UpsertOneExpertiseListArgs: ["where", "create", "update"],
  AggregateEducationInfoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEducationInfoArgs: ["data"],
  CreateManyAndReturnEducationInfoArgs: ["data"],
  CreateOneEducationInfoArgs: ["data"],
  DeleteManyEducationInfoArgs: ["where"],
  DeleteOneEducationInfoArgs: ["where"],
  FindFirstEducationInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEducationInfoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEducationInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEducationInfoArgs: ["where"],
  FindUniqueEducationInfoOrThrowArgs: ["where"],
  GroupByEducationInfoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEducationInfoArgs: ["data", "where"],
  UpdateOneEducationInfoArgs: ["data", "where"],
  UpsertOneEducationInfoArgs: ["where", "create", "update"],
  AggregateProjectInfoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectInfoArgs: ["data"],
  CreateManyAndReturnProjectInfoArgs: ["data"],
  CreateOneProjectInfoArgs: ["data"],
  DeleteManyProjectInfoArgs: ["where"],
  DeleteOneProjectInfoArgs: ["where"],
  FindFirstProjectInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectInfoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectInfoArgs: ["where"],
  FindUniqueProjectInfoOrThrowArgs: ["where"],
  GroupByProjectInfoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectInfoArgs: ["data", "where"],
  UpdateOneProjectInfoArgs: ["data", "where"],
  UpsertOneProjectInfoArgs: ["where", "create", "update"],
  AggregateCareerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCareerArgs: ["data"],
  CreateManyAndReturnCareerArgs: ["data"],
  CreateOneCareerArgs: ["data"],
  DeleteManyCareerArgs: ["where"],
  DeleteOneCareerArgs: ["where"],
  FindFirstCareerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCareerOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCareerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCareerArgs: ["where"],
  FindUniqueCareerOrThrowArgs: ["where"],
  GroupByCareerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCareerArgs: ["data", "where"],
  UpdateOneCareerArgs: ["data", "where"],
  UpsertOneCareerArgs: ["where", "create", "update"],
  AggregateIndividualArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIndividualArgs: ["data"],
  CreateManyAndReturnIndividualArgs: ["data"],
  CreateOneIndividualArgs: ["data"],
  DeleteManyIndividualArgs: ["where"],
  DeleteOneIndividualArgs: ["where"],
  FindFirstIndividualArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIndividualOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIndividualArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIndividualArgs: ["where"],
  FindUniqueIndividualOrThrowArgs: ["where"],
  GroupByIndividualArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIndividualArgs: ["data", "where"],
  UpdateOneIndividualArgs: ["data", "where"],
  UpsertOneIndividualArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  ExpertiseTag: relationResolvers.ExpertiseTagRelationsResolver,
  ExpertiseList: relationResolvers.ExpertiseListRelationsResolver,
  EducationInfo: relationResolvers.EducationInfoRelationsResolver,
  ProjectInfo: relationResolvers.ProjectInfoRelationsResolver,
  Career: relationResolvers.CareerRelationsResolver,
  Individual: relationResolvers.IndividualRelationsResolver
};
const relationResolversInfo = {
  User: ["career", "individual", "educationInfo", "projectInfo", "posts"],
  Post: ["author"],
  ExpertiseTag: ["lists"],
  ExpertiseList: ["tags", "individual"],
  EducationInfo: ["user", "career"],
  ProjectInfo: ["user", "career"],
  Career: ["user", "educationInfo", "projectInfo", "individual"],
  Individual: ["user", "expertiseList", "career"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name", "profile", "urls"],
  Post: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  ExpertiseTag: ["id", "expertise"],
  ExpertiseList: ["id", "individualId"],
  EducationInfo: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  ProjectInfo: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  Career: ["id", "userId", "individualId"],
  Individual: ["id", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "profile", "urls", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExpertiseTag: ["_count", "_avg", "_sum", "_min", "_max"],
  ExpertiseTagGroupBy: ["id", "expertise", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateExpertiseList: ["_count", "_avg", "_sum", "_min", "_max"],
  ExpertiseListGroupBy: ["id", "individualId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEducationInfo: ["_count", "_avg", "_sum", "_min", "_max"],
  EducationInfoGroupBy: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProjectInfo: ["_count", "_avg", "_sum", "_min", "_max"],
  ProjectInfoGroupBy: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCareer: ["_count", "_avg", "_sum", "_min", "_max"],
  CareerGroupBy: ["id", "userId", "individualId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIndividual: ["_count", "_avg", "_sum", "_min", "_max"],
  IndividualGroupBy: ["id", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["projectInfo", "posts"],
  UserCountAggregate: ["id", "email", "name", "profile", "urls", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name", "profile", "urls"],
  UserMaxAggregate: ["id", "email", "name", "profile", "urls"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_all"],
  PostAvgAggregate: ["id", "authorId"],
  PostSumAggregate: ["id", "authorId"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  ExpertiseTagCount: ["lists"],
  ExpertiseTagCountAggregate: ["id", "expertise", "_all"],
  ExpertiseTagAvgAggregate: ["id"],
  ExpertiseTagSumAggregate: ["id"],
  ExpertiseTagMinAggregate: ["id", "expertise"],
  ExpertiseTagMaxAggregate: ["id", "expertise"],
  ExpertiseListCount: ["tags"],
  ExpertiseListCountAggregate: ["id", "individualId", "_all"],
  ExpertiseListAvgAggregate: ["id", "individualId"],
  ExpertiseListSumAggregate: ["id", "individualId"],
  ExpertiseListMinAggregate: ["id", "individualId"],
  ExpertiseListMaxAggregate: ["id", "individualId"],
  EducationInfoCountAggregate: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "_all"],
  EducationInfoAvgAggregate: ["id", "userId", "careerId"],
  EducationInfoSumAggregate: ["id", "userId", "careerId"],
  EducationInfoMinAggregate: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  EducationInfoMaxAggregate: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  ProjectInfoCountAggregate: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "_all"],
  ProjectInfoAvgAggregate: ["id", "userId", "careerId"],
  ProjectInfoSumAggregate: ["id", "userId", "careerId"],
  ProjectInfoMinAggregate: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  ProjectInfoMaxAggregate: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  CareerCount: ["educationInfo", "projectInfo"],
  CareerCountAggregate: ["id", "userId", "individualId", "_all"],
  CareerAvgAggregate: ["id", "userId", "individualId"],
  CareerSumAggregate: ["id", "userId", "individualId"],
  CareerMinAggregate: ["id", "userId", "individualId"],
  CareerMaxAggregate: ["id", "userId", "individualId"],
  IndividualCountAggregate: ["id", "userId", "_all"],
  IndividualAvgAggregate: ["id", "userId"],
  IndividualSumAggregate: ["id", "userId"],
  IndividualMinAggregate: ["id", "userId"],
  IndividualMaxAggregate: ["id", "userId"],
  CreateManyAndReturnUser: ["id", "email", "name", "profile", "urls"],
  CreateManyAndReturnPost: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "author"],
  CreateManyAndReturnExpertiseTag: ["id", "expertise"],
  CreateManyAndReturnExpertiseList: ["id", "individualId", "individual"],
  CreateManyAndReturnEducationInfo: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "user", "career"],
  CreateManyAndReturnProjectInfo: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "user", "career"],
  CreateManyAndReturnCareer: ["id", "userId", "individualId", "user", "individual"],
  CreateManyAndReturnIndividual: ["id", "userId", "user"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo", "posts"],
  UserOrderByWithRelationInput: ["id", "email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo", "posts"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo", "posts"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "profile", "urls", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "profile", "urls"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "author"],
  PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "author"],
  PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "published", "title", "content", "authorId", "author"],
  PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  ExpertiseTagWhereInput: ["AND", "OR", "NOT", "id", "expertise", "lists"],
  ExpertiseTagOrderByWithRelationInput: ["id", "expertise", "lists"],
  ExpertiseTagWhereUniqueInput: ["id", "AND", "OR", "NOT", "expertise", "lists"],
  ExpertiseTagOrderByWithAggregationInput: ["id", "expertise", "_count", "_avg", "_max", "_min", "_sum"],
  ExpertiseTagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "expertise"],
  ExpertiseListWhereInput: ["AND", "OR", "NOT", "id", "individualId", "tags", "individual"],
  ExpertiseListOrderByWithRelationInput: ["id", "individualId", "tags", "individual"],
  ExpertiseListWhereUniqueInput: ["id", "individualId", "AND", "OR", "NOT", "tags", "individual"],
  ExpertiseListOrderByWithAggregationInput: ["id", "individualId", "_count", "_avg", "_max", "_min", "_sum"],
  ExpertiseListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "individualId"],
  EducationInfoWhereInput: ["AND", "OR", "NOT", "id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "user", "career"],
  EducationInfoOrderByWithRelationInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "user", "career"],
  EducationInfoWhereUniqueInput: ["id", "userId", "AND", "OR", "NOT", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "user", "career"],
  EducationInfoOrderByWithAggregationInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId", "_count", "_avg", "_max", "_min", "_sum"],
  EducationInfoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  ProjectInfoWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "user", "career"],
  ProjectInfoOrderByWithRelationInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "user", "career"],
  ProjectInfoWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "user", "career"],
  ProjectInfoOrderByWithAggregationInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId", "_count", "_avg", "_max", "_min", "_sum"],
  ProjectInfoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  CareerWhereInput: ["AND", "OR", "NOT", "id", "userId", "individualId", "user", "educationInfo", "projectInfo", "individual"],
  CareerOrderByWithRelationInput: ["id", "userId", "individualId", "user", "educationInfo", "projectInfo", "individual"],
  CareerWhereUniqueInput: ["id", "userId", "individualId", "AND", "OR", "NOT", "user", "educationInfo", "projectInfo", "individual"],
  CareerOrderByWithAggregationInput: ["id", "userId", "individualId", "_count", "_avg", "_max", "_min", "_sum"],
  CareerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "individualId"],
  IndividualWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "expertiseList", "career"],
  IndividualOrderByWithRelationInput: ["id", "userId", "user", "expertiseList", "career"],
  IndividualWhereUniqueInput: ["id", "userId", "AND", "OR", "NOT", "user", "expertiseList", "career"],
  IndividualOrderByWithAggregationInput: ["id", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  IndividualScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId"],
  UserCreateInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo", "posts"],
  UserUpdateInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo", "posts"],
  UserCreateManyInput: ["id", "email", "name", "profile", "urls"],
  UserUpdateManyMutationInput: ["email", "name", "profile", "urls"],
  PostCreateInput: ["createdAt", "updatedAt", "published", "title", "content", "author"],
  PostUpdateInput: ["createdAt", "updatedAt", "published", "title", "content", "author"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostUpdateManyMutationInput: ["createdAt", "updatedAt", "published", "title", "content"],
  ExpertiseTagCreateInput: ["expertise", "lists"],
  ExpertiseTagUpdateInput: ["expertise", "lists"],
  ExpertiseTagCreateManyInput: ["id", "expertise"],
  ExpertiseTagUpdateManyMutationInput: ["expertise"],
  ExpertiseListCreateInput: ["tags", "individual"],
  ExpertiseListUpdateInput: ["tags", "individual"],
  ExpertiseListCreateManyInput: ["id", "individualId"],
  ExpertiseListUpdateManyMutationInput: [],
  EducationInfoCreateInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "user", "career"],
  EducationInfoUpdateInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "user", "career"],
  EducationInfoCreateManyInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  EducationInfoUpdateManyMutationInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary"],
  ProjectInfoCreateInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "user", "career"],
  ProjectInfoUpdateInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "user", "career"],
  ProjectInfoCreateManyInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  ProjectInfoUpdateManyMutationInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary"],
  CareerCreateInput: ["user", "educationInfo", "projectInfo", "individual"],
  CareerUpdateInput: ["user", "educationInfo", "projectInfo", "individual"],
  CareerCreateManyInput: ["id", "userId", "individualId"],
  CareerUpdateManyMutationInput: [],
  IndividualCreateInput: ["user", "expertiseList", "career"],
  IndividualUpdateInput: ["user", "expertiseList", "career"],
  IndividualCreateManyInput: ["id", "userId"],
  IndividualUpdateManyMutationInput: [],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  CareerNullableRelationFilter: ["is", "isNot"],
  IndividualNullableRelationFilter: ["is", "isNot"],
  EducationInfoNullableRelationFilter: ["is", "isNot"],
  ProjectInfoListRelationFilter: ["every", "some", "none"],
  PostListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  ProjectInfoOrderByRelationAggregateInput: ["_count"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "profile", "urls"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "profile", "urls"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "profile", "urls"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserNullableRelationFilter: ["is", "isNot"],
  PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostAvgOrderByAggregateInput: ["id", "authorId"],
  PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  PostSumOrderByAggregateInput: ["id", "authorId"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ExpertiseListListRelationFilter: ["every", "some", "none"],
  ExpertiseListOrderByRelationAggregateInput: ["_count"],
  ExpertiseTagCountOrderByAggregateInput: ["id", "expertise"],
  ExpertiseTagAvgOrderByAggregateInput: ["id"],
  ExpertiseTagMaxOrderByAggregateInput: ["id", "expertise"],
  ExpertiseTagMinOrderByAggregateInput: ["id", "expertise"],
  ExpertiseTagSumOrderByAggregateInput: ["id"],
  ExpertiseTagListRelationFilter: ["every", "some", "none"],
  IndividualRelationFilter: ["is", "isNot"],
  ExpertiseTagOrderByRelationAggregateInput: ["_count"],
  ExpertiseListCountOrderByAggregateInput: ["id", "individualId"],
  ExpertiseListAvgOrderByAggregateInput: ["id", "individualId"],
  ExpertiseListMaxOrderByAggregateInput: ["id", "individualId"],
  ExpertiseListMinOrderByAggregateInput: ["id", "individualId"],
  ExpertiseListSumOrderByAggregateInput: ["id", "individualId"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  CareerRelationFilter: ["is", "isNot"],
  EducationInfoCountOrderByAggregateInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  EducationInfoAvgOrderByAggregateInput: ["id", "userId", "careerId"],
  EducationInfoMaxOrderByAggregateInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  EducationInfoMinOrderByAggregateInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  EducationInfoSumOrderByAggregateInput: ["id", "userId", "careerId"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ProjectInfoCountOrderByAggregateInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  ProjectInfoAvgOrderByAggregateInput: ["id", "userId", "careerId"],
  ProjectInfoMaxOrderByAggregateInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  ProjectInfoMinOrderByAggregateInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  ProjectInfoSumOrderByAggregateInput: ["id", "userId", "careerId"],
  EducationInfoListRelationFilter: ["every", "some", "none"],
  EducationInfoOrderByRelationAggregateInput: ["_count"],
  CareerCountOrderByAggregateInput: ["id", "userId", "individualId"],
  CareerAvgOrderByAggregateInput: ["id", "userId", "individualId"],
  CareerMaxOrderByAggregateInput: ["id", "userId", "individualId"],
  CareerMinOrderByAggregateInput: ["id", "userId", "individualId"],
  CareerSumOrderByAggregateInput: ["id", "userId", "individualId"],
  ExpertiseListNullableRelationFilter: ["is", "isNot"],
  IndividualCountOrderByAggregateInput: ["id", "userId"],
  IndividualAvgOrderByAggregateInput: ["id", "userId"],
  IndividualMaxOrderByAggregateInput: ["id", "userId"],
  IndividualMinOrderByAggregateInput: ["id", "userId"],
  IndividualSumOrderByAggregateInput: ["id", "userId"],
  CareerCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  IndividualCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  EducationInfoCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  ProjectInfoCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CareerUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IndividualUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EducationInfoUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectInfoUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ExpertiseListCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  ExpertiseListUpdateManyWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExpertiseTagCreateNestedManyWithoutListsInput: ["create", "connectOrCreate", "connect"],
  IndividualCreateNestedOneWithoutExpertiseListInput: ["create", "connectOrCreate", "connect"],
  ExpertiseTagUpdateManyWithoutListsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IndividualUpdateOneRequiredWithoutExpertiseListNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutEducationInfoInput: ["create", "connectOrCreate", "connect"],
  CareerCreateNestedOneWithoutEducationInfoInput: ["create", "connectOrCreate", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutEducationInfoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CareerUpdateOneRequiredWithoutEducationInfoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutProjectInfoInput: ["create", "connectOrCreate", "connect"],
  CareerCreateNestedOneWithoutProjectInfoInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProjectInfoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CareerUpdateOneRequiredWithoutProjectInfoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCareerInput: ["create", "connectOrCreate", "connect"],
  EducationInfoCreateNestedManyWithoutCareerInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectInfoCreateNestedManyWithoutCareerInput: ["create", "connectOrCreate", "createMany", "connect"],
  IndividualCreateNestedOneWithoutCareerInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCareerNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EducationInfoUpdateManyWithoutCareerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProjectInfoUpdateManyWithoutCareerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IndividualUpdateOneRequiredWithoutCareerNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutIndividualInput: ["create", "connectOrCreate", "connect"],
  ExpertiseListCreateNestedOneWithoutIndividualInput: ["create", "connectOrCreate", "connect"],
  CareerCreateNestedOneWithoutIndividualInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutIndividualNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExpertiseListUpdateOneWithoutIndividualNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CareerUpdateOneWithoutIndividualNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  CareerCreateWithoutUserInput: ["educationInfo", "projectInfo", "individual"],
  CareerCreateOrConnectWithoutUserInput: ["where", "create"],
  IndividualCreateWithoutUserInput: ["expertiseList", "career"],
  IndividualCreateOrConnectWithoutUserInput: ["where", "create"],
  EducationInfoCreateWithoutUserInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "career"],
  EducationInfoCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectInfoCreateWithoutUserInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "career"],
  ProjectInfoCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectInfoCreateManyUserInputEnvelope: ["data"],
  PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "published", "title", "content"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data"],
  CareerUpsertWithoutUserInput: ["update", "create", "where"],
  CareerUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  CareerUpdateWithoutUserInput: ["educationInfo", "projectInfo", "individual"],
  IndividualUpsertWithoutUserInput: ["update", "create", "where"],
  IndividualUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  IndividualUpdateWithoutUserInput: ["expertiseList", "career"],
  EducationInfoUpsertWithoutUserInput: ["update", "create", "where"],
  EducationInfoUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  EducationInfoUpdateWithoutUserInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "career"],
  ProjectInfoUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProjectInfoUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProjectInfoUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ProjectInfoScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "published", "title", "content", "authorId"],
  UserCreateWithoutPostsInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
  UserUpdateWithoutPostsInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "projectInfo"],
  ExpertiseListCreateWithoutTagsInput: ["individual"],
  ExpertiseListCreateOrConnectWithoutTagsInput: ["where", "create"],
  ExpertiseListUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
  ExpertiseListUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
  ExpertiseListUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
  ExpertiseListScalarWhereInput: ["AND", "OR", "NOT", "id", "individualId"],
  ExpertiseTagCreateWithoutListsInput: ["expertise"],
  ExpertiseTagCreateOrConnectWithoutListsInput: ["where", "create"],
  IndividualCreateWithoutExpertiseListInput: ["user", "career"],
  IndividualCreateOrConnectWithoutExpertiseListInput: ["where", "create"],
  ExpertiseTagUpsertWithWhereUniqueWithoutListsInput: ["where", "update", "create"],
  ExpertiseTagUpdateWithWhereUniqueWithoutListsInput: ["where", "data"],
  ExpertiseTagUpdateManyWithWhereWithoutListsInput: ["where", "data"],
  ExpertiseTagScalarWhereInput: ["AND", "OR", "NOT", "id", "expertise"],
  IndividualUpsertWithoutExpertiseListInput: ["update", "create", "where"],
  IndividualUpdateToOneWithWhereWithoutExpertiseListInput: ["where", "data"],
  IndividualUpdateWithoutExpertiseListInput: ["user", "career"],
  UserCreateWithoutEducationInfoInput: ["email", "name", "profile", "urls", "career", "individual", "projectInfo", "posts"],
  UserCreateOrConnectWithoutEducationInfoInput: ["where", "create"],
  CareerCreateWithoutEducationInfoInput: ["user", "projectInfo", "individual"],
  CareerCreateOrConnectWithoutEducationInfoInput: ["where", "create"],
  UserUpsertWithoutEducationInfoInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutEducationInfoInput: ["where", "data"],
  UserUpdateWithoutEducationInfoInput: ["email", "name", "profile", "urls", "career", "individual", "projectInfo", "posts"],
  CareerUpsertWithoutEducationInfoInput: ["update", "create", "where"],
  CareerUpdateToOneWithWhereWithoutEducationInfoInput: ["where", "data"],
  CareerUpdateWithoutEducationInfoInput: ["user", "projectInfo", "individual"],
  UserCreateWithoutProjectInfoInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "posts"],
  UserCreateOrConnectWithoutProjectInfoInput: ["where", "create"],
  CareerCreateWithoutProjectInfoInput: ["user", "educationInfo", "individual"],
  CareerCreateOrConnectWithoutProjectInfoInput: ["where", "create"],
  UserUpsertWithoutProjectInfoInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutProjectInfoInput: ["where", "data"],
  UserUpdateWithoutProjectInfoInput: ["email", "name", "profile", "urls", "career", "individual", "educationInfo", "posts"],
  CareerUpsertWithoutProjectInfoInput: ["update", "create", "where"],
  CareerUpdateToOneWithWhereWithoutProjectInfoInput: ["where", "data"],
  CareerUpdateWithoutProjectInfoInput: ["user", "educationInfo", "individual"],
  UserCreateWithoutCareerInput: ["email", "name", "profile", "urls", "individual", "educationInfo", "projectInfo", "posts"],
  UserCreateOrConnectWithoutCareerInput: ["where", "create"],
  EducationInfoCreateWithoutCareerInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "user"],
  EducationInfoCreateOrConnectWithoutCareerInput: ["where", "create"],
  EducationInfoCreateManyCareerInputEnvelope: ["data"],
  ProjectInfoCreateWithoutCareerInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "user"],
  ProjectInfoCreateOrConnectWithoutCareerInput: ["where", "create"],
  ProjectInfoCreateManyCareerInputEnvelope: ["data"],
  IndividualCreateWithoutCareerInput: ["user", "expertiseList"],
  IndividualCreateOrConnectWithoutCareerInput: ["where", "create"],
  UserUpsertWithoutCareerInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCareerInput: ["where", "data"],
  UserUpdateWithoutCareerInput: ["email", "name", "profile", "urls", "individual", "educationInfo", "projectInfo", "posts"],
  EducationInfoUpsertWithWhereUniqueWithoutCareerInput: ["where", "update", "create"],
  EducationInfoUpdateWithWhereUniqueWithoutCareerInput: ["where", "data"],
  EducationInfoUpdateManyWithWhereWithoutCareerInput: ["where", "data"],
  EducationInfoScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary", "careerId"],
  ProjectInfoUpsertWithWhereUniqueWithoutCareerInput: ["where", "update", "create"],
  ProjectInfoUpdateWithWhereUniqueWithoutCareerInput: ["where", "data"],
  ProjectInfoUpdateManyWithWhereWithoutCareerInput: ["where", "data"],
  IndividualUpsertWithoutCareerInput: ["update", "create", "where"],
  IndividualUpdateToOneWithWhereWithoutCareerInput: ["where", "data"],
  IndividualUpdateWithoutCareerInput: ["user", "expertiseList"],
  UserCreateWithoutIndividualInput: ["email", "name", "profile", "urls", "career", "educationInfo", "projectInfo", "posts"],
  UserCreateOrConnectWithoutIndividualInput: ["where", "create"],
  ExpertiseListCreateWithoutIndividualInput: ["tags"],
  ExpertiseListCreateOrConnectWithoutIndividualInput: ["where", "create"],
  CareerCreateWithoutIndividualInput: ["user", "educationInfo", "projectInfo"],
  CareerCreateOrConnectWithoutIndividualInput: ["where", "create"],
  UserUpsertWithoutIndividualInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutIndividualInput: ["where", "data"],
  UserUpdateWithoutIndividualInput: ["email", "name", "profile", "urls", "career", "educationInfo", "projectInfo", "posts"],
  ExpertiseListUpsertWithoutIndividualInput: ["update", "create", "where"],
  ExpertiseListUpdateToOneWithWhereWithoutIndividualInput: ["where", "data"],
  ExpertiseListUpdateWithoutIndividualInput: ["tags"],
  CareerUpsertWithoutIndividualInput: ["update", "create", "where"],
  CareerUpdateToOneWithWhereWithoutIndividualInput: ["where", "data"],
  CareerUpdateWithoutIndividualInput: ["user", "educationInfo", "projectInfo"],
  ProjectInfoCreateManyUserInput: ["id", "title", "url", "position", "startDate", "endDate", "productName", "summary", "careerId"],
  PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "published", "title", "content"],
  ProjectInfoUpdateWithoutUserInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "career"],
  PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "published", "title", "content"],
  ExpertiseListUpdateWithoutTagsInput: ["individual"],
  ExpertiseTagUpdateWithoutListsInput: ["expertise"],
  EducationInfoCreateManyCareerInput: ["id", "userId", "schoolName", "undergraduate", "startDate", "endDate", "summary"],
  ProjectInfoCreateManyCareerInput: ["id", "userId", "title", "url", "position", "startDate", "endDate", "productName", "summary"],
  EducationInfoUpdateWithoutCareerInput: ["schoolName", "undergraduate", "startDate", "endDate", "summary", "user"],
  ProjectInfoUpdateWithoutCareerInput: ["title", "url", "position", "startDate", "endDate", "productName", "summary", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

