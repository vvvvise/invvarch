import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";

@TypeGraphQL.InputType("ExpertiseListNullableRelationFilter", {})
export class ExpertiseListNullableRelationFilter {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  is?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  isNot?: ExpertiseListWhereInput | undefined;
}
