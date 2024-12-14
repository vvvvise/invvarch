import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateWithoutCareerInput } from "../inputs/IndividualCreateWithoutCareerInput";
import { IndividualUpdateWithoutCareerInput } from "../inputs/IndividualUpdateWithoutCareerInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";

@TypeGraphQL.InputType("IndividualUpsertWithoutCareerInput", {})
export class IndividualUpsertWithoutCareerInput {
  @TypeGraphQL.Field(_type => IndividualUpdateWithoutCareerInput, {
    nullable: false
  })
  update!: IndividualUpdateWithoutCareerInput;

  @TypeGraphQL.Field(_type => IndividualCreateWithoutCareerInput, {
    nullable: false
  })
  create!: IndividualCreateWithoutCareerInput;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  where?: IndividualWhereInput | undefined;
}
