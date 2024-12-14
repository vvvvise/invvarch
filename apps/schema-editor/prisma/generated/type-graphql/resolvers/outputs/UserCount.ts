import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountProjectInfoArgs } from "./args/UserCountProjectInfoArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  projectInfo!: number;
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "projectInfo",
    nullable: false
  })
  getProjectInfo(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountProjectInfoArgs): number {
    return root.projectInfo;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts;
  }
}
