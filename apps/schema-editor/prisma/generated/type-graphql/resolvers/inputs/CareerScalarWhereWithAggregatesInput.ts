import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CareerScalarWhereWithAggregatesInput", {})
export class CareerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CareerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CareerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CareerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CareerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  individualId?: IntWithAggregatesFilter | undefined;
}
