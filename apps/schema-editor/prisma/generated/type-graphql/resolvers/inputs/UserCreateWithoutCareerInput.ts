import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateNestedOneWithoutUserInput } from "../inputs/EducationInfoCreateNestedOneWithoutUserInput";
import { IndividualCreateNestedOneWithoutUserInput } from "../inputs/IndividualCreateNestedOneWithoutUserInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { ProjectInfoCreateNestedManyWithoutUserInput } from "../inputs/ProjectInfoCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutCareerInput", {})
export class UserCreateWithoutCareerInput {
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

  @TypeGraphQL.Field(_type => IndividualCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  individual?: IndividualCreateNestedOneWithoutUserInput | undefined;

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
