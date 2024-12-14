import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListUpdateManyWithoutTagsNestedInput } from "../inputs/ExpertiseListUpdateManyWithoutTagsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExpertiseTagUpdateInput", {})
export class ExpertiseTagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  expertise?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateManyWithoutTagsNestedInput, {
    nullable: true
  })
  lists?: ExpertiseListUpdateManyWithoutTagsNestedInput | undefined;
}
