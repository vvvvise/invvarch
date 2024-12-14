import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCreateOrConnectWithoutListsInput } from "../inputs/ExpertiseTagCreateOrConnectWithoutListsInput";
import { ExpertiseTagCreateWithoutListsInput } from "../inputs/ExpertiseTagCreateWithoutListsInput";
import { ExpertiseTagWhereUniqueInput } from "../inputs/ExpertiseTagWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseTagCreateNestedManyWithoutListsInput", {})
export class ExpertiseTagCreateNestedManyWithoutListsInput {
  @TypeGraphQL.Field(_type => [ExpertiseTagCreateWithoutListsInput], {
    nullable: true
  })
  create?: ExpertiseTagCreateWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagCreateOrConnectWithoutListsInput], {
    nullable: true
  })
  connectOrCreate?: ExpertiseTagCreateOrConnectWithoutListsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseTagWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpertiseTagWhereUniqueInput[] | undefined;
}
