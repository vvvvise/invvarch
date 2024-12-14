import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualUpdateWithoutUserInput } from "../inputs/IndividualUpdateWithoutUserInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpdateToOneWithWhereWithoutUserInput", {})
export class IndividualUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateWithoutUserInput, {
    nullable: false
  })
  data!: IndividualUpdateWithoutUserInput;
}
