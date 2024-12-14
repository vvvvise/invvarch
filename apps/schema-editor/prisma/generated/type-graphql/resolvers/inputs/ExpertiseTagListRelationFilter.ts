import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagWhereInput } from "../inputs/ExpertiseTagWhereInput";

@TypeGraphQL.InputType("ExpertiseTagListRelationFilter", {})
export class ExpertiseTagListRelationFilter {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  every?: ExpertiseTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  some?: ExpertiseTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  none?: ExpertiseTagWhereInput | undefined;
}
