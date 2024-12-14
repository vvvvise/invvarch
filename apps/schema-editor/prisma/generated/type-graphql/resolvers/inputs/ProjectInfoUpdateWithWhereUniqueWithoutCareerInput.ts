import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoUpdateWithoutCareerInput } from "../inputs/ProjectInfoUpdateWithoutCareerInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoUpdateWithWhereUniqueWithoutCareerInput", {})
export class ProjectInfoUpdateWithWhereUniqueWithoutCareerInput {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateWithoutCareerInput, {
    nullable: false
  })
  data!: ProjectInfoUpdateWithoutCareerInput;
}
