import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutProjectInfoInput } from "../inputs/CareerCreateOrConnectWithoutProjectInfoInput";
import { CareerCreateWithoutProjectInfoInput } from "../inputs/CareerCreateWithoutProjectInfoInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateNestedOneWithoutProjectInfoInput", {})
export class CareerCreateNestedOneWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutProjectInfoInput, {
    nullable: true
  })
  create?: CareerCreateWithoutProjectInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutProjectInfoInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutProjectInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;
}
