import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListOrderByRelationAggregateInput } from "../inputs/ExpertiseListOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExpertiseTagOrderByWithRelationInput", {})
export class ExpertiseTagOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expertise?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListOrderByRelationAggregateInput, {
    nullable: true
  })
  lists?: ExpertiseListOrderByRelationAggregateInput | undefined;
}
