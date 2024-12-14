import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoUpdateManyWithoutCareerNestedInput } from "../inputs/EducationInfoUpdateManyWithoutCareerNestedInput";
import { IndividualUpdateOneRequiredWithoutCareerNestedInput } from "../inputs/IndividualUpdateOneRequiredWithoutCareerNestedInput";
import { ProjectInfoUpdateManyWithoutCareerNestedInput } from "../inputs/ProjectInfoUpdateManyWithoutCareerNestedInput";

@TypeGraphQL.InputType("CareerUpdateWithoutUserInput", {})
export class CareerUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => EducationInfoUpdateManyWithoutCareerNestedInput, {
    nullable: true
  })
  educationInfo?: EducationInfoUpdateManyWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyWithoutCareerNestedInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoUpdateManyWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateOneRequiredWithoutCareerNestedInput, {
    nullable: true
  })
  individual?: IndividualUpdateOneRequiredWithoutCareerNestedInput | undefined;
}
