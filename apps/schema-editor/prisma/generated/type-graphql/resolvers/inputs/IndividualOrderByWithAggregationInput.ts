import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualAvgOrderByAggregateInput } from "../inputs/IndividualAvgOrderByAggregateInput";
import { IndividualCountOrderByAggregateInput } from "../inputs/IndividualCountOrderByAggregateInput";
import { IndividualMaxOrderByAggregateInput } from "../inputs/IndividualMaxOrderByAggregateInput";
import { IndividualMinOrderByAggregateInput } from "../inputs/IndividualMinOrderByAggregateInput";
import { IndividualSumOrderByAggregateInput } from "../inputs/IndividualSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IndividualOrderByWithAggregationInput", {})
export class IndividualOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IndividualCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IndividualCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: IndividualAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IndividualMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IndividualMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: IndividualSumOrderByAggregateInput | undefined;
}
