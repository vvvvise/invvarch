import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateWithoutListsInput } from "../inputs/ExpertiseTagCreateWithoutListsInput";
import { ExpertiseTagUpdateWithoutListsInput } from "../inputs/ExpertiseTagUpdateWithoutListsInput";
import { ExpertiseTagWhereUniqueInput } from "../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseTagUpsertWithWhereUniqueWithoutListsInput", {})
export class ExpertiseTagUpsertWithWhereUniqueWithoutListsInput {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseTagUpdateWithoutListsInput, {
    nullable: false
  })
  update!: ExpertiseTagUpdateWithoutListsInput;

  @TypeGraphQL.Field(_type => ExpertiseTagCreateWithoutListsInput, {
    nullable: false
  })
  create!: ExpertiseTagCreateWithoutListsInput;
}
