import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoUpdateManyWithoutCareerNestedInput } from "../inputs/EducationInfoUpdateManyWithoutCareerNestedInput";
import { ProjectInfoUpdateManyWithoutCareerNestedInput } from "../inputs/ProjectInfoUpdateManyWithoutCareerNestedInput";
import { UserUpdateOneRequiredWithoutCareerNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCareerNestedInput";

@TypeGraphQL.InputType("CareerUpdateWithoutIndividualInput", {})
export class CareerUpdateWithoutIndividualInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCareerNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoUpdateManyWithoutCareerNestedInput, {
    nullable: true
  })
  educationInfo?: EducationInfoUpdateManyWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyWithoutCareerNestedInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoUpdateManyWithoutCareerNestedInput | undefined;
}
