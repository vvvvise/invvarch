import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectInfoOrderByWithAggregationInput } from "../../../inputs/ProjectInfoOrderByWithAggregationInput";
import { ProjectInfoScalarWhereWithAggregatesInput } from "../../../inputs/ProjectInfoScalarWhereWithAggregatesInput";
import { ProjectInfoWhereInput } from "../../../inputs/ProjectInfoWhereInput";
import { ProjectInfoScalarFieldEnum } from "../../../../enums/ProjectInfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectInfoArgs {
  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  where?: ProjectInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProjectInfoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "title" | "url" | "position" | "startDate" | "endDate" | "productName" | "summary" | "careerId">;

  @TypeGraphQL.Field(_type => ProjectInfoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectInfoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
