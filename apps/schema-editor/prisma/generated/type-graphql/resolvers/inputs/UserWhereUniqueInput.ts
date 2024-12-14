import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerNullableRelationFilter } from "../inputs/CareerNullableRelationFilter";
import { EducationInfoNullableRelationFilter } from "../inputs/EducationInfoNullableRelationFilter";
import { IndividualNullableRelationFilter } from "../inputs/IndividualNullableRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProjectInfoListRelationFilter } from "../inputs/ProjectInfoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

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
