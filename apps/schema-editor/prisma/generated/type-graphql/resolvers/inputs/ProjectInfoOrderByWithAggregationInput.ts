import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoAvgOrderByAggregateInput } from "../inputs/ProjectInfoAvgOrderByAggregateInput";
import { ProjectInfoCountOrderByAggregateInput } from "../inputs/ProjectInfoCountOrderByAggregateInput";
import { ProjectInfoMaxOrderByAggregateInput } from "../inputs/ProjectInfoMaxOrderByAggregateInput";
import { ProjectInfoMinOrderByAggregateInput } from "../inputs/ProjectInfoMinOrderByAggregateInput";
import { ProjectInfoSumOrderByAggregateInput } from "../inputs/ProjectInfoSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProjectInfoOrderByWithAggregationInput", {})
export class ProjectInfoOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  endDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  productName?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  summary?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  careerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProjectInfoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProjectInfoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProjectInfoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProjectInfoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProjectInfoSumOrderByAggregateInput | undefined;
}
