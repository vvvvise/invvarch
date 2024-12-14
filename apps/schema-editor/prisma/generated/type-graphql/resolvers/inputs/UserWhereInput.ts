import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerNullableRelationFilter } from "../inputs/CareerNullableRelationFilter";
import { EducationInfoNullableRelationFilter } from "../inputs/EducationInfoNullableRelationFilter";
import { IndividualNullableRelationFilter } from "../inputs/IndividualNullableRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProjectInfoListRelationFilter } from "../inputs/ProjectInfoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserWhereInput", {})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  urls?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CareerNullableRelationFilter, {
    nullable: true
  })
  career?: CareerNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IndividualNullableRelationFilter, {
    nullable: true
  })
  individual?: IndividualNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EducationInfoNullableRelationFilter, {
    nullable: true
  })
  educationInfo?: EducationInfoNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoListRelationFilter, {
    nullable: true
  })
  projectInfo?: ProjectInfoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;
}
