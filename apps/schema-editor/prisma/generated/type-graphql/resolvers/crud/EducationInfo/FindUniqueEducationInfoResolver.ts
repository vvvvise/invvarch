import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEducationInfoArgs } from "./args/FindUniqueEducationInfoArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class FindUniqueEducationInfoResolver {
  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async educationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEducationInfoArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
