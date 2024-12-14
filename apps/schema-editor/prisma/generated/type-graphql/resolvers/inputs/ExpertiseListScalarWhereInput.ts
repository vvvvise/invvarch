import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ExpertiseListScalarWhereInput", {})
export class ExpertiseListScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereInput], {
    nullable: true
  })
  AND?: ExpertiseListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereInput], {
    nullable: true
  })
  OR?: ExpertiseListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereInput], {
    nullable: true
  })
  NOT?: ExpertiseListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  individualId?: IntFilter | undefined;
}
