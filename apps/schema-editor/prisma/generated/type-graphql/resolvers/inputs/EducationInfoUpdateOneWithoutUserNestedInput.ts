import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationInfoCreateOrConnectWithoutUserInput } from "../inputs/EducationInfoCreateOrConnectWithoutUserInput";
import { EducationInfoCreateWithoutUserInput } from "../inputs/EducationInfoCreateWithoutUserInput";
import { EducationInfoUpdateToOneWithWhereWithoutUserInput } from "../inputs/EducationInfoUpdateToOneWithWhereWithoutUserInput";
import { EducationInfoUpsertWithoutUserInput } from "../inputs/EducationInfoUpsertWithoutUserInput";
import { EducationInfoWhereInput } from "../inputs/EducationInfoWhereInput";
import { EducationInfoWhereUniqueInput } from "../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.InputType("EducationInfoUpdateOneWithoutUserNestedInput", {})
export class EducationInfoUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => EducationInfoCreateWithoutUserInput, {
    nullable: true
  })
  create?: EducationInfoCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: EducationInfoCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: EducationInfoUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  disconnect?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  delete?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: true
  })
  connect?: EducationInfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EducationInfoUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: EducationInfoUpdateToOneWithWhereWithoutUserInput | undefined;
}
