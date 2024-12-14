import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateNestedManyWithoutTagsInput } from "../inputs/ExpertiseListCreateNestedManyWithoutTagsInput";

@TypeGraphQL.InputType("ExpertiseTagCreateInput", {})
export class ExpertiseTagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  expertise!: string;

  @TypeGraphQL.Field(_type => ExpertiseListCreateNestedManyWithoutTagsInput, {
    nullable: true
  })
  lists?: ExpertiseListCreateNestedManyWithoutTagsInput | undefined;
}
