import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoWhereInput } from "../inputs/EducationInfoWhereInput";

@TypeGraphQL.InputType("EducationInfoNullableRelationFilter", {})
export class EducationInfoNullableRelationFilter {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  is?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  isNot?: EducationInfoWhereInput | undefined;
}
