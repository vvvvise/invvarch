import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoCreateManyInput } from "../../../inputs/ProjectInfoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnProjectInfoArgs {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateManyInput], {
    nullable: false
  })
  data!: ProjectInfoCreateManyInput[];
}
