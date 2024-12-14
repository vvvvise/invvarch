import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoUpdateWithoutUserInput } from "../inputs/ProjectInfoUpdateWithoutUserInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoUpdateWithWhereUniqueWithoutUserInput", {})
export class ProjectInfoUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ProjectInfoUpdateWithoutUserInput;
}
