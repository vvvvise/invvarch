import * as TypeGraphQL from "type-graphql";

export enum IndividualScalarFieldEnum {
  id = "id",
  userId = "userId"
}
TypeGraphQL.registerEnumType(IndividualScalarFieldEnum, {
  name: "IndividualScalarFieldEnum",
  description: undefined,
});
