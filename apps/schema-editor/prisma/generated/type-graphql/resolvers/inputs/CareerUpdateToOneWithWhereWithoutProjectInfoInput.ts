import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateWithoutProjectInfoInput } from "../inputs/CareerUpdateWithoutProjectInfoInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpdateToOneWithWhereWithoutProjectInfoInput", {})
export class CareerUpdateToOneWithWhereWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateWithoutProjectInfoInput, {
    nullable: false
  })
  data!: CareerUpdateWithoutProjectInfoInput;
}
