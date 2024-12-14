import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateWithoutUserInput } from "../inputs/CareerUpdateWithoutUserInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpdateToOneWithWhereWithoutUserInput", {})
export class CareerUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CareerUpdateWithoutUserInput;
}
