import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Career } from "../models/Career";
import { ExpertiseList } from "../models/ExpertiseList";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Individual", {})
export class Individual {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  expertiseList?: ExpertiseList | null;

  career?: Career | null;
}
