import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyCareerInputEnvelope } from "../inputs/ProjectInfoCreateManyCareerInputEnvelope";
import { ProjectInfoCreateOrConnectWithoutCareerInput } from "../inputs/ProjectInfoCreateOrConnectWithoutCareerInput";
import { ProjectInfoCreateWithoutCareerInput } from "../inputs/ProjectInfoCreateWithoutCareerInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoCreateNestedManyWithoutCareerInput", {})
export class ProjectInfoCreateNestedManyWithoutCareerInput {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateWithoutCareerInput], {
    nullable: true
  })
  create?: ProjectInfoCreateWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoCreateOrConnectWithoutCareerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectInfoCreateOrConnectWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateManyCareerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectInfoCreateManyCareerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectInfoWhereUniqueInput[] | undefined;
}
