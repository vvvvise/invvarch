import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoScalarWhereInput } from "../inputs/ProjectInfoScalarWhereInput";
import { ProjectInfoUpdateManyMutationInput } from "../inputs/ProjectInfoUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectInfoUpdateManyWithWhereWithoutUserInput", {})
export class ProjectInfoUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectInfoScalarWhereInput, {
    nullable: false
  })
  where!: ProjectInfoScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectInfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectInfoUpdateManyMutationInput;
}
