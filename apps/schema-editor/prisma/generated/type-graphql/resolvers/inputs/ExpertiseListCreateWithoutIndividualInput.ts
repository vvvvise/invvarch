import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateNestedManyWithoutListsInput } from "../inputs/ExpertiseTagCreateNestedManyWithoutListsInput";

@TypeGraphQL.InputType("ExpertiseListCreateWithoutIndividualInput", {})
export class ExpertiseListCreateWithoutIndividualInput {
  @TypeGraphQL.Field(_type => ExpertiseTagCreateNestedManyWithoutListsInput, {
    nullable: true
  })
  tags?: ExpertiseTagCreateNestedManyWithoutListsInput | undefined;
}
