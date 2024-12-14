import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualUpdateOneRequiredWithoutExpertiseListNestedInput } from "../inputs/IndividualUpdateOneRequiredWithoutExpertiseListNestedInput";

@TypeGraphQL.InputType("ExpertiseListUpdateWithoutTagsInput", {})
export class ExpertiseListUpdateWithoutTagsInput {
  @TypeGraphQL.Field(_type => IndividualUpdateOneRequiredWithoutExpertiseListNestedInput, {
    nullable: true
  })
  individual?: IndividualUpdateOneRequiredWithoutExpertiseListNestedInput | undefined;
}
