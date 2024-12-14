import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoScalarWhereInput } from "../inputs/EducationInfoScalarWhereInput";
import { EducationInfoUpdateManyMutationInput } from "../inputs/EducationInfoUpdateManyMutationInput";

@TypeGraphQL.InputType("EducationInfoUpdateManyWithWhereWithoutCareerInput", {})
export class EducationInfoUpdateManyWithWhereWithoutCareerInput {
  @TypeGraphQL.Field(_type => EducationInfoScalarWhereInput, {
    nullable: false
  })
  where!: EducationInfoScalarWhereInput;

  @TypeGraphQL.Field(_type => EducationInfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: EducationInfoUpdateManyMutationInput;
}
