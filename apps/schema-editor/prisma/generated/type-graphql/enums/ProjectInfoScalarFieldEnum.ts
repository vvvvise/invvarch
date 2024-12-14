import * as TypeGraphQL from "type-graphql";

export enum ProjectInfoScalarFieldEnum {
  id = "id",
  userId = "userId",
  title = "title",
  url = "url",
  position = "position",
  startDate = "startDate",
  endDate = "endDate",
  productName = "productName",
  summary = "summary",
  careerId = "careerId"
}
TypeGraphQL.registerEnumType(ProjectInfoScalarFieldEnum, {
  name: "ProjectInfoScalarFieldEnum",
  description: undefined,
});
