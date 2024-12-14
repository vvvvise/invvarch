import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagCreateInput } from "../../../inputs/ExpertiseTagCreateInput";
import { ExpertiseTagUpdateInput } from "../../../inputs/ExpertiseTagUpdateInput";
import { ExpertiseTagWhereUniqueInput } from "../../../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseTagCreateInput, {
    nullable: false
  })
  create!: ExpertiseTagCreateInput;

  @TypeGraphQL.Field(_type => ExpertiseTagUpdateInput, {
    nullable: false
  })
  update!: ExpertiseTagUpdateInput;
}
