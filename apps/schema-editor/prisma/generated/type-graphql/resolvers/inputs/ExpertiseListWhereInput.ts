import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagListRelationFilter } from "../inputs/ExpertiseTagListRelationFilter";
import { IndividualRelationFilter } from "../inputs/IndividualRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ExpertiseListWhereInput", {})
export class ExpertiseListWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  individualId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ExpertiseTagListRelationFilter, {
    nullable: true
  })
  tags?: ExpertiseTagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IndividualRelationFilter, {
    nullable: true
  })
  individual?: IndividualRelationFilter | undefined;
}
