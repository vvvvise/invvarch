import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualUpdateOneRequiredWithoutCareerNestedInput } from "../inputs/IndividualUpdateOneRequiredWithoutCareerNestedInput";
import { ProjectInfoUpdateManyWithoutCareerNestedInput } from "../inputs/ProjectInfoUpdateManyWithoutCareerNestedInput";
import { UserUpdateOneRequiredWithoutCareerNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCareerNestedInput";

@TypeGraphQL.InputType("CareerUpdateWithoutEducationInfoInput", {})
export class CareerUpdateWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCareerNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyWithoutCareerNestedInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoUpdateManyWithoutCareerNestedInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateOneRequiredWithoutCareerNestedInput, {
    nullable: true
  })
  individual?: IndividualUpdateOneRequiredWithoutCareerNestedInput | undefined;
}
