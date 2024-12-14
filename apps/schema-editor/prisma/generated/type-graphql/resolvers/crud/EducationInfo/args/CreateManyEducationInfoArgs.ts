import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoCreateManyInput } from "../../../inputs/EducationInfoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEducationInfoArgs {
  @TypeGraphQL.Field(_type => [EducationInfoCreateManyInput], {
    nullable: false
  })
  data!: EducationInfoCreateManyInput[];
}
