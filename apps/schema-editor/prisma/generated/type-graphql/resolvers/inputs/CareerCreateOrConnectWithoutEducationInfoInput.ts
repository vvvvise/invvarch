import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutEducationInfoInput } from "../inputs/CareerCreateWithoutEducationInfoInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateOrConnectWithoutEducationInfoInput", {})
export class CareerCreateOrConnectWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: false
  })
  where!: CareerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutEducationInfoInput, {
    nullable: false
  })
  create!: CareerCreateWithoutEducationInfoInput;
}
