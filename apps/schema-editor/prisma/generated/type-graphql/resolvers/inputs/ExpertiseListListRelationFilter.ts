import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";

@TypeGraphQL.InputType("ExpertiseListListRelationFilter", {})
export class ExpertiseListListRelationFilter {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  every?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  some?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  none?: ExpertiseListWhereInput | undefined;
}
