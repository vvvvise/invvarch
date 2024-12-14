import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutIndividualInput } from "../inputs/CareerCreateOrConnectWithoutIndividualInput";
import { CareerCreateWithoutIndividualInput } from "../inputs/CareerCreateWithoutIndividualInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateNestedOneWithoutIndividualInput", {})
export class CareerCreateNestedOneWithoutIndividualInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutIndividualInput, {
    nullable: true
  })
  create?: CareerCreateWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutIndividualInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;
}
