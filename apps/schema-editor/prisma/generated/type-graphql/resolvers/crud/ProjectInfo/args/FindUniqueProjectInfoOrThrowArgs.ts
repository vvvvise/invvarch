import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoWhereUniqueInput } from "../../../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProjectInfoOrThrowArgs {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;
}
