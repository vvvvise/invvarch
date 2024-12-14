import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IndividualOrderByWithAggregationInput } from "../../../inputs/IndividualOrderByWithAggregationInput";
import { IndividualScalarWhereWithAggregatesInput } from "../../../inputs/IndividualScalarWhereWithAggregatesInput";
import { IndividualWhereInput } from "../../../inputs/IndividualWhereInput";
import { IndividualScalarFieldEnum } from "../../../../enums/IndividualScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIndividualArgs {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IndividualOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IndividualOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IndividualScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId">;

  @TypeGraphQL.Field(_type => IndividualScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IndividualScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
