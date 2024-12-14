import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualRelationFilter", {})
export class IndividualRelationFilter {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  is?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  isNot?: IndividualWhereInput | undefined;
}
