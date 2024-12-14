import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoUpdateInput } from "../../../inputs/EducationInfoUpdateInput";
import { EducationInfoWhereUniqueInput } from "../../../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoUpdateInput, {
    nullable: false
  })
  data!: EducationInfoUpdateInput;

  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;
}
