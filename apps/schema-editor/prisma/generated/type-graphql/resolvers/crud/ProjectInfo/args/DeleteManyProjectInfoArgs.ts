import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoWhereInput } from "../../../inputs/ProjectInfoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  where?: ProjectInfoWhereInput | undefined;
}