import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { ExpertiseTagListsArgs } from "./args/ExpertiseTagListsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class ExpertiseTagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ExpertiseList], {
    nullable: false
  })
  async lists(@TypeGraphQL.Root() expertiseTag: ExpertiseTag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ExpertiseTagListsArgs): Promise<ExpertiseList[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findUniqueOrThrow({
      where: {
        id: expertiseTag.id,
      },
    }).lists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
