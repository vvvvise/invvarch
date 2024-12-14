import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationInfoOrderByWithRelationInput } from "../../../inputs/EducationInfoOrderByWithRelationInput";
import { EducationInfoWhereInput } from "../../../inputs/EducationInfoWhereInput";
import { EducationInfoWhereUniqueInput } from "../../../inputs/EducationInfoWhereUniqueInput";
import { EducationInfoScalarFieldEnum } from "../../../../enums/EducationInfoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEducationInfoArgs {
  @TypeGraphQL.Field(_type => EducationInfoWhereInput, {
    nullable: true
  })
  where?: EducationInfoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EducationInfoOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationInfoWhereUniqueInput, {
    nullable: true
  })
  cursor?: EducationInfoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EducationInfoScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "schoolName" | "undergraduate" | "startDate" | "endDate" | "summary" | "careerId"> | undefined;
}
