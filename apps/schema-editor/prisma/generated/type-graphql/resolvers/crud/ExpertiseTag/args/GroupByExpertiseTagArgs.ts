import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseTagOrderByWithAggregationInput } from "../../../inputs/ExpertiseTagOrderByWithAggregationInput";
import { ExpertiseTagScalarWhereWithAggregatesInput } from "../../../inputs/ExpertiseTagScalarWhereWithAggregatesInput";
import { ExpertiseTagWhereInput } from "../../../inputs/ExpertiseTagWhereInput";
import { ExpertiseTagScalarFieldEnum } from "../../../../enums/ExpertiseTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExpertiseTagArgs {
  @TypeGraphQL.Field(_type => ExpertiseTagWhereInput, {
    nullable: true
  })
  where?: ExpertiseTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExpertiseTagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "expertise">;

  @TypeGraphQL.Field(_type => ExpertiseTagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExpertiseTagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
