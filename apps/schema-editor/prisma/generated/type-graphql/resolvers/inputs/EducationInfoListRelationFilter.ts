import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoWhereInput } from "../inputs/EducationInfoWhereInput";

@TypeGraphQL.InputType("EducationInfoListRelationFilter", {})
export class EducationInfoListRelationFilter {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  every?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  some?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  none?: EducationInfoWhereInput | undefined;
}
