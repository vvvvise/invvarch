import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("IndividualScalarWhereWithAggregatesInput", {})
export class IndividualScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IndividualScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IndividualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IndividualScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IndividualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IndividualScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IndividualScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
