import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateNestedOneWithoutIndividualInput } from "../inputs/CareerCreateNestedOneWithoutIndividualInput";
import { UserCreateNestedOneWithoutIndividualInput } from "../inputs/UserCreateNestedOneWithoutIndividualInput";

@TypeGraphQL.InputType("IndividualCreateWithoutExpertiseListInput", {})
export class IndividualCreateWithoutExpertiseListInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutIndividualInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutIndividualInput;

  @TypeGraphQL.Field(_type => CareerCreateNestedOneWithoutIndividualInput, {
    nullable: true
  })
  career?: CareerCreateNestedOneWithoutIndividualInput | undefined;
}
