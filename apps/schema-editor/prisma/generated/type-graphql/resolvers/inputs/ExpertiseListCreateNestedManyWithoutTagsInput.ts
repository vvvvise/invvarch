import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateOrConnectWithoutTagsInput } from "../inputs/ExpertiseListCreateOrConnectWithoutTagsInput";
import { ExpertiseListCreateWithoutTagsInput } from "../inputs/ExpertiseListCreateWithoutTagsInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListCreateNestedManyWithoutTagsInput", {})
export class ExpertiseListCreateNestedManyWithoutTagsInput {
  @TypeGraphQL.Field(_type => [ExpertiseListCreateWithoutTagsInput], {
    nullable: true
  })
  create?: ExpertiseListCreateWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListCreateOrConnectWithoutTagsInput], {
    nullable: true
  })
  connectOrCreate?: ExpertiseListCreateOrConnectWithoutTagsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpertiseListWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpertiseListWhereUniqueInput[] | undefined;
}
