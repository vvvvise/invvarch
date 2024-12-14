import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerNullableRelationFilter } from "../inputs/CareerNullableRelationFilter";
import { ExpertiseListNullableRelationFilter } from "../inputs/ExpertiseListNullableRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("IndividualWhereInput", {})
export class IndividualWhereInput {
  @TypeGraphQL.Field(_type => [IndividualWhereInput], {
    nullable: true
  })
  AND?: IndividualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IndividualWhereInput], {
    nullable: true
  })
  OR?: IndividualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IndividualWhereInput], {
    nullable: true
  })
  NOT?: IndividualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListNullableRelationFilter, {
    nullable: true
  })
  expertiseList?: ExpertiseListNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CareerNullableRelationFilter, {
    nullable: true
  })
  career?: CareerNullableRelationFilter | undefined;
}
