import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutIndividualInput } from "../inputs/CareerCreateWithoutIndividualInput";
import { CareerUpdateWithoutIndividualInput } from "../inputs/CareerUpdateWithoutIndividualInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpsertWithoutIndividualInput", {})
export class CareerUpsertWithoutIndividualInput {
  @TypeGraphQL.Field(_type => CareerUpdateWithoutIndividualInput, {
    nullable: false
  })
  update!: CareerUpdateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutIndividualInput, {
    nullable: false
  })
  create!: CareerCreateWithoutIndividualInput;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}
