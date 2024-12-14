import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCreateOrConnectWithoutIndividualInput } from "../inputs/ExpertiseListCreateOrConnectWithoutIndividualInput";
import { ExpertiseListCreateWithoutIndividualInput } from "../inputs/ExpertiseListCreateWithoutIndividualInput";
import { ExpertiseListUpdateToOneWithWhereWithoutIndividualInput } from "../inputs/ExpertiseListUpdateToOneWithWhereWithoutIndividualInput";
import { ExpertiseListUpsertWithoutIndividualInput } from "../inputs/ExpertiseListUpsertWithoutIndividualInput";
import { ExpertiseListWhereInput } from "../inputs/ExpertiseListWhereInput";
import { ExpertiseListWhereUniqueInput } from "../inputs/ExpertiseListWhereUniqueInput";

@TypeGraphQL.InputType("ExpertiseListUpdateOneWithoutIndividualNestedInput", {})
export class ExpertiseListUpdateOneWithoutIndividualNestedInput {
  @TypeGraphQL.Field(_type => ExpertiseListCreateWithoutIndividualInput, {
    nullable: true
  })
  create?: ExpertiseListCreateWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListCreateOrConnectWithoutIndividualInput, {
    nullable: true
  })
  connectOrCreate?: ExpertiseListCreateOrConnectWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListUpsertWithoutIndividualInput, {
    nullable: true
  })
  upsert?: ExpertiseListUpsertWithoutIndividualInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  disconnect?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereInput, {
    nullable: true
  })
  delete?: ExpertiseListWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListWhereUniqueInput, {
    nullable: true
  })
  connect?: ExpertiseListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExpertiseListUpdateToOneWithWhereWithoutIndividualInput, {
    nullable: true
  })
  update?: ExpertiseListUpdateToOneWithWhereWithoutIndividualInput | undefined;
}
