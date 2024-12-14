import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagAvgOrderByAggregateInput } from "../inputs/ExpertiseTagAvgOrderByAggregateInput";
import { ExpertiseTagCountOrderByAggregateInput } from "../inputs/ExpertiseTagCountOrderByAggregateInput";
import { ExpertiseTagMaxOrderByAggregateInput } from "../inputs/ExpertiseTagMaxOrderByAggregateInput";
import { ExpertiseTagMinOrderByAggregateInput } from "../inputs/ExpertiseTagMinOrderByAggregateInput";
import { ExpertiseTagSumOrderByAggregateInput } from "../inputs/ExpertiseTagSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExpertiseTagOrderByWithAggregationInput", {})
export class ExpertiseTagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expertise?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExpertiseTagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExpertiseTagAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExpertiseTagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExpertiseTagMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExpertiseTagSumOrderByAggregateInput | undefined;
}
