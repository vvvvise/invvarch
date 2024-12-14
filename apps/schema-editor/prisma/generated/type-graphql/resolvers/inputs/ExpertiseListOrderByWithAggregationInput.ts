import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListAvgOrderByAggregateInput } from "../inputs/ExpertiseListAvgOrderByAggregateInput";
import { ExpertiseListCountOrderByAggregateInput } from "../inputs/ExpertiseListCountOrderByAggregateInput";
import { ExpertiseListMaxOrderByAggregateInput } from "../inputs/ExpertiseListMaxOrderByAggregateInput";
import { ExpertiseListMinOrderByAggregateInput } from "../inputs/ExpertiseListMinOrderByAggregateInput";
import { ExpertiseListSumOrderByAggregateInput } from "../inputs/ExpertiseListSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExpertiseListOrderByWithAggregationInput", {})
export class ExpertiseListOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  individualId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExpertiseListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ExpertiseListAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExpertiseListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExpertiseListMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ExpertiseListSumOrderByAggregateInput | undefined;
}
