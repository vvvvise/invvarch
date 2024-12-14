import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoCreateInput } from "../../../inputs/EducationInfoCreateInput";
import { EducationInfoUpdateInput } from "../../../inputs/EducationInfoUpdateInput";
import { EducationInfoWhereUniqueInput } from "../../../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationInfoCreateInput, {
    nullable: false
  })
  create!: EducationInfoCreateInput;

  @TypeGraphQL.Field(_type => EducationInfoUpdateInput, {
    nullable: false
  })
  update!: EducationInfoUpdateInput;
}
