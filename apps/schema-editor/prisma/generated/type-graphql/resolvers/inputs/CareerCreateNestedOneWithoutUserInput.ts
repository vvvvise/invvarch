import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateOrConnectWithoutUserInput } from "../inputs/CareerCreateOrConnectWithoutUserInput";
import { CareerCreateWithoutUserInput } from "../inputs/CareerCreateWithoutUserInput";
import { CareerWhereUniqueInput } from "../inputs/CareerWhereUniqueInput";

@TypeGraphQL.InputType("CareerCreateNestedOneWithoutUserInput", {})
export class CareerCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => CareerCreateWithoutUserInput, {
    nullable: true
  })
  create?: CareerCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CareerCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: CareerCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => CareerWhereUniqueInput, {
    nullable: true
  })
  connect?: CareerWhereUniqueInput | undefined;
}
