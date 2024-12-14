import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoOrderByRelationAggregateInput } from "../inputs/EducationInfoOrderByRelationAggregateInput";
import { IndividualOrderByWithRelationInput } from "../inputs/IndividualOrderByWithRelationInput";
import { ProjectInfoOrderByRelationAggregateInput } from "../inputs/ProjectInfoOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CareerOrderByWithRelationInput", {})
export class CareerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  individualId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoOrderByRelationAggregateInput, {
    nullable: true
  })
  educationInfo?: EducationInfoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoOrderByRelationAggregateInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IndividualOrderByWithRelationInput, {
    nullable: true
  })
  individual?: IndividualOrderByWithRelationInput | undefined;
}
