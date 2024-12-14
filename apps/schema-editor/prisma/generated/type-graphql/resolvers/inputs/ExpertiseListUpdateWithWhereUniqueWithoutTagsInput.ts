import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListUpdateWithoutTagsInput } from "../inputs/ExpertiseListUpdateWithoutTagsInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListUpdateWithWhereUniqueWithoutTagsInput", {})
export class ExpertiseListUpdateWithWhereUniqueWithoutTagsInput {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateWithoutTagsInput, {
    nullable: false
  })
  data!: ExpertiseListUpdateWithoutTagsInput;
}
