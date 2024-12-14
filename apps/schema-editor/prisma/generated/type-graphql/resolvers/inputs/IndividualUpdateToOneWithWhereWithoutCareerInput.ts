import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualUpdateWithoutCareerInput } from "../inputs/IndividualUpdateWithoutCareerInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpdateToOneWithWhereWithoutCareerInput", {})
export class IndividualUpdateToOneWithWhereWithoutCareerInput {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateWithoutCareerInput, {
    nullable: false
  })
  data!: IndividualUpdateWithoutCareerInput;
}
