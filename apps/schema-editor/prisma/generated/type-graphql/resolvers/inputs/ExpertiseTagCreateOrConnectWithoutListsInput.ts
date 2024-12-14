import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateWithoutListsInput } from "../inputs/ExpertiseTagCreateWithoutListsInput";
import { ExpertiseTagWhereUniqueInput } from "../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseTagCreateOrConnectWithoutListsInput", {})
export class ExpertiseTagCreateOrConnectWithoutListsInput {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseTagCreateWithoutListsInput, {
    nullable: false
  })
  create!: ExpertiseTagCreateWithoutListsInput;
}
