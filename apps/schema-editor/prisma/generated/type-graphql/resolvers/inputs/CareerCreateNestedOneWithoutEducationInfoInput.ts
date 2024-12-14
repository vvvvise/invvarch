import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutEducationInfoInput } from "../inputs/CareerCreateOrConnectWithoutEducationInfoInput";
import { CareerCreateWithoutEducationInfoInput } from "../inputs/CareerCreateWithoutEducationInfoInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateNestedOneWithoutEducationInfoInput", {})
export class CareerCreateNestedOneWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutEducationInfoInput, {
    nullable: true
  })
  create?: CareerCreateWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutEducationInfoInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutEducationInfoInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;
}
