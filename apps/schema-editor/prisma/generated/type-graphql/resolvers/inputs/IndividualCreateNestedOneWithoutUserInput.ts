import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateOrConnectWithoutUserInput } from "../inputs/IndividualCreateOrConnectWithoutUserInput";
import { IndividualCreateWithoutUserInput } from "../inputs/IndividualCreateWithoutUserInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualCreateNestedOneWithoutUserInput", {})
export class IndividualCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => IndividualCreateWithoutUserInput, {
    nullable: true
  })
  create?: IndividualCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: IndividualCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: true
  })
  connect?: IndividualWhereUniqueInput | undefined;
}
