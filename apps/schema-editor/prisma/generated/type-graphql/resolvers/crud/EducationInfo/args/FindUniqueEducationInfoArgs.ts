import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoWhereUniqueInput } from "../../../inputs/EducationInfoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: false
  })
  where!: EducationInfoWhereUniqueInput;
}