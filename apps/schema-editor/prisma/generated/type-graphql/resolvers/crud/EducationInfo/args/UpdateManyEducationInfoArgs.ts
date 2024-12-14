import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoUpdateManyMutationInput } from "../../../inputs/EducationInfoUpdateManyMutationInput";
import { EducationInfoWhereInput } from "../../../inputs/EducationInfoWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoUpdateManyMutationInput, {
    nullable: false
  })
  data!: EducationInfoUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;
}
