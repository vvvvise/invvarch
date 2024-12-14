import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateOneWithoutIndividualNestedInput } from "../inputs/CareerUpdateOneWithoutIndividualNestedInput";
import { UserUpdateOneRequiredWithoutIndividualNestedInput } from "../inputs/UserUpdateOneRequiredWithoutIndividualNestedInput";

@TypeGraphQL.InputType("IndividualUpdateWithoutExpertiseListInput", {})
export class IndividualUpdateWithoutExpertiseListInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutIndividualNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutIndividualNestedInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateOneWithoutIndividualNestedInput, {
    nullable: true
  })
  career?: CareerUpdateOneWithoutIndividualNestedInput | undefined;
}
