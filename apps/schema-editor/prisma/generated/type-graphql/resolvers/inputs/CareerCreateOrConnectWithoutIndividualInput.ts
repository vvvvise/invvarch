import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutIndividualInput } from "../inputs/CareerCreateWithoutIndividualInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateOrConnectWithoutIndividualInput", {})
export class CareerCreateOrConnectWithoutIndividualInput {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutIndividualInput, {
    nullable: false
  })
  create!: CareerCreateWithoutIndividualInput;
}
