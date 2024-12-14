import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateOneWithoutIndividualNestedInput } from "../inputs/CareerUpdateOneWithoutIndividualNestedInput";
import { ExpertiseListUpdateOneWithoutIndividualNestedInput } from "../inputs/ExpertiseListUpdateOneWithoutIndividualNestedInput";

@TypeGraphQL.InputType("IndividualUpdateWithoutUserInput", {})
export class IndividualUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ExpertiseListUpdateOneWithoutIndividualNestedInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListUpdateOneWithoutIndividualNestedInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateOneWithoutIndividualNestedInput, {
    nullable: true
  })
  career?: CareerUpdateOneWithoutIndividualNestedInput | undefined;
}
