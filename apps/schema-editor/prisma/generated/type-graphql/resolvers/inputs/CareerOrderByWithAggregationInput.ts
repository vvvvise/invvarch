import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerAvgOrderByAggregateInput } from "../inputs/CareerAvgOrderByAggregateInput";
import { CareerCountOrderByAggregateInput } from "../inputs/CareerCountOrderByAggregateInput";
import { CareerMaxOrderByAggregateInput } from "../inputs/CareerMaxOrderByAggregateInput";
import { CareerMinOrderByAggregateInput } from "../inputs/CareerMinOrderByAggregateInput";
import { CareerSumOrderByAggregateInput } from "../inputs/CareerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CareerOrderByWithAggregationInput", {})
export class CareerOrderByWithAggregationInput {
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
  individualId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CareerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CareerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CareerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CareerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CareerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CareerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CareerSumOrderByAggregateInput | undefined;
}
