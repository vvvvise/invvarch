import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateNestedOneWithoutExpertiseListInput } from "../inputs/IndividualCreateNestedOneWithoutExpertiseListInput";

@TypeGraphQL.InputType("ExpertiseListCreateWithoutTagsInput", {})
export class ExpertiseListCreateWithoutTagsInput {
  @TypeGraphQL.Field(_type => IndividualCreateNestedOneWithoutExpertiseListInput, {
    nullable: false
  })
  individual!: IndividualCreateNestedOneWithoutExpertiseListInput;
}
