import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyUserInputEnvelope } from "../inputs/ProjectInfoCreateManyUserInputEnvelope";
import { ProjectInfoCreateOrConnectWithoutUserInput } from "../inputs/ProjectInfoCreateOrConnectWithoutUserInput";
import { ProjectInfoCreateWithoutUserInput } from "../inputs/ProjectInfoCreateWithoutUserInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoCreateNestedManyWithoutUserInput", {})
export class ProjectInfoCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectInfoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectInfoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectInfoCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectInfoWhereUniqueInput[] | undefined;
}
