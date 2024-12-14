import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoUpdateInput } from "../../../inputs/ProjectInfoUpdateInput";
import { ProjectInfoWhereUniqueInput } from "../../../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoUpdateInput, {
    nullable: false
  })
  data!: ProjectInfoUpdateInput;

  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;
}
