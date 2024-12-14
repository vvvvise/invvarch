import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoWhereInput } from "../../../inputs/EducationInfoWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;
}
