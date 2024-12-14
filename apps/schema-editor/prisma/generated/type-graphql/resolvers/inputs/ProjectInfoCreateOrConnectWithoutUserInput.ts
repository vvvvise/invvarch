import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateWithoutUserInput } from "../inputs/ProjectInfoCreateWithoutUserInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoCreateOrConnectWithoutUserInput", {})
export class ProjectInfoCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectInfoWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectInfoCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectInfoCreateWithoutUserInput;
}
