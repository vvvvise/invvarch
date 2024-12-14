import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateNestedManyWithoutCareerInput } from "../inputs/EducationInfoCreateNestedManyWithoutCareerInput";
import { IndividualCreateNestedOneWithoutCareerInput } from "../inputs/IndividualCreateNestedOneWithoutCareerInput";
import { ProjectInfoCreateNestedManyWithoutCareerInput } from "../inputs/ProjectInfoCreateNestedManyWithoutCareerInput";

@TypeGraphQL.InputType("CareerCreateWithoutUserInput", {})
export class CareerCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoCreateNestedManyWithoutCareerInput, {
    nullable: true
  })
  educationInfo?: EducationInfoCreateNestedManyWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateNestedManyWithoutCareerInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoCreateNestedManyWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateNestedOneWithoutCareerInput, {
    nullable: false
  })
  individual!: IndividualCreateNestedOneWithoutCareerInput;
}
