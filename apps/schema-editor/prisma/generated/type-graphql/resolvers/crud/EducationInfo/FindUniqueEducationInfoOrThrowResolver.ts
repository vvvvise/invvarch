import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEducationInfoOrThrowArgs } from "./args/FindUniqueEducationInfoOrThrowArgs";
import { EducationInfo } from "../../../models/EducationInfo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EducationInfo)
export class FindUniqueEducationInfoOrThrowResolver {
  @TypeGraphQL.Query(_returns => EducationInfo, {
    nullable: true
  })
  async getEducationInfo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEducationInfoOrThrowArgs): Promise<EducationInfo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).educationInfo.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
