import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerWhereInput } from "../inputs/CareerWhereInput";
import { EducationInfoListRelationFilter } from "../inputs/EducationInfoListRelationFilter";
import { IndividualRelationFilter } from "../inputs/IndividualRelationFilter";
import { ProjectInfoListRelationFilter } from "../inputs/ProjectInfoListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CareerWhereUniqueInput", {})
export class CareerWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  individualId?: number | undefined;

  @TypeGraphQL.Field(_type => [CareerWhereInput], {
    nullable: true
  })
  AND?: CareerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareerWhereInput], {
    nullable: true
  })
  OR?: CareerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareerWhereInput], {
    nullable: true
  })
  NOT?: CareerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EducationInfoListRelationFilter, {
    nullable: true
  })
  educationInfo?: EducationInfoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoListRelationFilter, {
    nullable: true
  })
  projectInfo?: ProjectInfoListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IndividualRelationFilter, {
    nullable: true
  })
  individual?: IndividualRelationFilter | undefined;
}
