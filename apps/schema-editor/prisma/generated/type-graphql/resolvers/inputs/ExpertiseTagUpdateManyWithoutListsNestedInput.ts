import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateOrConnectWithoutListsInput } from "../inputs/ExpertiseTagCreateOrConnectWithoutListsInput";
import { ExpertiseTagCreateWithoutListsInput } from "../inputs/ExpertiseTagCreateWithoutListsInput";
import { ExpertiseTagScalarWhereInput } from "../inputs/ExpertiseTagScalarWhereInput";
import { ExpertiseTagUpdateManyWithWhereWithoutListsInput } from "../inputs/ExpertiseTagUpdateManyWithWhereWithoutListsInput";
import { ExpertiseTagUpdateWithWhereUniqueWithoutListsInput } from "../inputs/ExpertiseTagUpdateWithWhereUniqueWithoutListsInput";
import { ExpertiseTagUpsertWithWhereUniqueWithoutListsInput } from "../inputs/ExpertiseTagUpsertWithWhereUniqueWithoutListsInput";
import { ExpertiseTagWhereUniqueInput } from "../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseTagUpdateManyWithoutListsNestedInput", {})
export class ExpertiseTagUpdateManyWithoutListsNestedInput {
  @TypeGraphQL.Field(_type => [ExpertiseTagCreateWithoutListsInput], {
    nullable: true
  })
  create?: ExpertiseTagCreateWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagCreateOrConnectWithoutListsInput], {
    nullable: true
  })
  connectOrCreate?: ExpertiseTagCreateOrConnectWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagUpsertWithWhereUniqueWithoutListsInput], {
    nullable: true
  })
  upsert?: ExpertiseTagUpsertWithWhereUniqueWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereUniqueInput], {
    nullable: true
  })
  set?: ExpertiseTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExpertiseTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereUniqueInput], {
    nullable: true
  })
  delete?: ExpertiseTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpertiseTagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagUpdateWithWhereUniqueWithoutListsInput], {
    nullable: true
  })
  update?: ExpertiseTagUpdateWithWhereUniqueWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagUpdateManyWithWhereWithoutListsInput], {
    nullable: true
  })
  updateMany?: ExpertiseTagUpdateManyWithWhereWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExpertiseTagScalarWhereInput[] | undefined;
}
