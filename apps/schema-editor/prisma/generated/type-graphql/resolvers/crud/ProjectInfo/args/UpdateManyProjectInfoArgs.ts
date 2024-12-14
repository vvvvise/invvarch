import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoUpdateManyMutationInput } from "../../../inputs/ProjectInfoUpdateManyMutationInput";
import { ProjectInfoWhereInput } from "../../../inputs/ProjectInfoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectInfoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  where?: ProjectInfoWhereInput | undefined;
}
