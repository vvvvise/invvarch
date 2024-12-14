import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerOrderByWithRelationInput } from "../inputs/CareerOrderByWithRelationInput";
import { ExpertiseListOrderByWithRelationInput } from "../inputs/ExpertiseListOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IndividualOrderByWithRelationInput", {})
export class IndividualOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListOrderByWithRelationInput, {
    nullable: true
  })
  expertiseList?: ExpertiseListOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CareerOrderByWithRelationInput, {
    nullable: true
  })
  career?: CareerOrderByWithRelationInput | undefined;
}
