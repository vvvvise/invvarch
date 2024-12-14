import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IndividualCreateOrConnectWithoutExpertiseListInput } from "../inputs/IndividualCreateOrConnectWithoutExpertiseListInput";
import { IndividualCreateWithoutExpertiseListInput } from "../inputs/IndividualCreateWithoutExpertiseListInput";
import { IndividualUpdateToOneWithWhereWithoutExpertiseListInput } from "../inputs/IndividualUpdateToOneWithWhereWithoutExpertiseListInput";
import { IndividualUpsertWithoutExpertiseListInput } from "../inputs/IndividualUpsertWithoutExpertiseListInput";
import { IndividualWhereUniqueInput } from "../inputs/IndividualWhereUniqueInput";

@TypeGraphQL.InputType("IndividualUpdateOneRequiredWithoutExpertiseListNestedInput", {})
export class IndividualUpdateOneRequiredWithoutExpertiseListNestedInput {
  @TypeGraphQL.Field(_type => IndividualCreateWithoutExpertiseListInput, {
    nullable: true
  })
  create?: IndividualCreateWithoutExpertiseListInput | undefined;

  @TypeGraphQL.Field(_type => IndividualCreateOrConnectWithoutExpertiseListInput, {
    nullable: true
  })
  connectOrCreate?: IndividualCreateOrConnectWithoutExpertiseListInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpsertWithoutExpertiseListInput, {
    nullable: true
  })
  upsert?: IndividualUpsertWithoutExpertiseListInput | undefined;

  @TypeGraphQL.Field(_type => IndividualWhereUniqueInput, {
    nullable: true
  })
  connect?: IndividualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IndividualUpdateToOneWithWhereWithoutExpertiseListInput, {
    nullable: true
  })
  update?: IndividualUpdateToOneWithWhereWithoutExpertiseListInput | undefined;
}
