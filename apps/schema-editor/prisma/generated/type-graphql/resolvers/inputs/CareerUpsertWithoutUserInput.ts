import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutUserInput } from "../inputs/CareerCreateWithoutUserInput";
import { CareerUpdateWithoutUserInput } from "../inputs/CareerUpdateWithoutUserInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpsertWithoutUserInput", {})
export class CareerUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => CareerUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CareerUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutUserInput, {
    nullable: false
  })
  create!: CareerCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}
