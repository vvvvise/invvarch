import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutUserInput } from "../inputs/CareerCreateWithoutUserInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateOrConnectWithoutUserInput", {})
export class CareerCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutUserInput, {
    nullable: false
  })
  create!: CareerCreateWithoutUserInput;
}
