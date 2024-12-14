import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Career } from "../models/Career";
import { EducationInfo } from "../models/EducationInfo";
import { Individual } from "../models/Individual";
import { Post } from "../models/Post";
import { ProjectInfo } from "../models/ProjectInfo";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  urls?: string | null;

  career?: Career | null;

  individual?: Individual | null;

  educationInfo?: EducationInfo | null;

  projectInfo?: ProjectInfo[];

  posts?: Post[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
