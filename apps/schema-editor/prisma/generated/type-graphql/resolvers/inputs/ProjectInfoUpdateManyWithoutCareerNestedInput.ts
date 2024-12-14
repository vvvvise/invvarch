import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyCareerInputEnvelope } from "../inputs/ProjectInfoCreateManyCareerInputEnvelope";
import { ProjectInfoCreateOrConnectWithoutCareerInput } from "../inputs/ProjectInfoCreateOrConnectWithoutCareerInput";
import { ProjectInfoCreateWithoutCareerInput } from "../inputs/ProjectInfoCreateWithoutCareerInput";
import { ProjectInfoScalarWhereInput } from "../inputs/ProjectInfoScalarWhereInput";
import { ProjectInfoUpdateManyWithWhereWithoutCareerInput } from "../inputs/ProjectInfoUpdateManyWithWhereWithoutCareerInput";
import { ProjectInfoUpdateWithWhereUniqueWithoutCareerInput } from "../inputs/ProjectInfoUpdateWithWhereUniqueWithoutCareerInput";
import { ProjectInfoUpsertWithWhereUniqueWithoutCareerInput } from "../inputs/ProjectInfoUpsertWithWhereUniqueWithoutCareerInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoUpdateManyWithoutCareerNestedInput", {})
export class ProjectInfoUpdateManyWithoutCareerNestedInput {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateWithoutCareerInput], {
    nullable: true
  })
  create?: ProjectInfoCreateWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoCreateOrConnectWithoutCareerInput], {
    nullable: true
  })
  connectOrCreate?: ProjectInfoCreateOrConnectWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoUpsertWithWhereUniqueWithoutCareerInput], {
    nullable: true
  })
  upsert?: ProjectInfoUpsertWithWhereUniqueWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateManyCareerInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectInfoCreateManyCareerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoUpdateWithWhereUniqueWithoutCareerInput], {
    nullable: true
  })
  update?: ProjectInfoUpdateWithWhereUniqueWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoUpdateManyWithWhereWithoutCareerInput], {
    nullable: true
  })
  updateMany?: ProjectInfoUpdateManyWithWhereWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectInfoScalarWhereInput[] | undefined;
}
