import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectInfoCreateManyUserInputEnvelope } from "../inputs/ProjectInfoCreateManyUserInputEnvelope";
import { ProjectInfoCreateOrConnectWithoutUserInput } from "../inputs/ProjectInfoCreateOrConnectWithoutUserInput";
import { ProjectInfoCreateWithoutUserInput } from "../inputs/ProjectInfoCreateWithoutUserInput";
import { ProjectInfoScalarWhereInput } from "../inputs/ProjectInfoScalarWhereInput";
import { ProjectInfoUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectInfoUpdateManyWithWhereWithoutUserInput";
import { ProjectInfoUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectInfoUpdateWithWhereUniqueWithoutUserInput";
import { ProjectInfoUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectInfoUpsertWithWhereUniqueWithoutUserInput";
import { ProjectInfoWhereUniqueInput } from "../inputs/ProjectInfoWhereUniqueInput";

@TypeGraphQL.InputType("ProjectInfoUpdateManyWithoutUserNestedInput", {})
export class ProjectInfoUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ProjectInfoCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectInfoCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectInfoCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProjectInfoUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectInfoCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectInfoCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectInfoUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProjectInfoUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProjectInfoUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectInfoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectInfoScalarWhereInput[] | undefined;
}
