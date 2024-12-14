import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateWithoutCareerInput } from "../inputs/ProjectInfoCreateWithoutCareerInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoCreateOrConnectWithoutCareerInput", {})
export class ProjectInfoCreateOrConnectWithoutCareerInput {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoCreateWithoutCareerInput, {
    nullable: false
  })
  create!: ProjectInfoCreateWithoutCareerInput;
}
