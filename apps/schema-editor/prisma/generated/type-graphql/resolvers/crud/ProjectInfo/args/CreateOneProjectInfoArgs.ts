import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoCreateInput } from "../../../inputs/ProjectInfoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoCreateInput, {
    nullable: false
  })
  data!: ProjectInfoCreateInput;
}
