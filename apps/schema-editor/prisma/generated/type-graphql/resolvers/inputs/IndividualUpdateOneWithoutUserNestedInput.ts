import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateOrConnectWithoutUserInput } from "../inputs/IndividualCreateOrConnectWithoutUserInput";
import { IndividualCreateWithoutUserInput } from "../inputs/IndividualCreateWithoutUserInput";
import { IndividualUpdateToOneWithWhereWithoutUserInput } from "../inputs/IndividualUpdateToOneWithWhereWithoutUserInput";
import { IndividualUpsertWithoutUserInput } from "../inputs/IndividualUpsertWithoutUserInput";
import { IndividualWhereInput } from "../inputs/IndividualWhereInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualUpdateOneWithoutUserNestedInput", {})
export class IndividualUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => IndividualCreateWithoutUserInput, {
    nullable: true
  })
  create?: IndividualCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: IndividualCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: IndividualUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  disconnect?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereInput, {
    nullable: true
  })
  delete?: IndividualWhereInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: true
  })
  connect?: IndividualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: IndividualUpdateToOneWithWhereWithoutUserInput | undefined;
}
