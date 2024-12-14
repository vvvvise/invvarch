import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateNestedManyWithoutListsInput } from "../inputs/ExpertiseTagCreateNestedManyWithoutListsInput";
import { IndividualCreateNestedOneWithoutExpertiseListInput } from "../inputs/IndividualCreateNestedOneWithoutExpertiseListInput";

@TypeGraphQL.InputType("ExpertiseListCreateInput", {})
export class ExpertiseListCreateInput {
  @TypeGraphQL.Field(_type => ExpertiseTagCreateNestedManyWithoutListsInput, {
    nullable: true
  })
  tags?: ExpertiseTagCreateNestedManyWithoutListsInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateNestedOneWithoutExpertiseListInput, {
    nullable: false
  })
  individual!: IndividualCreateNestedOneWithoutExpertiseListInput;
}
