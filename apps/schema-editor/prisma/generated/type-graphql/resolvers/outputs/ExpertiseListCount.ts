import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpertiseListCountTagsArgs } from "./args/ExpertiseListCountTagsArgs";

@TypeGraphQL.ObjectType("ExpertiseListCount", {})
export class ExpertiseListCount {
  tags!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tags",
    nullable: false
  })
  getTags(@TypeGraphQL.Root() root: ExpertiseListCount, @TypeGraphQL.Args() args: ExpertiseListCountTagsArgs): number {
    return root.tags;
  }
}
