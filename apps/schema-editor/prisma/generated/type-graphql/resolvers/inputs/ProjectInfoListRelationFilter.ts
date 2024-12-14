import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoWhereInput } from "../inputs/ProjectInfoWhereInput";

@TypeGraphQL.InputType("ProjectInfoListRelationFilter", {})
export class ProjectInfoListRelationFilter {
  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  every?: ProjectInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  some?: ProjectInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoWhereInput, {
    nullable: true
  })
  none?: ProjectInfoWhereInput | undefined;
}
