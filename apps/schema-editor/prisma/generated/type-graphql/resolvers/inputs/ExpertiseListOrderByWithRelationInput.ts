import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagOrderByRelationAggregateInput } from "../inputs/ExpertiseTagOrderByRelationAggregateInput";
import { IndividualOrderByWithRelationInput } from "../inputs/IndividualOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExpertiseListOrderByWithRelationInput", {})
export class ExpertiseListOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  individualId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagOrderByRelationAggregateInput, {
    nullable: true
  })
  tags?: ExpertiseTagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualOrderByWithRelationInput, {
    nullable: true
  })
  individual?: IndividualOrderByWithRelationInput | undefined;
}
