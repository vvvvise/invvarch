import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoCreateInput } from "../../../inputs/EducationInfoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoCreateInput, {
    nullable: false
  })
  data!: EducationInfoCreateInput;
}
