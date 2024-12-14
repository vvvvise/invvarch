import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateWithoutUserInput } from "../inputs/ProjectInfoCreateWithoutUserInput";
import { ProjectInfoUpdateWithoutUserInput } from "../inputs/ProjectInfoUpdateWithoutUserInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoUpsertWithWhereUniqueWithoutUserInput", {})
export class ProjectInfoUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProjectInfoUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProjectInfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectInfoCreateWithoutUserInput;
}
