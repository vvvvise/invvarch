import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListListRelationFilter } from "../inputs/ExpertiseListListRelationFilter";
import { ExpertiseTagWhereInput } from "../inputs/ExpertiseTagWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExpertiseTagWhereUniqueInput", {})
export class ExpertiseTagWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  expertise?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListListRelationFilter, {
    nullable: true
  })
  lists?: ExpertiseListListRelationFilter | undefined;
}
