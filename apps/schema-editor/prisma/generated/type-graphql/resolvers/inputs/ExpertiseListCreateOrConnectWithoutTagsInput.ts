import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateWithoutTagsInput } from "../inputs/ExpertiseListCreateWithoutTagsInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListCreateOrConnectWithoutTagsInput", {})
export class ExpertiseListCreateOrConnectWithoutTagsInput {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutTagsInput, {
    nullable: false
  })
  create!: ExpertiseListCreateWithoutTagsInput;
}
