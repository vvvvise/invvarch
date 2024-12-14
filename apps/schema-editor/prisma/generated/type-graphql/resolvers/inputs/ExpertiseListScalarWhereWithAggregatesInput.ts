import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ExpertiseListScalarWhereWithAggregatesInput", {})
export class ExpertiseListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExpertiseListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExpertiseListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExpertiseListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  individualId?: IntWithAggregatesFilter | undefined;
}
