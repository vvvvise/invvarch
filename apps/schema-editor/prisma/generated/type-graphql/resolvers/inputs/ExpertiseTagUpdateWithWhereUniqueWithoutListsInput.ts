import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagUpdateWithoutListsInput } from "../inputs/ExpertiseTagUpdateWithoutListsInput";
import { ExpertiseTagWhereUniqueInput } from "../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseTagUpdateWithWhereUniqueWithoutListsInput", {})
export class ExpertiseTagUpdateWithWhereUniqueWithoutListsInput {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseTagUpdateWithoutListsInput, {
    nullable: false
  })
  data!: ExpertiseTagUpdateWithoutListsInput;
}
