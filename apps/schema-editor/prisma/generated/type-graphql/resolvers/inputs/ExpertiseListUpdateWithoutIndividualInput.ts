import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagUpdateManyWithoutListsNestedInput } from "../inputs/ExpertiseTagUpdateManyWithoutListsNestedInput";

@TypeGraphQL.InputType("ExpertiseListUpdateWithoutIndividualInput", {})
export class ExpertiseListUpdateWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseTagUpdateManyWithoutListsNestedInput, {
    nullable: true
  })
  tags?: ExpertiseTagUpdateManyWithoutListsNestedInput | undefined;
}
