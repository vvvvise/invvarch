import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutCareerInput } from "../inputs/IndividualCreateWithoutCareerInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualCreateOrConnectWithoutCareerInput", {})
export class IndividualCreateOrConnectWithoutCareerInput {
  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutCareerInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutCareerInput;
}
