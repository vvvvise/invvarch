import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpertiseListOrderByWithAggregationInput } from "../../../inputs/ExpertiseListOrderByWithAggregationInput";
import { ExpertiseListScalarWhereWithAggregatesInput } from "../../../inputs/ExpertiseListScalarWhereWithAggregatesInput";
import { ExpertiseListWhereInput } from "../../../inputs/ExpertiseListWhereInput";
import { ExpertiseListScalarFieldEnum } from "../../../../enums/ExpertiseListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExpertiseListArgs {
  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  where?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExpertiseListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "individualId">;

  @TypeGraphQL.Field(_type => ExpertiseListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExpertiseListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
