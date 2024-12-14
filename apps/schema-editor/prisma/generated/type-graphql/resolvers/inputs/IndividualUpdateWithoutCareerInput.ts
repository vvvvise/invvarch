import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListUpdateOneWithoutIndividualNestedInput } from "../inputs/ExpertiseListUpdateOneWithoutIndividualNestedInput";
import { UserUpdateOneRequiredWithoutIndividualNestedInput } from "../inputs/UserUpdateOneRequiredWithoutIndividualNestedInput";

@TypeGraphQL.InputType("IndividualUpdateWithoutCareerInput", {})
export class IndividualUpdateWithoutCareerInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutIndividualNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutIndividualNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateOneWithoutIndividualNestedInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListUpdateOneWithoutIndividualNestedInput | undefined;
}
