import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListScalarWhereInput } from "../inputs/ExpertiseListScalarWhereInput";
import { ExpertiseListUpdateManyMutationInput } from "../inputs/ExpertiseListUpdateManyMutationInput";

@TypeGraphQL.InputType("ExpertiseListUpdateManyWithWhereWithoutTagsInput", {})
export class ExpertiseListUpdateManyWithWhereWithoutTagsInput {
  @TypeGraphQL.Field(_type => ExpertiseListScalarWhereInput, {
    nullable: false
  })
  where!: ExpertiseListScalarWhereInput;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExpertiseListUpdateManyMutationInput;
}
