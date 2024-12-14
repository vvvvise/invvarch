import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyCareerInput } from "../inputs/ProjectInfoCreateManyCareerInput";

@TypeGraphQL.InputType("ProjectInfoCreateManyCareerInputEnvelope", {})
export class ProjectInfoCreateManyCareerInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateManyCareerInput], {
    nullable: false
  })
  data!: ProjectInfoCreateManyCareerInput[];
}
