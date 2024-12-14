import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateOrConnectWithoutTagsInput } from "../inputs/ExpertiseListCreateOrConnectWithoutTagsInput";
import { ExpertiseListCreateWithoutTagsInput } from "../inputs/ExpertiseListCreateWithoutTagsInput";
import { ExpertiseListScalarWhereInput } from "../inputs/ExpertiseListScalarWhereInput";
import { ExpertiseListUpdateManyWithWhereWithoutTagsInput } from "../inputs/ExpertiseListUpdateManyWithWhereWithoutTagsInput";
import { ExpertiseListUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/ExpertiseListUpdateWithWhereUniqueWithoutTagsInput";
import { ExpertiseListUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/ExpertiseListUpsertWithWhereUniqueWithoutTagsInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListUpdateManyWithoutTagsNestedInput", {})
export class ExpertiseListUpdateManyWithoutTagsNestedInput {
  @TypeGraphQL.Field(_type => [ExpertiseListCreateWithoutTagsInput], {
    nullable: true
  })
  create?: ExpertiseListCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: ExpertiseListCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListUpsertWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  upsert?: ExpertiseListUpsertWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereUniqueInput], {
    nullable: true
  })
  set?: ExpertiseListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExpertiseListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereUniqueInput], {
    nullable: true
  })
  delete?: ExpertiseListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpertiseListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListUpdateWithWhereUniqueWithoutTagsInput], {
    nullable: true
  })
  update?: ExpertiseListUpdateWithWhereUniqueWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListUpdateManyWithWhereWithoutTagsInput], {
    nullable: true
  })
  updateMany?: ExpertiseListUpdateManyWithWhereWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExpertiseListScalarWhereInput[] | undefined;
}
