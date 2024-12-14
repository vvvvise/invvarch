import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutUserInput } from "../inputs/IndividualCreateWithoutUserInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualCreateOrConnectWithoutUserInput", {})
export class IndividualCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutUserInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutUserInput;
}
