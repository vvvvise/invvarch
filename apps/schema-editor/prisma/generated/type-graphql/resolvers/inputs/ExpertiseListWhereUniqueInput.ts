import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";
import { ExpertiseTagListRelationFilter } from "../inputs/ExpertiseTagListRelationFilter";
import { IndividualRelationFilter } from "../inputs/IndividualRelationFilter";

@TypeGraphQL.InputType("ExpertiseListWhereUniqueInput", {})
export class ExpertiseListWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  individualId?: number | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereInput], {
    nullable: true
  })
  AND?: ExpertiseListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereInput], {
    nullable: true
  })
  OR?: ExpertiseListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereInput], {
    nullable: true
  })
  NOT?: ExpertiseListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagListRelationFilter, {
    nullable: true
  })
  tags?: ExpertiseTagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IndividualRelationFilter, {
    nullable: true
  })
  individual?: IndividualRelationFilter | undefined;
}
