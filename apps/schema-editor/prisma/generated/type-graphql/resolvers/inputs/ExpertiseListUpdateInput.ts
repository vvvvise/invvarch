import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagUpdateManyWithoutListsNestedInput } from "../inputs/ExpertiseTagUpdateManyWithoutListsNestedInput";
import { IndividualUpdateOneRequiredWithoutExpertiseListNestedInput } from "../inputs/IndividualUpdateOneRequiredWithoutExpertiseListNestedInput";

@TypeGraphQL.InputType("ExpertiseListUpdateInput", {})
export class ExpertiseListUpdateInput {
  @TypeGraphQL.Field(_type => ExpertiseTagUpdateManyWithoutListsNestedInput, {
    nullable: true
  })
  tags?: ExpertiseTagUpdateManyWithoutListsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateOneRequiredWithoutExpertiseListNestedInput, {
    nullable: true
  })
  individual?: IndividualUpdateOneRequiredWithoutExpertiseListNestedInput | undefined;
}
