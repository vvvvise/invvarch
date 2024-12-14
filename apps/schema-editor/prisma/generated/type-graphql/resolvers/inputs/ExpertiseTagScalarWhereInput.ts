import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExpertiseTagScalarWhereInput", {})
export class ExpertiseTagScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereInput], {
    nullable: true
  })
  AND?: ExpertiseTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereInput], {
    nullable: true
  })
  OR?: ExpertiseTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereInput], {
    nullable: true
  })
  NOT?: ExpertiseTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  expertise?: StringFilter | undefined;
}
