import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateManyCareerInputEnvelope } from "../inputs/EducationInfoCreateManyCareerInputEnvelope";
import { EducationInfoCreateOrConnectWithoutCareerInput } from "../inputs/EducationInfoCreateOrConnectWithoutCareerInput";
import { EducationInfoCreateWithoutCareerInput } from "../inputs/EducationInfoCreateWithoutCareerInput";
import { EducationInfoScalarWhereInput } from "../inputs/EducationInfoScalarWhereInput";
import { EducationInfoUpdateManyWithWhereWithoutCareerInput } from "../inputs/EducationInfoUpdateManyWithWhereWithoutCareerInput";
import { EducationInfoUpdateWithWhereUniqueWithoutCareerInput } from "../inputs/EducationInfoUpdateWithWhereUniqueWithoutCareerInput";
import { EducationInfoUpsertWithWhereUniqueWithoutCareerInput } from "../inputs/EducationInfoUpsertWithWhereUniqueWithoutCareerInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoUpdateManyWithoutCareerNestedInput", {})
export class EducationInfoUpdateManyWithoutCareerNestedInput {
  @TypeGraphQL.Field(_type => [EducationInfoCreateWithoutCareerInput], {
    nullable: true
  })
  create?: EducationInfoCreateWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoCreateOrConnectWithoutCareerInput], {
    nullable: true
  })
  connectOrCreate?: EducationInfoCreateOrConnectWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoUpsertWithWhereUniqueWithoutCareerInput], {
    nullable: true
  })
  upsert?: EducationInfoUpsertWithWhereUniqueWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCreateManyCareerInputEnvelope, {
    nullable: true
  })
  createMany?: EducationInfoCreateManyCareerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoWhereUniqueInput], {
    nullable: true
  })
  set?: EducationInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EducationInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoWhereUniqueInput], {
    nullable: true
  })
  delete?: EducationInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoWhereUniqueInput], {
    nullable: true
  })
  connect?: EducationInfoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoUpdateWithWhereUniqueWithoutCareerInput], {
    nullable: true
  })
  update?: EducationInfoUpdateWithWhereUniqueWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoUpdateManyWithWhereWithoutCareerInput], {
    nullable: true
  })
  updateMany?: EducationInfoUpdateManyWithWhereWithoutCareerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EducationInfoScalarWhereInput[] | undefined;
}
