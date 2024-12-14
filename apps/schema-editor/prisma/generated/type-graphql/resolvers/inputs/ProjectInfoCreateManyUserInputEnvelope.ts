import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyUserInput } from "../inputs/ProjectInfoCreateManyUserInput";

@TypeGraphQL.InputType("ProjectInfoCreateManyUserInputEnvelope", {})
export class ProjectInfoCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateManyUserInput], {
    nullable: false
  })
  data!: ProjectInfoCreateManyUserInput[];
}
