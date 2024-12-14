import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutExpertiseListInput } from "../inputs/IndividualCreateWithoutExpertiseListInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualCreateOrConnectWithoutExpertiseListInput", {})
export class IndividualCreateOrConnectWithoutExpertiseListInput {
  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: false
  })
  where!: IndividualWhereUniqueInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutExpertiseListInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutExpertiseListInput;
}
