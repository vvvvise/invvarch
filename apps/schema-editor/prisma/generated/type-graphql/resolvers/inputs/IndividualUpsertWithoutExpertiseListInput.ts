import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutExpertiseListInput } from "../inputs/IndividualCreateWithoutExpertiseListInput";
import { IndividualUpdateWithoutExpertiseListInput } from "../inputs/IndividualUpdateWithoutExpertiseListInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpsertWithoutExpertiseListInput", {})
export class IndividualUpsertWithoutExpertiseListInput {
  @TypeGraphQL.Field(_type => IndividualUpdateWithoutExpertiseListInput, {
    nullable: false
  })
  update!: IndividualUpdateWithoutExpertiseListInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutExpertiseListInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutExpertiseListInput;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;
}
