import * as TypeGraphQL from "type-graphql";

export enum CareerScalarFieldEnum {
  id = "id",
  userId = "userId",
  individualId = "individualId"
}
TypeGraphQL.registerEnumType(CareerScalarFieldEnum, {
  name: "CareerScalarFieldEnum",
  description: undefined,
});
