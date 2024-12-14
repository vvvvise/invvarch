import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateWithoutEducationInfoInput } from "../inputs/CareerUpdateWithoutEducationInfoInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpdateToOneWithWhereWithoutEducationInfoInput", {})
export class CareerUpdateToOneWithWhereWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateWithoutEducationInfoInput, {
    nullable: false
  })
  data!: CareerUpdateWithoutEducationInfoInput;
}
