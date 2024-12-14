import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutProjectInfoInput } from "../inputs/CareerCreateWithoutProjectInfoInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateOrConnectWithoutProjectInfoInput", {})
export class CareerCreateOrConnectWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutProjectInfoInput, {
    nullable: false
  })
  create!: CareerCreateWithoutProjectInfoInput;
}
