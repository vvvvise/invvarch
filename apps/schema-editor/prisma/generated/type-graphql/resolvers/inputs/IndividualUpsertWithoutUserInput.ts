import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutUserInput } from "../inputs/IndividualCreateWithoutUserInput";
import { IndividualUpdateWithoutUserInput } from "../inputs/IndividualUpdateWithoutUserInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpsertWithoutUserInput", {})
export class IndividualUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => IndividualUpdateWithoutUserInput, {
    nullable: false
  })
  update!: IndividualUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutUserInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;
}
