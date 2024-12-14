import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CareerCreateNestedOneWithoutUserInput } from "../inputs/CareerCreateNestedOneWithoutUserInput";
import { EducationInfoCreateNestedOneWithoutUserInput } from "../inputs/EducationInfoCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProjectInfoCreateNestedManyWithoutUserInput } from "../inputs/ProjectInfoCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutIndividualInput", {})
export class UserCreateWithoutIndividualInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  urls?: string | undefined;

  @TypeGraphQL.Field(_type => CareerCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  career?: CareerCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  educationInfo?: EducationInfoCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  projectInfo?: ProjectInfoCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}
