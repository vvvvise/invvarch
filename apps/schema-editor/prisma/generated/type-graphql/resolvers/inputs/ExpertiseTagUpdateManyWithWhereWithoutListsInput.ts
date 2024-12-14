import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagScalarWhereInput } from "../inputs/ExpertiseTagScalarWhereInput";
import { ExpertiseTagUpdateManyMutationInput } from "../inputs/ExpertiseTagUpdateManyMutationInput";

@TypeGraphQL.InputType("ExpertiseTagUpdateManyWithWhereWithoutListsInput", {})
export class ExpertiseTagUpdateManyWithWhereWithoutListsInput {
  @TypeGraphQL.Field(_type => ExpertiseTagScalarWhereInput, {
    nullable: false
  })
  where!: ExpertiseTagScalarWhereInput;

  @TypeGraphQL.Field(_type => ExpertiseTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExpertiseTagUpdateManyMutationInput;
}
