import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListListRelationFilter } from "../inputs/ExpertiseListListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExpertiseTagWhereInput", {})
export class ExpertiseTagWhereInput {
  @TypeGraphQL.Field(_type => [ExpertiseTagWhereInput], {
    nullable: true
  })
  AND?: ExpertiseTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereInput], {
    nullable: true
  })
  OR?: ExpertiseTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereInput], {
    nullable: true
  })
  NOT?: ExpertiseTagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  expertise?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListListRelationFilter, {
    nullable: true
  })
  lists?: ExpertiseListListRelationFilter | undefined;
}
