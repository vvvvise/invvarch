import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseTagCountListsArgs } from "./args/ExpertiseTagCountListsArgs";

@TypeGraphQL.ObjectType("ExpertiseTagCount", {})
export class ExpertiseTagCount {
  lists!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "lists",
    nullable: false
  })
  getLists(@TypeGraphQL.Root() root: ExpertiseTagCount, @TypeGraphQL.Args() args: ExpertiseTagCountListsArgs): number {
    return root.lists;
  }
}
