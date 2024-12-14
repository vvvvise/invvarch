import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoOrderByWithRelationInput } from "../../../inputs/ProjectInfoOrderByWithRelationInput";
import { ProjectInfoWhereInput } from "../../../inputs/ProjectInfoWhereInput";
import { ProjectInfoWhereUniqueInput } from "../../../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  where?: ProjectInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectInfoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectInfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
