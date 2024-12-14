import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListCreateInput } from "../../../inputs/ExpertiseListCreateInput";
import { ExpertiseListUpdateInput } from "../../../inputs/ExpertiseListUpdateInput";
import { ExpertiseListWhereUniqueInput } from "../../../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: false
  })
  where!: ExpertiseListWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpertiseListCreateInput, {
    nullable: false
  })
  create!: ExpertiseListCreateInput;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateInput, {
    nullable: false
  })
  update!: ExpertiseListUpdateInput;
}
