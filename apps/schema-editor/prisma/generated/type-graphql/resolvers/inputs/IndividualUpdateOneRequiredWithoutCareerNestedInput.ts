import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateOrConnectWithoutCareerInput } from "../inputs/IndividualCreateOrConnectWithoutCareerInput";
import { IndividualCreateWithoutCareerInput } from "../inputs/IndividualCreateWithoutCareerInput";
import { IndividualUpdateToOneWithWhereWithoutCareerInput } from "../inputs/IndividualUpdateToOneWithWhereWithoutCareerInput";
import { IndividualUpsertWithoutCareerInput } from "../inputs/IndividualUpsertWithoutCareerInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualUpdateOneRequiredWithoutCareerNestedInput", {})
export class IndividualUpdateOneRequiredWithoutCareerNestedInput {
  @TypeGraphQL.Field(_type => IndividualCreateWithoutCareerInput, {
    nullable: true
  })
  create?: IndividualCreateWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateOrConnectWithoutCareerInput, {
    nullable: true
  })
  connectOrCreate?: IndividualCreateOrConnectWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpsertWithoutCareerInput, {
    nullable: true
  })
  upsert?: IndividualUpsertWithoutCareerInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: true
  })
  connect?: IndividualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateToOneWithWhereWithoutCareerInput, {
    nullable: true
  })
  update?: IndividualUpdateToOneWithWhereWithoutCareerInput | undefined;
}
