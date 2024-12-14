import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateWithoutEducationInfoInput } from "../inputs/CareerCreateWithoutEducationInfoInput";
import { CareerUpdateWithoutEducationInfoInput } from "../inputs/CareerUpdateWithoutEducationInfoInput";
import { CareerWhereInput } from "../inputs/CareerWhereInput";

@TypeGraphQL.InputType("CareerUpsertWithoutEducationInfoInput", {})
export class CareerUpsertWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => CareerUpdateWithoutEducationInfoInput, {
    nullable: false
  })
  update!: CareerUpdateWithoutEducationInfoInput;

  @TypeGraphQL.Field(_type => CareerCreateWithoutEducationInfoInput, {
    nullable: false
  })
  create!: CareerCreateWithoutEducationInfoInput;

  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;
}
