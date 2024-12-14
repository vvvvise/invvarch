import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerRelationFilter", {})
export class CareerRelationFilter {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  is?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  isNot?: CareerWhereInput | undefined;
}
