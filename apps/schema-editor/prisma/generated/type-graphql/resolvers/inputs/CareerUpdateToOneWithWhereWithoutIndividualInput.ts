import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateWithoutIndividualInput } from "../inputs/CareerUpdateWithoutIndividualInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpdateToOneWithWhereWithoutIndividualInput", {})
export class CareerUpdateToOneWithWhereWithoutIndividualInput {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateWithoutIndividualInput, {
    nullable: false
  })
  data!: CareerUpdateWithoutIndividualInput;
}
