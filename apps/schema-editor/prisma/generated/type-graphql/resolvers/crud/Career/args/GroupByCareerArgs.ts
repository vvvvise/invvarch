import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CareerOrderByWithAggregationInput } from "../../../inputs/CareerOrderByWithAggregationInput";
import { CareerScalarWhereWithAggregatesInput } from "../../../inputs/CareerScalarWhereWithAggregatesInput";
import { CareerWhereInput } from "../../../inputs/CareerWhereInput";
import { CareerScalarFieldEnum } from "../../../../enums/CareerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCareerArgs {
  @TypeGraphQL.Field(_type => CareerWhereInput, {
    nullable: true
  })
  where?: CareerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CareerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CareerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CareerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "individualId">;

  @TypeGraphQL.Field(_type => CareerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CareerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
