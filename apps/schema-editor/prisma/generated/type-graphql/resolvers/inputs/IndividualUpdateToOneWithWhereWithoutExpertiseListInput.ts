import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualUpdateWithoutExpertiseListInput } from "../inputs/IndividualUpdateWithoutExpertiseListInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpdateToOneWithWhereWithoutExpertiseListInput", {})
export class IndividualUpdateToOneWithWhereWithoutExpertiseListInput {
  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateWithoutExpertiseListInput, {
    nullable: false
  })
  data!: IndividualUpdateWithoutExpertiseListInput;
}
