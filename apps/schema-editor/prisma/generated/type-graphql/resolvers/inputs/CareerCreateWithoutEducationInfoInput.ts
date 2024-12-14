import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateNestedOneWithoutCareerInput } from "../inputs/IndividualCreateNestedOneWithoutCareerInput";
import { ProjectInfoCreateNestedManyWithoutCareerInput } from "../inputs/ProjectInfoCreateNestedManyWithoutCareerInput";
import { UserCreateNestedOneWithoutCareerInput } from "../inputs/UserCreateNestedOneWithoutCareerInput";

@TypeGraphQL.InputType("CareerCreateWithoutEducationInfoInput", {})
export class CareerCreateWithoutEducationInfoInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCareerInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCareerInput;

  @TypeGraphQL.Field(_type => ProjectInfoCreateNestedManyWithoutCareerInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoCreateNestedManyWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateNestedOneWithoutCareerInput, {
    nullable: false
  })
  individual!: IndividualCreateNestedOneWithoutCareerInput;
}
