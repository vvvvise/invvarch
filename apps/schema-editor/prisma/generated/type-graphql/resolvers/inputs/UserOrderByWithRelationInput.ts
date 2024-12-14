import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerOrderByWithRelationInput } from "../inputs/CareerOrderByWithRelationInput";
import { EducationInfoOrderByWithRelationInput } from "../inputs/EducationInfoOrderByWithRelationInput";
import { IndividualOrderByWithRelationInput } from "../inputs/IndividualOrderByWithRelationInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ProjectInfoOrderByRelationAggregateInput } from "../inputs/ProjectInfoOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profile?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  urls?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CareerOrderByWithRelationInput, {
    nullable: true
  })
  career?: CareerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => IndividualOrderByWithRelationInput, {
    nullable: true
  })
  individual?: IndividualOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoOrderByWithRelationInput, {
    nullable: true
  })
  educationInfo?: EducationInfoOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoOrderByRelationAggregateInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;
}
