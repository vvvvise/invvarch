import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoCreateInput } from "../../../inputs/ProjectInfoCreateInput";
import { ProjectInfoUpdateInput } from "../../../inputs/ProjectInfoUpdateInput";
import { ProjectInfoWhereUniqueInput } from "../../../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoCreateInput, {
    nullable: false
  })
  create!: ProjectInfoCreateInput;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateInput, {
    nullable: false
  })
  update!: ProjectInfoUpdateInput;
}
