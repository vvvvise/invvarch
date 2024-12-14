import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutProjectInfoInput } from "../inputs/CareerCreateWithoutProjectInfoInput";
import { CareerUpdateWithoutProjectInfoInput } from "../inputs/CareerUpdateWithoutProjectInfoInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpsertWithoutProjectInfoInput", {})
export class CareerUpsertWithoutProjectInfoInput {
  @TypeGraphQL.Field(_type => CareerUpdateWithoutProjectInfoInput, {
    nullable: false
  })
  update!: CareerUpdateWithoutProjectInfoInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutProjectInfoInput, {
    nullable: false
  })
  create!: CareerCreateWithoutProjectInfoInput;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}
