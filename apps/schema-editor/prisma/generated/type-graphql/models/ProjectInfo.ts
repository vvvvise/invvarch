import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Career } from "../models/Career";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ProjectInfo", {})
export class ProjectInfo {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  position!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary?: string | null;

  career?: Career;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  careerId!: number;
}
