import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExpertiseListOrThrowArgs } from "./args/FindUniqueExpertiseListOrThrowArgs";
import { ExpertiseList } from "../../../models/ExpertiseList";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ExpertiseList)
export class FindUniqueExpertiseListOrThrowResolver {
  @TypeGraphQL.Query(_returns => ExpertiseList, {
    nullable: true
  })
  async getExpertiseList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExpertiseListOrThrowArgs): Promise<ExpertiseList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseList.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
