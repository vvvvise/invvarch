import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerUpdateOneWithoutUserNestedInput } from "../inputs/CareerUpdateOneWithoutUserNestedInput";
import { EducationInfoUpdateOneWithoutUserNestedInput } from "../inputs/EducationInfoUpdateOneWithoutUserNestedInput";
import { IndividualUpdateOneWithoutUserNestedInput } from "../inputs/IndividualUpdateOneWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectInfoUpdateManyWithoutUserNestedInput } from "../inputs/ProjectInfoUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutPostsInput", {})
export class UserUpdateWithoutPostsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profile?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  urls?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CareerUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  career?: CareerUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  individual?: IndividualUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoUpdateOneWithoutUserNestedInput, {
    nullable: true
  })
  educationInfo?: EducationInfoUpdateOneWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoUpdateManyWithoutUserNestedInput | undefined;
}
