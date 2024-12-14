import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateWithoutTagsInput } from "../inputs/ExpertiseListCreateWithoutTagsInput";
import { ExpertiseListUpdateWithoutTagsInput } from "../inputs/ExpertiseListUpdateWithoutTagsInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListUpsertWithWhereUniqueWithoutTagsInput", {})
export class ExpertiseListUpsertWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: ExpertiseListUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutTagsInput, {
    nullable: false
  })
  create!: ExpertiseListCreateWithoutTagsInput;
}
