import * as TypeGraphQL from "type-graphql";

export enum EducationInfoScalarFieldEnum {
  id = "id",
  userId = "userId",
  schoolName = "schoolName",
  undergraduate = "undergraduate",
  startDate = "startDate",
  endDate = "endDate",
  summary = "summary",
  careerId = "careerId"
}
TypeGraphQL.registerEnumType(EducationInfoScalarFieldEnum, {
  name: "EducationInfoScalarFieldEnum",
  description: undefined,
});
