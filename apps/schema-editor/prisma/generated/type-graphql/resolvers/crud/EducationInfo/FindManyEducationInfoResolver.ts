import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEducationInfoArgs } from "./args/FindManyEducationInfoArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class FindManyEducationInfoResolver {
  @TypeGraphQL.Query(_returns => [EducationInfo], {
    nullable: false
  })
  async educationInfos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEducationInfoArgs): Promise<EducationInfo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
