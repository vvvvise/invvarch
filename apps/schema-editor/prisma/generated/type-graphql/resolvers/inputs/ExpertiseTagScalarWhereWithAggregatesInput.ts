import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExpertiseTagScalarWhereWithAggregatesInput", {})
export class ExpertiseTagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExpertiseTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExpertiseTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExpertiseTagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  expertise?: StringWithAggregatesFilter | undefined;
}
