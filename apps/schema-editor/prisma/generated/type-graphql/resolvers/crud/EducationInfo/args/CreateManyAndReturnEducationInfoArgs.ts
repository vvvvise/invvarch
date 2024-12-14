import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoCreateManyInput } from "../../../inputs/EducationInfoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEducationInfoArgs {
  @TypeGraphQL.Field(_type => [EducationInfoCreateManyInput], {
    nullable: false
  })
  data!: EducationInfoCreateManyInput[];
}
