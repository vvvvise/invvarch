import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoAvgOrderByAggregateInput } from "../inputs/EducationInfoAvgOrderByAggregateInput";
import { EducationInfoCountOrderByAggregateInput } from "../inputs/EducationInfoCountOrderByAggregateInput";
import { EducationInfoMaxOrderByAggregateInput } from "../inputs/EducationInfoMaxOrderByAggregateInput";
import { EducationInfoMinOrderByAggregateInput } from "../inputs/EducationInfoMinOrderByAggregateInput";
import { EducationInfoSumOrderByAggregateInput } from "../inputs/EducationInfoSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EducationInfoOrderByWithAggregationInput", {})
export class EducationInfoOrderByWithAggregationInput {
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
  schoolName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  undergraduate?: "asc" | "desc" | undefined;

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
  summary?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  careerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EducationInfoCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EducationInfoAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EducationInfoMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EducationInfoMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EducationInfoSumOrderByAggregateInput | undefined;
}
