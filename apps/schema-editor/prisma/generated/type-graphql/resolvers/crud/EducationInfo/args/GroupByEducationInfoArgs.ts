import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoOrderByWithAggregationInput } from "../../../inputs/EducationInfoOrderByWithAggregationInput";
import { EducationInfoScalarWhereWithAggregatesInput } from "../../../inputs/EducationInfoScalarWhereWithAggregatesInput";
import { EducationInfoWhereInput } from "../../../inputs/EducationInfoWhereInput";
import { EducationInfoScalarFieldEnum } from "../../../../enums/EducationInfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EducationInfoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "schoolName" | "undergraduate" | "startDate" | "endDate" | "summary" | "careerId">;

  @TypeGraphQL.Field(_type => EducationInfoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EducationInfoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
